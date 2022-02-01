import express from "express"
import DAO from "../controler/dao.js"

const router = new express.Router()
const db = new DAO('./db/database.db')

router.use('/create/:tableName', (req, res) => {
    res.send(db.createTable(req.params.tableName, req.params.columns))
})
router.use('/add/:tableName/:columnName/:columnType', (req, res) => {
    res.send(db.addColumn(req.params.tableName, req.params.selectOption))
})
router.use('/rename/:tableName/:oldName/:newName', (req, res) => {
    res.send(db.renameColumn(req.params.tableName, req.params.oldName, req.params.newName))
})
router.use('/drop/:tableName/:selectOption', (req, res) => {
    res.send(db.dropColumn(req.params.tableName, req.params.selectOption))
})  
router.use('/select/:tableName/:selectOption', (req, res) => {
    res.send(db.select(req.params.tableName, req.params.selectOption))
})
router.use('/insert/:tableName/:columnName/:value', (req, res) => {
    res.send(db.insert(req.params.tableName, req.params.columnName, req.params.value))
})
export default router