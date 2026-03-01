import { Subject } from "../types/index.ts"

export const mockSubjects: Subject[] = [
    {
        id: 1,
        name: "Defence Against the Dark Arts",
        code: "DADA301",
        description: "Learn to identify and combat dark creatures, curses, and jinxes. Practical duelling sessions included under the supervision of a qualified professor.",
        department: "CS",
        difficulty: "Intermediate",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        name: "Potions",
        code: "POT101",
        description: "A foundational course in the art of brewing magical potions, from simple Forgetfulness Draughts to the complex Polyjuice Potion.",
        department: "Javascript",
        difficulty: "Beginner",
        createdAt: new Date().toISOString(),
    },
];

