import express from 'express'
import cors from 'cors'
import router from './router'
// import prisma from './db'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

// app.get('/', async (req, res) => {
//     const users = await prisma.users.findMany()
//     res.json({ users })
// })

export default app



// {
//   "name": "tigran-backend",
//   "version": "1.0.0",
//   "description": "",
//   "type": "module",
//   "main": "server.ts",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "nodemon",
//     "start": "ts-node src/index.ts"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "devDependencies": {
//     "@types/node": "^20.12.8",
//     "nodemon": "^3.1.0",
//     "ts-node": "^10.9.2",
//     "typescript": "^5.4.5"
//   }
// }


// {
//     "watch": [
//         "src"
//     ],
//     "ext": "ts, js",
//     "ignore": [],
//     "exec": "ts-node ./src/index.ts"
// }

// {
//     "compilerOptions": {
//         "target": "ES2018",
//             "lib": ["ESNext"],
//                 "esModuleInterop": true,
//                     "rootDir": "./src",
//                         "module": "NodeNext",
//                             "resolveJsonModule": true,
//                                 "allowJs": true,
//                                     "sourceMap": true,
//                                         "outDir": "./build",
//                                             "forceConsistentCasingInFileNames": true,
//                                                 "noImplicitAny": true,
//                                                     "strict": true,
//                                                         "skipLibCheck": true
//     },
//     "include": ["src/**/*"],
//         "exclude": ["node_modules"],
//             "lib": ["esnext"],
//                 "ts-node": {
//         "esm": true
//     }
// }