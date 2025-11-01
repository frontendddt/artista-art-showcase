import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Art of Contemporary Abstract Painting",
    excerpt: "Discover the techniques and inspiration behind modern abstract art movements and how they shape today's creative landscape.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    author: "Emma Wilson",
    date: "March 15, 2024",
    category: "Art Techniques"
  },
  {
    id: 2,
    title: "Choosing the Perfect Art for Your Space",
    excerpt: "A comprehensive guide to selecting artwork that complements your interior design and reflects your personal style.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800",
    author: "James Chen",
    date: "March 12, 2024",
    category: "Interior Design"
  },
  {
    id: 3,
    title: "Behind the Canvas: Artist Interview Series",
    excerpt: "Explore the creative process and stories of renowned artists as they share their journey and artistic philosophy.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800",
    author: "Sarah Martinez",
    date: "March 10, 2024",
    category: "Interviews"
  }
];

const Blogs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
            Latest From Our Blog
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tips, and stories from the world of art and design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <Card 
              key={blog.id} 
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-inter">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {blog.excerpt}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-inter font-semibold text-accent hover:gap-2 transition-all group/btn"
                >
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="font-inter font-medium border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
