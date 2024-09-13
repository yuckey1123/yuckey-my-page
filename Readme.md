## START UP

create docker image (first exec)
```
$ sudo docker compose run --rm app sh -c 'npx create-next-app . --typescript'
```

```
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

build (not first exec)
```
docker compose build
```

start docker
```
docker compose up -d
```

checked: 
http://localhost:3000/

close docker
```
docker compose down
```

prettier
```
docker compose exec app npm run prettier
```

eslint(lint-fix)
```
docker compose exec app npm run lint-fix
```

check npm packages
```
docker compose exec app npm list
```
