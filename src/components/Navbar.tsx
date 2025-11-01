import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-playfair text-2xl font-bold text-foreground">
            Artista.
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-inter font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <a href="#artworks" className="text-sm font-inter font-medium text-foreground hover:text-accent transition-colors">
              Artworks
            </a>
            <a href="#portraits" className="text-sm font-inter font-medium text-foreground hover:text-accent transition-colors">
              Portraits
            </a>
            <a href="#accessories" className="text-sm font-inter font-medium text-foreground hover:text-accent transition-colors">
              Home Accessories
            </a>
            <a href="#prints" className="text-sm font-inter font-medium text-foreground hover:text-accent transition-colors">
              Art Prints
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {isSearchOpen && (
              <div className="hidden md:block animate-fade-in">
                <Input 
                  type="search" 
                  placeholder="Search artworks..." 
                  className="w-64"
                  autoFocus
                />
              </div>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/product">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <div className="pb-4">
              <Input 
                type="search" 
                placeholder="Search artworks..." 
                className="w-full"
              />
            </div>
            <Link to="/" className="block text-sm font-inter font-medium text-foreground hover:text-accent">
              Home
            </Link>
            <a href="#artworks" className="block text-sm font-inter font-medium text-foreground hover:text-accent">
              Artworks
            </a>
            <a href="#portraits" className="block text-sm font-inter font-medium text-foreground hover:text-accent">
              Portraits
            </a>
            <a href="#accessories" className="block text-sm font-inter font-medium text-foreground hover:text-accent">
              Home Accessories
            </a>
            <a href="#prints" className="block text-sm font-inter font-medium text-foreground hover:text-accent">
              Art Prints
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
