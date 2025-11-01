import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const artworks = [
  {
    id: 1,
    title: "Today is a Good Day",
    artist: "Abstract Collection",
    price: 26.00,
    originalPrice: 29.00,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800",
    isNew: true,
    discount: "Save $3.00"
  },
  {
    id: 2,
    title: "Midnight Dreams",
    artist: "Modern Art",
    price: 34.00,
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800",
  },
  {
    id: 3,
    title: "Golden Horizon",
    artist: "Landscape Series",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
  },
  {
    id: 4,
    title: "Urban Poetry",
    artist: "City Collection",
    price: 28.00,
    originalPrice: 35.00,
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800",
    discount: "Save $7.00"
  },
  {
    id: 5,
    title: "Ocean Whispers",
    artist: "Nature Series",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800",
  },
  {
    id: 6,
    title: "Crimson Nights",
    artist: "Bold Collection",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=800",
    isNew: true
  }
];

const FeaturedArtworks = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="artworks">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Artworks
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces from our collection of stunning artwork and prints
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                {artwork.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {artwork.discount && (
                  <span className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    {artwork.discount}
                  </span>
                )}
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Link to="/product">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {artwork.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground mb-4">
                  {artwork.artist}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-inter text-2xl font-bold text-foreground">
                    ${artwork.price.toFixed(2)}
                  </span>
                  {artwork.originalPrice && (
                    <span className="font-inter text-sm text-muted-foreground line-through">
                      ${artwork.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-inter font-medium">
            View All Artworks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
