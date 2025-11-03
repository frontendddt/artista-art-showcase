import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";
import CuratedCollections from "@/components/CuratedCollections";
import LatestCollection from "@/components/LatestCollection";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import Categories from "@/components/Categories";
import Articles from "@/components/Articles";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrendingProducts />
      <CuratedCollections />
      <LatestCollection />
      <FeaturedArtworks />
      <ArtistSpotlight />
      <Categories />
      <Articles />
      <Blogs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
