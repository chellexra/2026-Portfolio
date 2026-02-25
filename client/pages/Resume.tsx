import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold text-secondary">
            Rachelle Chung
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Resume Viewer */}
      <div className="pt-20 h-screen">
        <object
          data="https://docs.google.com/document/d/1tVTpTm9koVws2ZExwKdcTEVmHkwd2C0AYmQEV-F1ldM/preview"
          type="application/pdf"
          className="w-full h-full"
        >
          <p>Unable to display PDF. <a href="resume.pdf">Download instead</a></p>
        </object>
      </div>
    </div>
  );
}