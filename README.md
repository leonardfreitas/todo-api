## Executando o projeto

- clone o projeto:
```
git clone https://github.com/leonardfreitas/todo-api.git
```

- abra a pasta do projeto clonado
```
cd todo-api
```

- crie o arquivo .env com as credenciais do banco de dados, como estamos utilizando sqlite, siga o examplo abaixo:
```
NODE_ENV=development
DATABASE_URL="file:./dev.db"
```

- execte as migrações do banco de dados para criar e gerar as tabelas:
```
npx prisma migrate deploy
```

- Inicie o servidor:
```
npm run dev
```
