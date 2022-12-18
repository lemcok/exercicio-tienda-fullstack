import express from 'express'
import { routerProduct } from './routes/product.routes';
import cors from 'cors'
import path from 'path';

const app =  express()

app.use(cors())
app.use('/products', routerProduct)


app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

app.listen(4000, () => {
  console.log( 'server at port 4000' );
})