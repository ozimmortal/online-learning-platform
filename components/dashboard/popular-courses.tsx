import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { db } from '@/drizzle';
import { course } from '@/drizzle/schema';


export const getCourses = async () => {
  return await db.select().from(course);
};
export default async function PopularCourses() {
  
  const courses = await getCourses();
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Popular Courses</h2>
      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.title} className="flex gap-4">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-24 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-medium">{course.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="font-semibold">${course.description}</span>
                <Button size="sm">Enroll Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}