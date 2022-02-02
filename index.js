import express from 'express'
import personRouter from './routes/person_router.js'
import companyRouter from './routes/company_router.js'

const app = express()
const company = companyRouter()
const person = personRouter()

app.use('/person/', DAO)
app.use('/company/', DAO)

app.listen(3000)