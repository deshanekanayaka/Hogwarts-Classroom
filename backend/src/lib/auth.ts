import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema/auth"
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    emailAndPassword: {
        enabled: true,
    },
    secret: process.env.BETTER_AUTH_SECRET!,
    trustedOrigins: [process.env.FRONTEND_URL!],
    user: {
        additionalFields: {
            role: {
                type: "string", required: true, defaultValue: "student", input: true,
            },
            imageCldPubId: {
                type: "string", required: true, input: true,
            }
        }
    },
});