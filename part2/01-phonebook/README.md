# Part2 --> Phonebook

>crear el proyecto 
>
>```bash
># npm 7+, extra double-dash is needed:
>npm create vite@latest introdemo -- --template react
>```

## Ejercicios 2.6.-2.10.

Crear una api local

>
>
>db.json
>
>```json
>{
>  "notes": [
>    {
>      "id": "1",
>      "content": "HTML is easy",
>      "important": true
>    },
>    {
>      "id": "2",
>      "content": "Browser can execute only JavaScript",
>      "important": false
>    },
>    {
>      "id": "3",
>      "content": "GET and POST are the most important methods of HTTP protocol",
>      "important": true
>    }
>  ]
>}
>```
>
>levantar el servidor usando json-server
>
>```bash
>npx json-server --port 3001 db.json
>```



> Install *json-server* as a development dependency (only used during development) by executing the command:
>
>```js
>npm install json-server --save-dev
>```
>
>and making a small addition to the *scripts* part of the *package.json* file:
>
>```json
>{
>  // ... 
>  "scripts": {
>    "dev": "vite",
>    "build": "vite build",
>    "lint": "eslint .",
>    "preview": "vite preview",
>
>    "server": "json-server -p 3001 db.json"
>  },
>}
>```
>
>```bash
>npm run server
>```

## Ejercicios 2.11.

## Ejercicios 2.12-2.15

## Ejercicios 2.16-2.17