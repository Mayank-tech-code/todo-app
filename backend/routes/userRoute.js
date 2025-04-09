import express from "express";
import {
  create,
  getAll,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getUserById/:id", getUserById);
route.put("/updateUser/:id", updateUser);
route.delete("/deleteUser/:id", deleteUser);

export default route;
