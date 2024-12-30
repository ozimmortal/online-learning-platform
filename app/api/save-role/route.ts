import { NextResponse } from 'next/server';
import { db } from '@/drizzle';
import { role} from '@/drizzle/schema';
import { nanoid } from 'nanoid';
import { eq } from 'drizzle-orm';
import { user } from '@/auth-schema';

export async function POST(req: Request) {
  try {
    const { userId, roleName } = await req.json();

    const newRole: typeof role.$inferInsert = {
      id: nanoid(),
      role: roleName,
      userId: userId,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };

    await db.insert(role).values(newRole);

    return NextResponse.json({ success: true, message: 'Role saved successfully.' });
  } catch (error) {
    console.error('Error saving role:', error);
    return NextResponse.json({ success: false, message: 'Failed to save role.' }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId'); // Get `userId` from query parameters

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required.' },
        { status: 400 }
      );
    }

    const userRole = await db.select().from(role).where(eq(role.userId, userId));

    if (userRole.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Role not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Role fetched successfully.',
      role: userRole[0].role,
    });
  } catch (error) {
    console.error('Error fetching role:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch role.' },
      { status: 500 }
    );
  }
}
