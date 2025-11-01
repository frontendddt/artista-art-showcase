import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import sliderImage from "@/assets/slider-2.jpg";

const Hero = () => {
  const slides = [
    {
      title: "Discover Art That Speaks To You",
      description: "Explore our curated collection of original artwork and premium prints. From contemporary masterpieces to classic portraits.",
      image: sliderImage
    },
    {
      title: "Original Artworks & Paintings",
      description: "Transform your space with unique pieces from talented artists around the world.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000"
    },
    {
      title: "Premium Art Prints",
      description: "High-quality prints that bring museum-worthy art into your home.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                      {slide.title}
                    </h1>
                    <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium group">
                        Shop Collection
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="lg" className="font-inter font-medium">
                        View Gallery
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={slide.image}
                        alt="Featured artwork"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
