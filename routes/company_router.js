import express from "express";
import personDAO from "../DAO/person_dao.js";

const router = new express.Router();
const personDAO = new personDAO(db);

// Codes : https://www.restapitutorial.com/lessons/httpmethods.html

router.get("/", (req, res) => {
  res.status(200).send(personDAO.findAll());
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(personDAO.find(id));
});
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(personDAO.update(id));
});
router.post("/", (req, res) => {
  res.status(201).json(personDAO.add());
});
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(personDAO.delete(id));
});

export default router;
