import { GraduationCap, Wand2, Crown } from "lucide-react";

export const USER_ROLES = {
    STUDENT: "student",
    PROFESSOR: "professor",
    HEADMASTER: "headmaster",
};

export const ROLE_OPTIONS = [
    {
        value: USER_ROLES.STUDENT,
        label: "Student",
        icon: GraduationCap,
    },
    {
        value: USER_ROLES.PROFESSOR,
        label: "Professor",
        icon: Wand2,
    },
    {
        value: USER_ROLES.HEADMASTER,
        label: "Headmaster",
        icon: Crown,
    },
];

export const PROFESSORS = [
    { id: "1", name: "Remus Lupin" },
    { id: "2", name: "Severus Snape" },
    { id: "3", name: "Minerva McGonagall" },
    { id: "4", name: "Filius Flitwick" },
    { id: "5", name: "Pomona Sprout" },
];

export const SUBJECTS = [
    { id: 1, name: "Patronus Charm", code: "DADA-501" },
    { id: 2, name: "Shield Charm", code: "DADA-301" },
    { id: 3, name: "Polyjuice Potion", code: "POT-401" },
    { id: 4, name: "Felix Felicis", code: "POT-501" },
    { id: 5, name: "Levitation Charm", code: "CHM-101" },
    { id: 6, name: "Wingardium Leviosa", code: "CHM-102" },
    { id: 7, name: "Transfiguration Basics", code: "TRF-101" },
    { id: 8, name: "Herbology Fundamentals", code: "HRB-101" },
];

export const DEPARTMENTS = [
    "Defense Against the Dark Arts",
    "Potions",
    "Transfiguration",
    "Charms",
    "Herbology",
    "Astronomy",
    "History of Magic",
    "Divination",
    "Care of Magical Creatures",
    "Muggle Studies",
    "Ancient Runes",
    "Arithmancy",
    "Flying",
    "Alchemy",
    "Magical Theory",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const HOUSES = [
    { value: "gryffindor", label: "Gryffindor", colors: ["#C41E3A", "#D4AF37"] },
    { value: "slytherin", label: "Slytherin", colors: ["#2A623D", "#AAAAAA"] },
    { value: "ravenclaw", label: "Ravenclaw", colors: ["#0E4C92", "#CD7F32"] },
    { value: "hufflepuff", label: "Hufflepuff", colors: ["#EEB939", "#3C3C3C"] },
] as const;

export const HOUSE_OPTIONS = HOUSES.map(({ value, label }) => ({ value, label }));

export const DIFFICULTY_LEVELS = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
    { value: "NEWT", label: "NEWT" },
] as const;

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
];

const getEnvVar = (key: string): string => {
    const value = import.meta.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

export const BASE_URL = import.meta.env.VITE_API_URL;

// Environment variable validation helper
const requireEnv = (name: string, value: unknown): string => {
    if (typeof value !== "string" || value.trim() === "") {
        throw new Error(`[ENV] Missing required environment variable: ${name}`);
    }
    return value;
};

export const CLOUDINARY_UPLOAD_URL = requireEnv(
    "VITE_CLOUDINARY_UPLOAD_URL",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_URL
);
export const CLOUDINARY_CLOUD_NAME = requireEnv(
    "VITE_CLOUDINARY_CLOUD_NAME",
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
);
export const BACKEND_BASE_URL = requireEnv(
    "VITE_BACKEND_BASE_URL",
    import.meta.env.VITE_BACKEND_BASE_URL
);



export const CLOUDINARY_UPLOAD_PRESET = requireEnv(
    "VITE_CLOUDINARY_UPLOAD_PRESET",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
);