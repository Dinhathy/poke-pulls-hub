import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  username: string;
  avatar?: string;
  images: string[];
  title: string;
  description: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export const PostCard = ({
  username,
  avatar,
  images,
  title,
  description,
  likes,
  comments,
  timestamp,
}: PostCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-border bg-card card-hover">
      {/* Post Header */}
      <div className="flex items-center gap-3 p-4">
        <Avatar className="h-10 w-10 ring-2 ring-primary">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-bold text-foreground">{username}</p>
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
      </div>

      {/* Post Image with Holographic Effect */}
      <div className="relative group">
        <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none z-10" />
        <img
          src={images[0]}
          alt={title}
          className="w-full aspect-square object-cover"
        />
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
            1/{images.length}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 hover:text-primary transition-colors"
          >
            <Heart className="h-5 w-5" />
            <span className="font-semibold">{likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 hover:text-accent transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-semibold">{comments}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto hover:text-secondary transition-colors"
          >
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
