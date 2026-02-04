# Toto

Startovní kód pro vzorovou aplikaci k lekci 9.

Ve složce API jsou ukázková data se seznamem úkoů v úkolníčku.

## Lokální server Apidroid

Nad daty lze spustit lokální server, který vytvoří API endpointy, ze který je možné data číst nebo je i zapisovat, upravovat, mazat.

Použijeme baliček Apidroid → [dokumentace](https://www.npmjs.com/package/apidroid)

## Spuštění serveru

```bash
npx apidroid@latest
```

## API endpointy

- **/api/todos** - seznam úkolů
- **/api/todos/1** - detail úkolu

Lze provádět dotazy GET, POST, PUT, PATCH, DELETE.