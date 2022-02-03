import express from "express";
import person_controller from "../controller/person_controller.js";

const router = new express.Router();

router.get("/", person_controller.getAll);

router
  .route("/:id")
  .post(person_controller.add)
  .get(person_controller.get)
  .put(person_controller.update)
  .delete(person_controller.delete);

export default router;
