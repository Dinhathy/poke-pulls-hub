import { useState } from "react";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, X } from "lucide-react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Post creation logic will be implemented with Lovable Cloud
    console.log("Create post:", { title, description, images });
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <TopNav />

      <div className="container max-w-2xl mx-auto px-4 py-6">
        <Card className="p-6 glass border-2">
          <h1 className="text-2xl font-bold gradient-text mb-6">
            Share Your Pull 🎴
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload - Pack Opening Style */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Card Images</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer glass">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Up to 5 images (PNG, JPG, WEBP)
                </p>
              </div>
            </div>

            {/* Image Preview Grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden border-2 border-border group"
                  >
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Title</label>
              <Input
                type="text"
                placeholder="e.g., Charizard VMAX Pull!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-background/50 border-2 focus:border-primary"
                required
              />
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Description</label>
              <Textarea
                placeholder="Tell the story behind your pull..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-background/50 border-2 focus:border-primary min-h-[120px] resize-none"
                required
              />
              <p className="text-xs text-muted-foreground">
                {description.length}/500 characters
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-pokeball hover:scale-105 transition-transform font-bold text-lg h-12"
            >
              Share Your Pull ✨
            </Button>
          </form>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
