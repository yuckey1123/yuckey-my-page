import fs from "fs";
import path from "path";

import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export interface PostProps {
  slug: string;
  title: string;
  content: string;
  thumbnail?: string | null;
  html: string;
  tags: string;
  date: string;
}

/**
 * postを全て取得する
 */
export const getAllPosts = (): PostProps[] => {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "public/posts"));

  return fileNames.map((fileName) => {
    return getPost(fileName);
  });
};

/**
 * HTMLに変換したpostを取得する
 * @return PostProps
 */
export const getPost = (slug: string): PostProps => {
  // ファイルを読み込む
  const file = fs.readFileSync(path.join(process.cwd(), "public/posts", slug, "index.md"), "utf8");
  const matterResult = matter(file);

  // マークダウンをHTMLに変換する
  const remarkHtml = unified()
    .use(remarkParse) // Markdown を解析
    .use(remarkMath) // 数式を解析
    .use(remarkBreaks) // 改行を <br> に変換
    .use(remarkGfm) // GitHub Flavored Markdown を適用
    .use(remarkRehype, { allowDangerousHtml: true }) // Markdown を HTML に変換
    .use(rehypeHighlight) // コードブロックのハイライト
    .use(rehypeKatex) // 数式を KaTeX でレンダリング
    .use(rehypeDocument, {
      css: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
    }) // KaTeX の CSS を適用
    .use(rehypeStringify); // HTML を文字列に変換

  const html = remarkHtml.processSync(matterResult.content).toString();

  return {
    slug,
    title: matterResult.data.title,
    tags: matterResult.data.tags,
    date: matterResult.data.date,
    content: matterResult.content,
    thumbnail: null,
    html,
  };
};
