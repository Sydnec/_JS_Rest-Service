import express from "express"
import decrement from "../controler/decrement.js"

const router = new express.Router()

router.use('/:number', (req, res) => {
    res.send(decrement(req.params.number))
})

export default router