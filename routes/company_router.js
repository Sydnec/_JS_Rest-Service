import express from "express";
import company_controller from "../controller/company_controller.js";

const router = new express.Router();

router.get("/", (req, res) => {
  company_controller.getAll(req, res);
});
router.post("/:name/:city", (req, res) => {
  company_controller.add(req, res);
});
router.get("/:id", (req, res) => {
  company_controller.get(req, res);
});
router.put("/:id/:set", (req, res) => {
  company_controller.update(req, res);
});
router.delete("/:id", (req, res) => {
  company_controller.del(req, res);
});

export default router;
