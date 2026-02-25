import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border h-16 flex items-center">
        <Link
          to="/"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full font-serif text-2xl font-bold text-secondary"
        >
          Rachelle
        </Link>
      </div>

      <div className="text-center max-w-md pt-16">
        <Coffee className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-5xl font-serif font-bold text-secondary mb-4">
          404
        </h1>
        <p className="text-lg text-foreground mb-2">
          Oops! This page doesn't exist yet.
        </p>
        <p className="text-muted-foreground mb-8">
          Like an empty cup of coffee, this page is waiting to be filled. Return
          home and explore what's available.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
