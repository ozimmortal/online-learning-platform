import { Card } from "@/components/ui/card";
import { BarChart3, BookOpen, GraduationCap, Users } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Courses",
      value: "12",
      icon: BookOpen,
      trend: "+2 this month",
    },
    {
      title: "Hours Learned",
      value: "48",
      icon: BarChart3,
      trend: "+5 this week",
    },
    {
      title: "Completed Courses",
      value: "8",
      icon: GraduationCap,
      trend: "+1 this month",
    },
    {
      title: "Active Students",
      value: "1.2k",
      icon: Users,
      trend: "+100 this month",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}