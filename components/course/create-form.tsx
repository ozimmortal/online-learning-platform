"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
export function ContentForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [content, setContent] = useState("");
    const session = useSession();

      const handleSubmit = async () => {

        const userId = session.data?.user.id;
        console.log(userId,title,description,imageUrl,videoUrl,content) 
        try {
          const response = await fetch('/api/create-course', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId,title,description,thumbnail:imageUrl,video:videoUrl,Content:content }), 
          });
          const data = await response.json();
          if (data.success) {
            console.log("success")
            window.location.href = "/dashboard"
          } else {
            console.error('Error saving role:', data.message);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div  className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input 
          id="title"
          name="title"
          placeholder="Enter title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          This will be the main title of your Course.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Enter a brief description"
          className="resize-none"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          A short description that summarizes yourCourse.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          placeholder="https://example.com/image.jpg"
          required
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Provide a URL for the main image.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="videoUrl">Video URL (Optional)</Label>
        <Input
          id="videoUrl"
          name="videoUrl"
          type="url"
          placeholder="https://example.com/video.mp4"
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Optional: Add a video URL if available.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Enter your main content here"
          className="min-h-[200px]"
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          The main content of your Course.
        </p>
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}