import { db } from '@/drizzle';
import { course } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

interface PageProps {
  params: {
    courseId: string;
  };
}

async function getCourse(courseId: string) {
  const c = await db.select().from(course).where(eq(course.id, courseId));
  return c;
}

function getYouTubeEmbedUrl(url: string): string {
  const urlObj = new URL(url);
  if (urlObj.hostname === 'www.youtube.com' && urlObj.pathname === '/watch') {
    const videoId = urlObj.searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url; // Return original URL if it's already in the correct format
}

export default async function CoursePage({ params }: PageProps) {
  const { courseId } = await params;
  const course = await getCourse(courseId);

  if (!course || course.length === 0) {
    return (
      <div className="w-full flex items-center justify-center">
        <h1 className="text-red-500">Course not found!</h1>
      </div>
    );
  }

  const videoEmbedUrl = getYouTubeEmbedUrl(course[0].video);

  return (
    <div className="w-full flex items-center justify-center p-5">
      <div className="w-2/3 flex flex-col items-center justify-center gap-4 p-4 mt-5">
        <h1 className="text-2xl font-bold">{course[0].title}</h1>
        <p>{course[0].description}</p>
        <iframe
          width="560"
          height="315"
          src={videoEmbedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <article className='prose w-[90%]'>{course[0].Content}</article>
      </div>
    </div>
  );
}
