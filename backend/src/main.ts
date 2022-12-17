import express, { Request, Response }  from 'express'

const app =  express()

app.get('/hola' , (req: Request, res: Response) => {
  res.send("holaaa mundo")
})
app.listen(4000, () => {
  console.log( 'server at port 4000' );
})