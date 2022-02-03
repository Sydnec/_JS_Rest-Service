import express from "express";
import person_controller from "../controller/person_controller.js";

const router = new express.Router();

// Codes : https://www.restapitutorial.com/lessons/httpmethods.html

router.get("/", person_controller.getAll());

router
  .route("/:id")
  .post(person_controller.add(res.params.id))
  .get(person_controller.get(res.params.id))
  .put(person_controller.update(res.params.id))
  .delete(person_controller.delete(res.params.id));

export default router;
