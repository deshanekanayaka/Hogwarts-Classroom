import { BookOpen, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Subjects",
        description: "All available academic subjects across departments",
        icon: BookOpen,
        value: "Browse Subjects",
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-950/40",
    },
    {
        title: "Departments",
        description: "Academic departments organizing the curriculum",
        icon: Building2,
        value: "View Departments",
        color: "text-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-950/40",
    },
    {
        title: "Classes",
        description: "Active classes with enrolled students and teachers",
        icon: GraduationCap,
        value: "Explore Classes",
        color: "text-violet-500",
        bg: "bg-violet-50 dark:bg-violet-950/40",
    },
];

export const DashboardPage = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-full py-12 px-4">
            {/* Hero Section */}
            <div className="text-center max-w-2xl mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Welcome to Hogwarts Classroom Management</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    A central hub for exploring subjects, browsing departments, and navigating classes — all in one place.
                </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.title} className="border shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CardHeader className="pb-3">
                                <div className={`inline-flex w-10 h-10 rounded-xl ${stat.bg} items-center justify-center mb-2`}>
                                    <Icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                                <CardTitle className="text-lg font-semibold">{stat.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-snug">{stat.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Footer note */}
            <p className="mt-12 text-sm text-muted-foreground/60">Use the sidebar to navigate between sections.</p>
        </div>
    );
};

export default DashboardPage;
