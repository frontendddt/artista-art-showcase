import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Sarah Mitchell",
    specialty: "Abstract Expressionism",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
    coverImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800",
    artworks: 34,
    followers: "2.3K",
    featured: true
  },
  {
    id: 2,
    name: "Marcus Chen",
    specialty: "Contemporary Portraits",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    coverImage: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800",
    artworks: 28,
    followers: "1.8K",
    trending: true
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    specialty: "Landscape & Nature",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
    coverImage: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
    artworks: 42,
    followers: "3.1K",
    award: true
  }
];

const ArtistSpotlight = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Artists
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover talented artists from around the world creating extraordinary works
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Card key={artist.id} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={artist.coverImage}
                  alt={`${artist.name} artwork`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {artist.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                {artist.trending && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>

              <CardContent className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="relative -mt-12">
                    <div className="w-20 h-20 rounded-full border-4 border-background overflow-hidden shadow-lg">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                      {artist.name}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                      {artist.specialty}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm font-inter text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {artist.followers}
                      </span>
                      <span>{artist.artworks} artworks</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full font-inter">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="font-inter font-medium">
            Discover All Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
