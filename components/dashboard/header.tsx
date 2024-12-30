"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const session = useSession();
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      console.log(session?.data?.user.id);
      if (!session?.data?.user.id) {
        console.error("User ID is not available.",session?.data?.user.id);
        return;
      }
      try {
        const response = await fetch(`/api/save-role?userId=${session?.data?.user.id}`);

        if (!response.ok) {
          console.error("Failed to fetch role:", response.statusText);
          return;
        }

        const data = await response.json();
        if (data.success) {
          setRole(data.role);
        } else {
          console.error("Error fetching role:", data.message);
        }
      } catch (error) {
        console.error("An error occurred while fetching role:", error);
      }
    };

    fetchRole();
  }, [session?.data?.user.id]);

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="container mx-auto mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your learning journey</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            {role === "teacher" ? (
              <Button onClick={() => (window.location.href = "/dashboard/create-course")}>
                Create Course
              </Button>
            ) : (
              <p>{role}</p>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New course available</DropdownMenuItem>
              <DropdownMenuItem>Course completion reminder</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
              <AvatarImage src={session.data?.user.image || " "} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuItem>
                <p>{session.data?.user.name || " "}</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/dashboard/settings">Settings</a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
