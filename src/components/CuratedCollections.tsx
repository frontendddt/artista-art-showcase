import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const collections = [
  {
    id: 1,
    title: "Vivid Portraiture",
    description: "Contemporary works redefining human presence, emotion and identity",
    image: "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?q=80&w=1000",
    badge: "Collection",
    artworkCount: 45
  },
  {
    id: 2,
    title: "Limited-time deals",
    description: "Elevate your collection with original artworks at exceptional prices",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1000",
    badge: "Special deals",
    discount: "Up to 50% off",
    artworkCount: 28
  },
  {
    id: 3,
    title: "Abstract Expressions",
    description: "Bold colors and dynamic compositions that captivate the imagination",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000",
    badge: "Collection",
    artworkCount: 67
  }
];

const CuratedCollections = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curated Collections
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully selected collections featuring exceptional artworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute top-6 left-6">
                  <Badge variant="secondary" className="font-inter text-xs font-semibold">
                    {collection.badge}
                  </Badge>
                </div>

                {collection.discount && (
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-accent text-accent-foreground font-inter text-xs font-semibold">
                      {collection.discount}
                    </Badge>
                  </div>
                )}

                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="font-inter text-sm md:text-base text-white/90 mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-white/80">
                      {collection.artworkCount} artworks
                    </span>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="group-hover:bg-white group-hover:text-primary transition-colors duration-300"
                    >
                      Shop Collection
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCollections;
