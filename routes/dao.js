import express from "express"
import DAO from "../controler/dao.js"

const router = new express.Router()

router.use('/:select', (req, res) => {
    res.send(DAO(req.params.select))
})

export default router