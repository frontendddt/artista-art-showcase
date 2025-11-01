const categories = [
  {
    id: 1,
    name: "Portraits",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=600",
    count: "48 artworks"
  },
  {
    id: 2,
    name: "Landscapes",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
    count: "62 artworks"
  },
  {
    id: 3,
    name: "Abstract",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=600",
    count: "35 artworks"
  },
  {
    id: 4,
    name: "Modern Art",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600",
    count: "29 artworks"
  }
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-muted" id="portraits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection organized by style and theme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-1">
                  {category.name}
                </h3>
                <p className="font-inter text-sm opacity-90">
                  {category.count}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
