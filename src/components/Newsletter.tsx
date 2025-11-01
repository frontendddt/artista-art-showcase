import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Join Our Art Community
          </h2>
          <p className="font-inter text-lg mb-8 opacity-90">
            Subscribe to receive exclusive offers, new collection updates, and art inspiration
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-foreground border-none font-inter flex-1"
            />
            <Button 
              type="submit" 
              variant="secondary"
              size="lg"
              className="font-inter font-medium whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
