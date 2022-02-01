import express from 'express'
import DAO from './routes/dao.js'

const app = express()

app.use('/', DAO)

app.listen(3000)