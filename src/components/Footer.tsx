import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Artista.</h3>
            <p className="font-inter text-sm opacity-80">
              Curating exceptional art pieces for discerning collectors and art enthusiasts worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#artworks" className="opacity-80 hover:opacity-100 transition-opacity">Artworks</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Artists</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Shipping Info</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Returns</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="font-inter text-sm mt-4 opacity-80">
              Order Online Or Call Us<br />
              <span className="font-semibold">(2400) 000 2404</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center font-inter text-sm opacity-80">
          <p>&copy; 2024 Artista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
