import AgentAPI from "apminsight";
AgentAPI.config();
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import subjectsRouter from "./routes/subjects";
import classesRouter from "./routes/classes";
import {toNodeHandler} from "better-auth/node";
import {auth} from "./lib/auth";
import securityMiddleware from "./middleware/security";
import { fromNodeHeaders } from "better-auth/node";
import usersRouter from "./routes/users";


const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
    throw new Error("FRONTEND_URL is not defined");
}
app.use(cors({
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(securityMiddleware);

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const session = await auth.api.getSession({ headers: fromNodeHeaders(req.headers) });
    if (!session) return res.status(401).json({ error: "Unauthorized" });
    (req as any).user = session.user;
    next();
};

app.use('/api/classes', classesRouter);
app.use('/api/users', usersRouter);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.get('/', (req: Request, res: Response) => {
    res.send('Classroom backend is running');
});

app.use('/api/subjects', subjectsRouter)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});