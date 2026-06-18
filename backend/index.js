import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json('Backend is running properly');
});

app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
    console.log(`Api running on http://localhost:${port}`);
});
