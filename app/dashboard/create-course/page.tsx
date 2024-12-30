"use client";

import { ContentForm } from "@/components/course/create-form";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Content</h1>
        <ContentForm />
      </div>
    </div>
  );
}