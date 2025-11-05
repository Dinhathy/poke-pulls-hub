import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";

export const TopNav = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold gradient-text">PokéBlog</div>
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/search">
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
          </NavLink>
          <NavLink to="/notifications">
            <Button variant="ghost" size="icon" className="hover:text-primary relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full pulse-glow" />
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
