import express from 'express';
import cors from "cors";
import subjectsRouter from "./routes/subjects";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS
const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
    throw new Error("FRONTEND_URL is not defined");
}
app.use(cors({
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// Root route
app.get('/', (req, res) => {
    res.send('Classroom backend is running');
});

// Router for subjects
app.use('/api/subjects', subjectsRouter)

// Start server
app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`Server started at ${url}`);
});