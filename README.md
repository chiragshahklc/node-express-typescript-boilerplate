# Node Express Typescript boilerplate

Boilerplate for typescript based Node + Express project.

## Getting Started
For Development
```
npm run dev
```
For production
```
npm start
```

## Environment Variables
We have configured [dotenv](https://www.npmjs.com/package/dotenv) preloaded in scripts commands. Thus, you will require to create `.env` file using `.env.sample` which is available in the root.<br>
You can check `package.json` file for more understanding.


**For Development**<br>
Create `.env.development` using reference of `.env.sample`

**For Production**<br>
Create `.env` using reference of `.env.sample`

Contents of `.env.sample`
```sh
# set environment - 'development' || 'production'
NODE_ENV='development'
# express listening port
PORT=8080
```

## References

How to use ESLint with TypeScript

> [https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

Use TypeScript to Build a Node API with Express

> [https://developer.okta.com/blog/2018/11/15/node-express-typescript](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

Create a server with Nodemon + Express + Typescript

> [https://medium.com/create-a-server-with-nodemon-express-typescript/create-a-server-with-nodemon-express-typescript-f7c88fb5ee71](https://medium.com/create-a-server-with-nodemon-express-typescript/create-a-server-with-nodemon-express-typescript-f7c88fb5ee71)

Type Search

> [https://www.typescriptlang.org/dt/search?search=](https://www.typescriptlang.org/dt/search?search=)
