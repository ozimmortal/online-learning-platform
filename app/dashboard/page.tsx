
import { BarChart3, BookOpen, GraduationCap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardHeader from "@/components/dashboard/header";
import DashboardStats from "@/components/dashboard/stats";
import EnrolledCourses from "@/components/dashboard/enrolled-courses";
import PopularCourses from "@/components/dashboard/popular-courses";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <DashboardHeader />
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EnrolledCourses />
          <PopularCourses />
        </div>
      </div>
    </div>
  );
}