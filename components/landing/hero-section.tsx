"use client";

import { GraduationCap, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Learn and Grow with <span className="text-green-600">EduPro</span>
            </h1>
            <p className="text-xl text-gray-600">
              Unlock your potential with our expert-led courses. Learn at your own pace and achieve your goals.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Browse Courses
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}