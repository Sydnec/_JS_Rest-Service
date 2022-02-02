import express from "express";
import personDAO from "../DAO/person_dao.js";

const router = new express.Router();
const personDAO = new personDAO(db);

router.get("/person", (req, res) => {
  res.status(404).send(personDAO.findAll(req.params.tableName));
});

router.get("/person/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(personDAO.find(req.params.tableName, id));
});
router.put("/person/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(personDAO.update(req.params.tableName, id));
});
router.delete("/person/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(personDAO.update(req.params.tableName, id));
});

export default router;
