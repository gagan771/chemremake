import { Home, BookOpen, History, User, Database } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const navItems = [
    { title: "Home", path: "/", icon: Home },
    { title: "Class Notes", path: "/class-notes", icon: BookOpen },
    { title: "Previous Year", path: "/previous-year", icon: History },
    { title: "Input Data", path: "/input-data", icon: Database },
    { title: "About Me", path: "/about", icon: User },
  ];

  return (
    <nav className="bg-card shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Home Link */}
          <Link to="/" className="text-xl font-bold text-primary">
            <Home className="h-6 w-6" />
          </Link>
          {/* Navigation Items */}
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {/* Render Icon */}
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
