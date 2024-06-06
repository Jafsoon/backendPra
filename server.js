import express from 'express'
import blogRouter from './routes/blogposts.js'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'

const app = express()

app.use('/blog', blogRouter)
app.use('/product', productsRouter)
app.use('/user', usersRouter)

const port = 8080
app.listen(process.env.port,() => {
    console.log(`Server is running on port ${port}`)
})
