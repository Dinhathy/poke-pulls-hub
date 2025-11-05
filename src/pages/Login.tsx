import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will be implemented with Lovable Cloud
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-card to-background">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold gradient-text">PokéBlog</h1>
          <p className="text-muted-foreground">Share Your Legendary Pulls</p>
        </div>

        {/* Login Card */}
        <Card className="p-8 space-y-6 glass border-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/50 border-border focus:border-primary transition-colors"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-pokeball hover:scale-105 transition-transform font-bold"
            >
              Log In
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full hover:bg-accent/10 hover:text-accent transition-colors"
          >
            Continue with Google
          </Button>
        </Card>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <NavLink
            to="/signup"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
