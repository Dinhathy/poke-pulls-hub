import { PostCard } from "@/components/PostCard";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  // Mock data - will be replaced with real data from Lovable Cloud
  const posts = [
    {
      id: 1,
      username: "AshTrainer99",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ash",
      images: ["https://images.unsplash.com/photo-1606918801925-e2c914c4b503?w=800"],
      title: "Charizard VMAX Pull! 🔥",
      description: "Finally pulled the chase card from Brilliant Stars! This one's going straight into my collection.",
      likes: 234,
      comments: 45,
      timestamp: "2h ago",
    },
    {
      id: 2,
      username: "MistyCollector",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Misty",
      images: ["https://images.unsplash.com/photo-1542779283-429940ce8336?w=800"],
      title: "Vintage Pack Opening ✨",
      description: "Opened some Base Set packs today. Check out this beautiful Blastoise!",
      likes: 189,
      comments: 32,
      timestamp: "5h ago",
    },
    {
      id: 3,
      username: "BrockRocks",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brock",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"],
      title: "Japanese Exclusive! 🇯🇵",
      description: "Got my hands on the exclusive Japanese promo. The artwork is incredible!",
      likes: 312,
      comments: 67,
      timestamp: "1d ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <TopNav />

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Filter Tabs */}
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="w-full glass">
            <TabsTrigger
              value="recent"
              className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Recent
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
