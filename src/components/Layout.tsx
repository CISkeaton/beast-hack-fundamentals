import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import beastHackLogo from "@/assets/beast-hack-logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src={beastHackLogo} alt="Beast Hack Logo" className="h-8 w-8" />
              <span className="text-2xl font-beast font-bold text-primary">Beast Hack</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-impact font-medium transition-smooth hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/training-basics" 
                className={`text-sm font-impact font-medium transition-smooth hover:text-primary ${
                  isActive("/training-basics") ? "text-primary" : "text-foreground"
                }`}
              >
                Training Basics
              </Link>
              <Link 
                to="/success-stories" 
                className={`text-sm font-impact font-medium transition-smooth hover:text-primary ${
                  isActive("/success-stories") ? "text-primary" : "text-foreground"
                }`}
              >
                Success Stories
              </Link>
              <Link 
                to="/resources" 
                className={`text-sm font-impact font-medium transition-smooth hover:text-primary ${
                  isActive("/resources") ? "text-primary" : "text-foreground"
                }`}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-impact font-medium transition-smooth hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}
              >
                Contact
              </Link>
              <Button 
                variant="cta" 
                size="sm" 
                asChild
              >
                <a 
                  href="https://beasthack.com/shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Shop Now
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="cta" 
                size="sm" 
                asChild
              >
                <a 
                  href="https://beasthack.com/shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Shop
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-beast font-bold mb-4">Beast Hack</h3>
              <p className="text-sm opacity-90 font-body">
                Mastering sports fundamentals with portable, durable training stations for baseball, softball, and pickleball.
              </p>
            </div>
            
            <div>
              <h4 className="font-impact font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm font-body">
                <li><Link to="/training-basics" className="opacity-90 hover:opacity-100 transition-smooth">Training Basics</Link></li>
                <li><Link to="/success-stories" className="opacity-90 hover:opacity-100 transition-smooth">Success Stories</Link></li>
                <li><Link to="/resources" className="opacity-90 hover:opacity-100 transition-smooth">Resources</Link></li>
                <li><Link to="/contact" className="opacity-90 hover:opacity-100 transition-smooth">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-impact font-semibold mb-4">Training Focus</h4>
              <ul className="space-y-2 text-sm opacity-90 font-body">
                <li>Baseball Fundamentals</li>
                <li>Softball Training Basics</li>
                <li>Pickleball Basics</li>
                <li>Youth Sports Development</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-impact font-semibold mb-4">Get Started</h4>
              <Button
                variant="beast" 
                className="w-full mb-4" 
                asChild
              >
                <a 
                  href="https://beasthack.com/shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Shop Beast Hack Stations
                </a>
              </Button>
              <p className="text-xs opacity-75 font-body">
                Serving Georgia Parks and recreation facilities nationwide.
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p className="font-body">&copy; 2024 Beast Hack. All rights reserved. | Master the fundamentals, give your kids a chance!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;