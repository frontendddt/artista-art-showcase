import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Today is a Good Day",
    artist: "Abstract Collection",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800",
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
          Trending Product
        </h2>
        
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="featured" className="font-inter relative">
              <span className="relative z-10">FEATURED</span>
              <span className="absolute inset-0 bg-accent/20 -skew-x-12 data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger value="latest" className="font-inter">LATEST</TabsTrigger>
            <TabsTrigger value="bestseller" className="font-inter">BESTSELLER</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
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
                      {product.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                      {product.artist}
                    </p>
                    <span className="font-inter text-2xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="latest">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice().reverse().map((product) => (
                <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
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
                      {product.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                      {product.artist}
                    </p>
                    <span className="font-inter text-2xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bestseller">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
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
                      {product.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                      {product.artist}
                    </p>
                    <span className="font-inter text-2xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TrendingProducts;
