import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus, Heart, Share2, ShoppingCart, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const productImages = [
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800",
  "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800",
  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
  "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800"
];

const relatedProducts = [
  {
    id: 1,
    title: "Midnight Dreams",
    price: 34.00,
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=400"
  },
  {
    id: 2,
    title: "Golden Horizon",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=400"
  },
  {
    id: 3,
    title: "Urban Poetry",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=400"
  },
  {
    id: 4,
    title: "Ocean Whispers",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=400"
  }
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [dimension, setDimension] = useState("40x60cm");
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} item(s) in ${dimension} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted py-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="font-inter text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <span className="hover:text-foreground">Portraits</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Today Is A Good Day Framed Poster</span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted">
                  <span className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    Save $3.00
                  </span>
                  <span className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    New
                  </span>
                  <img
                    src={productImages[selectedImage]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? "border-accent" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Today Is A Good Day Framed Poster
                  </h1>
                  <a href="#reviews" className="font-inter text-sm text-accent hover:underline">
                    Read Review
                  </a>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="font-inter text-4xl font-bold text-foreground">
                    $26.00
                  </span>
                  <span className="font-inter text-xl text-muted-foreground line-through">
                    $29.00
                  </span>
                  <span className="font-inter text-sm font-semibold text-accent">
                    Save $3.00
                  </span>
                </div>

                <p className="font-inter text-base text-muted-foreground leading-relaxed">
                  Consequat finibus massa. Vivamus elementum nisl non arcu viverra, pulvinar blandit dui scelerisque. 
                  Morbi eget pulvinar lorem. Nulla volutpat a odio et imperdiet. Phasellus posuere sit amet ex et blandit. 
                  Fusce bibendum quam a ante aliquam viverra. Suspendisse orci neque.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="font-inter font-medium text-foreground mb-2 block">
                      Dimension
                    </label>
                    <Select value={dimension} onValueChange={setDimension}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="40x60cm">40x60cm</SelectItem>
                        <SelectItem value="50x70cm">50x70cm</SelectItem>
                        <SelectItem value="60x80cm">60x80cm</SelectItem>
                        <SelectItem value="70x100cm">70x100cm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <label className="font-inter font-medium text-foreground mb-2 block">
                        Qty
                      </label>
                      <div className="flex items-center border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-6 font-inter font-medium">{quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1">
                      <label className="font-inter font-medium text-foreground mb-2 block opacity-0">
                        Action
                      </label>
                      <Button
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium"
                        onClick={handleAddToCart}
                      >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="lg" className="flex-1 font-inter font-medium">
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                  <Button variant="outline" size="lg" className="font-inter font-medium">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="bg-[#3b5998] text-white hover:bg-[#3b5998]/90">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Security policy</h4>
                      <p className="font-inter text-sm text-muted-foreground">(edit with the Customer Reassurance module)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Delivery policy</h4>
                      <p className="font-inter text-sm text-muted-foreground">(edit with the Customer Reassurance module)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                    </svg>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Return policy</h4>
                      <p className="font-inter text-sm text-muted-foreground">(edit with the Customer Reassurance module)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <span className="font-inter text-xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
