// routes/users.ts  
import { Router } from "express";
import { db } from "../db";
import { user } from "../db/schema/auth";
import { eq, and } from "drizzle-orm";

const router = Router();

router.get("/", async (req, res) => {
    const { role } = req.query;
    const where = role ? eq(user.role, role as any) : undefined;
    const data = await db.select().from(user).where(where);
    res.json({ data, pagination: { total: data.length } });
});

export default router;