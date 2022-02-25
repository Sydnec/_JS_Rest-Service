import express from "express";
import company_controller from "../controller/company_controller.js";

const router = new express.Router();

// Codes : https://www.restapitutorial.com/lessons/httpmethods.html

router.get("/", (req, res) => {
  company_controller.getAll();
  res.send("Ok");
});
router.post("/:id", (req, res) => {
  company_controller.add(req.params.id);
});
router.get("/:id", (req, res) => {
  company_controller.get(req.params.id);
});
router.put("/:id", (req, res) => {
  company_controller.update(req.params.id);
});
router.delete("/:id", (req, res) => {
  company_controller.del(req.params.id);
});

export default router;
