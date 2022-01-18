import express from "express"
import increment from "../controler/increment.js"

const router = new express.Router()

router.use('/:number', (req, res) => {
    res.send(increment(req.params.number))
})

export default router