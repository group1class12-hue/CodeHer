import { Link, Outlet, useLocation } from "react-router-dom";
import { Code2, Home, Lightbulb, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "ראשי", icon: <Home className="w-5 h-5 mb-1" /> },
    { path: "/why-stem", label: "למה STEM?", icon: <Lightbulb className="w-5 h-5 mb-1" /> },
    { path: "/role-models", label: "נשים מובילות", icon: <Users className="w-5 h-5 mb-1" /> },
    { path: "/how-to-start", label: "איך מתחילים", icon: <Rocket className="w-5 h-5 mb-1" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <Code2 className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">CodeHer</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col pb-16 md:pb-0">
        <Outlet />
      </main>

      <footer className="hidden md:block bg-white border-t border-slate-100 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>נבנה באהבה כדי לעורר השראה. CodeHer © {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex items-center justify-around p-2 z-50 pb-safe">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center p-2 rounded-xl text-[10px] font-medium transition-colors",
              location.pathname === item.path
                ? "text-primary"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            {item.icon}
            <span className="text-center">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
