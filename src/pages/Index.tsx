import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedArtworks />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
