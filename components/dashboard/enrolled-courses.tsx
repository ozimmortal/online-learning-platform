import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { db } from '@/drizzle';
import { course } from '@/drizzle/schema';


export const getCourses = async () => {
  return await db.select().from(course);
};


export default async function EnrolledCourses() {
  const courses = await getCourses();  

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
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
              <p className="text-sm text-muted-foreground mb-2">
                Next: {course.description}
              </p>
              <a
                href={'/dashboard/course/' + course.id}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Enrolled
              </a>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}