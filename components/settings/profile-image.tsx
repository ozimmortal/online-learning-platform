"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ProfileImage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className={cn(
          "w-32 h-32 rounded-full border-2 border-border flex items-center justify-center overflow-hidden",
          !image && "bg-muted"
        )}>
          {image ? (
            <img src={image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <Upload className="h-12 w-12 text-muted-foreground" />
          )}
        </div>
        <label htmlFor="profile-image">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="absolute bottom-0 right-0 rounded-full"
          >
            <Upload className="h-4 w-4" />
          </Button>
        </label>
        <input
          id="profile-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Upload a profile picture
      </p>
    </div>
  );
}