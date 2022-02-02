import express from "express"
import connection from "../connection.js"
import DAO from "./dao_controler.js"

const router = new express.Router()
const db = new connection('./db/database.db')
const dao = new DAO(db)

router.get('/:tableName', (req, res) => {
    res.status(404).send(dao.findAll(req.params.tableName))
})

router.get('/:tableName/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(dao.find(req.params.tableName, id))
})
router.put('/:tableName/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(dao.update(req.params.tableName, id))
})
router.delete('/:tableName/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(dao.update(req.params.tableName, id))
})

export default router