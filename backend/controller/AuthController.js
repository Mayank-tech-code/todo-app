import AuthModel from "../model/AuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await AuthModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already exists, you can login",
        success: false,
      });
    }

    const newUserModel = new AuthModel({
      name,
      email,
      password,
    });
    newUserModel.password = await bcrypt.hash(password, 10);
    await newUserModel.save();
    return res.status(201).json({
      message: "User SignUp Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "User does not exist, please sign up",
        success: false,
      });
    }
    // Client Password  and second pppassword is database password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Invalid password",
        success: false,
      });
    }
    // Generate JWT token here and send it to the client
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      message: "User Login Successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
