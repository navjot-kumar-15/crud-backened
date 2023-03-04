import express from "express";
import {
  editUser,
  addUser,
  getUsers,
  getUserById,
  deleteUser,
} from "../controllers/user-control.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
export default router;
