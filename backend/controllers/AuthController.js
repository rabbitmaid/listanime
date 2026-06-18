import "dotenv/config";
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;


class AuthController {
  async register(req, res, next) {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({
          error: "Username, email and password are required",
        });
      }

      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ email }, { username }],
        },
      });

      if (existingUser) {
        return res.status(409).json({
          error: "Email or username already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          role: "admin"
        },
      });

      const payload = {
        id: user.id,
        username: user.username,
        role: user.role
      };

      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.status(201).json({
        message: "Registration successful",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ error: "Username/Email and password are required" });
      }

      const user = await prisma.user.findFirst({
        where: {
          OR: [{ email: username }, { username: username }],
        },
      });

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const verifyPassword = await bcrypt.compare(password, user.password);

      if (!verifyPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

      res.json({ message: "Login successful", token });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }
}

export default new AuthController();
