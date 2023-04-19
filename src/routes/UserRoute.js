import Express from "express";
import UserController from "../controller/UserController.js";

const router = Express.Router();

//Main router code
router.get("/", UserController.findAll);
router.post("/", UserController.save);
router.patch("/:id", UserController.update);    

export default router;