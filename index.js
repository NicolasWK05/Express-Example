import express from "express";
import {router} from "./routers/bookRouter.js";

const app = express()

const port = 3000;

app.get('/', (res, req) => {

    req.send('Test')
})

app.use('/books', router)

app.listen(port)
