import { NextResponse } from 'next/server';
import { db } from '@/drizzle';
import { course } from '@/drizzle/schema';

import { nanoid } from 'nanoid';
import { object } from 'better-auth';

export async function POST(req: Request) {
  try {
    const rs = await req.json();
    console.log(Object.keys(rs))
    if (!rs.title || !rs.description || !rs.thumbnail || !rs.video || !rs.Content || !rs.userId) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const newCourse: typeof course.$inferInsert = {
      id: nanoid(),
      title: rs.title,
      description: rs.description,
      thumbnail: rs.thumbnail,
      video: rs.video,
      Content: rs.Content ,// || '', // Fallback to an empty string if content is missing
      userId: rs.userId,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };

    await db.insert(course).values(newCourse);

    return NextResponse.json({ success: true, message: 'Course created successfully.' });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create course.' },
      { status: 500 }
    );
  }
}
