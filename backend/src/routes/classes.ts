import express from "express";
import { and, desc, eq, getTableColumns, ilike, or, sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { classes, departments, enrollments, subjects, user } from "../db/schema/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        //     Destructing properties from the form coming from frontend
        const {
            name,
            professorId,
            subjectId,
            capacity,
            description,
            status,
            bannerUrl,
            bannerCldPubId,
        } = req.body

        const [createdClass] = await db
            .insert(classes)
            .values({
                subjectId,
                inviteCode: Math.random().toString(36).substring(2, 9),
                name,
                professorId,
                bannerCldPubId,
                bannerUrl,
                capacity,
                description,
                schedules: [],
                status,
            })
            .returning({ id: classes.id });

        if (!createdClass) throw new Error("Failed to create class");

        res.status(201).json({ data: createdClass });

    } catch (e) {
        console.error(`POST / classes error: ${e}`);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;