import express from 'express';
import cors from "cors";
import subjectsRouter from "./routes/subjects";
import classesRouter from "./routes/classes";
import {toNodeHandler} from "better-auth/node";
import {auth} from "./lib/auth";
import securityMiddleware from "./middleware/security";

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
// Better Auth
app.all('/api/auth/*splat', toNodeHandler(auth));

// Root route
app.get('/', (req, res) => {
    res.send('Classroom backend is running');
});

// Router for subjects
app.use('/api/subjects', subjectsRouter)

app.use('/api/classes', classesRouter)

// app.ts
import usersRouter from "./routes/users";

app.use("/api/users", usersRouter);

// Security Middleware
app.use(securityMiddleware);

// Start server
app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`Server started at ${url}`);
});