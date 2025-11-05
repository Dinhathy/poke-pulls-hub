import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function Profile() {
  // Mock data - will be replaced with real data from Lovable Cloud
  const profile = {
    username: "PokéMaster2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    bio: "Collecting since 1999 🎴 | Charizard enthusiast 🔥 | Trading rare cards 🌟",
    posts: 127,
    followers: 1834,
    following: 492,
  };

  const userPosts = [
    "https://images.unsplash.com/photo-1606918801925-e2c914c4b503?w=400",
    "https://images.unsplash.com/photo-1542779283-429940ce8336?w=400",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    "https://images.unsplash.com/photo-1606918801925-e2c914c4b503?w=400",
    "https://images.unsplash.com/photo-1542779283-429940ce8336?w=400",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <TopNav />

      <div className="container max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header - Trainer Card Style */}
        <Card className="p-6 glass border-2 mb-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24 ring-4 ring-primary">
              <AvatarImage src={profile.avatar} alt={profile.username} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {profile.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold gradient-text">
                  {profile.username}
                </h1>
                <Button variant="outline" size="sm" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {profile.posts}
                  </div>
                  <div className="text-sm text-muted-foreground">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {profile.followers}
                  </div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {profile.following}
                  </div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-foreground">{profile.bio}</p>
            </div>
          </div>
        </Card>

        {/* Posts Grid - TCG Binder Style */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Posts</h2>
          <div className="grid grid-cols-3 gap-2">
            {userPosts.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative group overflow-hidden rounded-lg border-2 border-border cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
