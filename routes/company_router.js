import express from "express";
import company_controller from "../controller/company_controller.js";

const router = new express.Router();

// Codes : https://www.restapitutorial.com/lessons/httpmethods.html

// router.get("/", company_controller.getAll());
// router.post("/:id", company_controller.add());
router.get("/:id", (req, res) => {
  res.send(company_controller.get(req.params.id));
});
// router.put("/:id", company_controller.update());
// router.delete("/:id", company_controller.delete());

export default router;
