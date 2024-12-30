'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from '@/lib/auth-client';


const OnboardingPage = () => {
    const session = useSession();
 
    const [role, setRole] = useState<string | null>(null);
  
    const handleSelectRole = async (selectedRole: string) => {
      setRole(selectedRole);
  
      const userId = session.data?.user.id; // Replace with the actual logged-in user's ID
  
      try {
        const response = await fetch('/api/save-role', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, roleName: selectedRole }),
        });
        const data = await response.json();
  
        if (data.success) {
          console.log('Role saved:', selectedRole);
          window.location.href = '/dashboard'
          // Navigate to the next step or dashboard
        } else {
          console.error('Error saving role:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-xl">Welcome! Choose your role</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button
            variant='outline'
            size="lg"
            className="w-full"
            onClick={() => handleSelectRole('student')}
          >
            I am a Student
          </Button>
          <Button
            variant='outline'
            size="lg"
            className="w-full"
            onClick={() => handleSelectRole('teacher')}
          >
            I am a Teacher
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingPage;
