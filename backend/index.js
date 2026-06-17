import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
    res.json('Backend is running properly');
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Api running on http://localhost:${port}`);
});
