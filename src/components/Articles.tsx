import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Rise of Digital Art: How NFTs Are Changing the Market",
    excerpt: "Explore how blockchain technology and NFTs are revolutionizing the way we buy, sell, and appreciate digital artwork in the modern era.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800",
    category: "Market Trends",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Alexandra Pierce"
  },
  {
    id: 2,
    title: "Understanding Color Theory in Contemporary Abstract Art",
    excerpt: "A deep dive into how modern artists use color psychology and theory to create emotionally powerful abstract compositions.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800",
    category: "Art Education",
    date: "March 12, 2024",
    readTime: "7 min read",
    author: "David Kumar"
  },
  {
    id: 3,
    title: "Investment Guide: Building Your First Art Collection",
    excerpt: "Expert tips on how to start your art collection, from choosing pieces you love to understanding market value and appreciation.",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800",
    category: "Collecting",
    date: "March 10, 2024",
    readTime: "6 min read",
    author: "Sophie Anderson"
  },
  {
    id: 4,
    title: "Behind the Canvas: Interview with Rising Star Emma Waters",
    excerpt: "An intimate conversation with one of today's most exciting emerging artists about her creative process and inspiration.",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800",
    category: "Artist Stories",
    date: "March 8, 2024",
    readTime: "8 min read",
    author: "Michael Chen"
  },
  {
    id: 5,
    title: "How to Display and Care for Your Art Collection at Home",
    excerpt: "Professional advice on proper lighting, framing, and maintenance to preserve and showcase your artworks beautifully.",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
    category: "Care & Display",
    date: "March 5, 2024",
    readTime: "5 min read",
    author: "Rachel Thompson"
  },
  {
    id: 6,
    title: "The Psychology of Art: Why We're Drawn to Certain Pieces",
    excerpt: "Discover the scientific and psychological reasons behind our emotional connections to specific artworks and styles.",
    image: "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?q=80&w=800",
    category: "Art Science",
    date: "March 1, 2024",
    readTime: "6 min read",
    author: "Dr. James Wilson"
  }
];

const Articles = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 font-inter">Art Magazine</Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Articles & Insights
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert perspectives, artist interviews, and in-depth guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="font-inter text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-xs font-inter text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-playfair text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="font-inter text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-inter text-sm text-muted-foreground">
                    By {article.author}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-inter font-medium">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
