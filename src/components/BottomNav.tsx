import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import { NavLink } from "./NavLink";

export const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: PlusSquare, label: "Create", path: "/create" },
    { icon: Heart, label: "Notifications", path: "/notifications" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass border-t border-border">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
              activeClassName="text-primary"
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`h-6 w-6 transition-all ${
                      isActive ? "scale-110" : ""
                    }`}
                  />
                  {isActive && (
                    <span className="text-xs font-semibold mt-1">
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
