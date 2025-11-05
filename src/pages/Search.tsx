import { useState } from "react";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - will be replaced with real data from Lovable Cloud
  const users = [
    {
      username: "AshTrainer99",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ash",
      bio: "Gotta catch 'em all! 🎮",
      followers: 2341,
    },
    {
      username: "MistyCollector",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Misty",
      bio: "Water-type enthusiast 💧",
      followers: 1872,
    },
    {
      username: "BrockRocks",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brock",
      bio: "Rock solid collection 🪨",
      followers: 1523,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <TopNav />

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Search Bar - Pokedex Style */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search trainers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-card/50 border-2 border-border focus:border-primary transition-colors"
          />
        </div>

        {/* Search Results */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-muted-foreground">
            Suggested Trainers
          </h2>
          {users.map((user) => (
            <Card
              key={user.username}
              className="p-4 glass border-2 card-hover cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 ring-2 ring-primary">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {user.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate">{user.username}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {user.bio}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.followers} followers
                  </p>
                </div>

                <Button
                  size="sm"
                  className="bg-primary hover:scale-105 transition-transform"
                >
                  Follow
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
