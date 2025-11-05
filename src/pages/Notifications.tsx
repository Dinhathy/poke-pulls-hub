import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, UserPlus } from "lucide-react";

export default function Notifications() {
  // Mock data - will be replaced with real data from Lovable Cloud
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "AshTrainer99",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ash",
      message: "liked your post",
      timestamp: "2h ago",
      unread: true,
    },
    {
      id: 2,
      type: "comment",
      user: "MistyCollector",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Misty",
      message: "commented: 'Amazing pull! 🔥'",
      timestamp: "5h ago",
      unread: true,
    },
    {
      id: 3,
      type: "follow",
      user: "BrockRocks",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brock",
      message: "started following you",
      timestamp: "1d ago",
      unread: false,
    },
    {
      id: 4,
      type: "like",
      user: "PikachuFan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pikachu",
      message: "liked your post",
      timestamp: "2d ago",
      unread: false,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-5 w-5 text-primary fill-primary" />;
      case "comment":
        return <MessageCircle className="h-5 w-5 text-accent" />;
      case "follow":
        return <UserPlus className="h-5 w-5 text-secondary" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <TopNav />

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
        <h1 className="text-2xl font-bold gradient-text">Notifications</h1>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-4 glass border-2 card-hover cursor-pointer ${
                notification.unread ? "border-primary/50" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="h-12 w-12 ring-2 ring-border">
                    <AvatarImage
                      src={notification.avatar}
                      alt={notification.user}
                    />
                    <AvatarFallback>
                      {notification.user.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-card rounded-full p-1 border-2 border-border">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-bold">{notification.user}</span>{" "}
                    <span className="text-muted-foreground">
                      {notification.message}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.timestamp}
                  </p>
                </div>

                {notification.unread && (
                  <div className="h-2 w-2 bg-primary rounded-full pulse-glow" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
