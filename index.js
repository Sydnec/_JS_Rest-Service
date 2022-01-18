import express from 'express'
import incrementrouter from './routes/increment.js'
import decrementrouter from './routes/decrement.js'

const app = express()

app.use('/Dec', decrementrouter)
app.use('/Inc', incrementrouter)


app.listen(3000)