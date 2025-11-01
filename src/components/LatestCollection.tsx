import sectionBanner from "@/assets/section-banner-1.jpg";

const LatestCollection = () => {
  const collectionImages = [
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=600",
    "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600",
    "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600",
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=600",
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=600",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="h-1 w-24 bg-accent mb-4"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Our Latest Collection Of Original Artworks & Paintings
            </h2>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={collectionImages[0]}
                    alt="Art collection"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={collectionImages[1]}
                    alt="Art collection"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-4 mt-12">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={collectionImages[2]}
                    alt="Art collection"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={collectionImages[3]}
                    alt="Art collection"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="text-accent fill-current">
                <path d="M20,50 Q30,20 50,30 T80,50 Q70,80 50,70 T20,50" />
              </svg>
            </div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100" className="text-accent fill-current">
                <circle cx="50" cy="50" r="3" />
                <circle cx="70" cy="50" r="3" />
                <circle cx="50" cy="70" r="3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <img
            src={sectionBanner}
            alt="Latest collection banner"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
