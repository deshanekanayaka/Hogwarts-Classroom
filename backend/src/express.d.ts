// Declare user role for each request
declare global {
    namespace Express {
        interface Request {
            user?: {
                role?: "headmaster" | "professor" | "student"
            };
        }
    }
}
export {}