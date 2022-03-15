import express from "express";
import person_controller from "../controller/person_controller.js";

const router = new express.Router();

router.get("/", (req, res) => {
  person_controller.getAll(req, res);
});
router.post("/:comanyId/:name/:firstName", (req, res) => {
  person_controller.add(req, res);
});
router.get("/:id", (req, res) => {
  person_controller.get(req, res);
});
router.put("/:id/:set", (req, res) => {
  person_controller.update(req, res);
});
router.delete("/:id", (req, res) => {
  person_controller.del(req, res);
});

export default router;
