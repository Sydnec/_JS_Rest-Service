import express from "express"
import connection from "../connection.js"
import personDAO from "../DAO/person_dao.js"

const router = new express.Router()
const db = new connection('./db/database.db')
const personDAO = new personDAO(db)

router.get('/', (req, res) => {
    res.status(404).send(personDAO.findAll(req.params.tableName))
})

router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(personDAO.find(req.params.tableName, id))
})
router.put('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(personDAO.update(req.params.tableName, id))
})
router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(personDAO.update(req.params.tableName, id))
})

export default router