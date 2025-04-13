import express from "express";
import { signUp } from "../controller/AuthController.js";
import { login } from "../controller/AuthController.js";
import { signUpValidation } from "../middlewares/AuthUserValidation.js";
import { loginInValidation } from "../middlewares/AuthUserValidation.js";

const Authrouter = express.Router();

Authrouter.post("/signUp", signUpValidation, signUp);
Authrouter.post("/login", loginInValidation, login);

export default Authrouter;

// Request Send Index.js
// Data base connect hua
// Router
// Middleware (Validation)
// Controller
// Model
