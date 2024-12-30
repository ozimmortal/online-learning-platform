import { db } from '@/drizzle';
import { course } from '@/drizzle/schema';


export const getCourses = async () => {
  return await db.select().from(course);
};



const CoursesPage = async () => {
  const coursesList = await getCourses();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      {coursesList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesList.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 shadow-md">
              <img
                src={course.thumbnail}
                alt={`${course.title} Thumbnail`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <a
                href={'/dashboard/course/' + course.id}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Enroll
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default CoursesPage;
