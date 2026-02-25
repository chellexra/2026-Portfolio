import { Link } from "react-router-dom";
import { ChevronLeft, ExternalLink } from "lucide-react";

// Replace this with your Google Drive preview URL
const RESUME_EMBED_URL = "https://docs.google.com/document/d/1tVTpTm9koVws2ZExwKdcTEVmHkwd2C0AYmQEV-F1ldM/preview";
const RESUME_DOWNLOAD_URL = "https://docs.google.com/document/d/1tVTpTm9koVws2ZExwKdcTEVmHkwd2C0AYmQEV-F1ldM/view";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold text-secondary">
            Rachelle Chung
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              Open in Drive
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </nav>

      {/* Resume Viewer — desktop */}
      <div className="pt-16 h-screen hidden sm:block">
        <iframe
          src={RESUME_EMBED_URL}
          className="w-full h-full border-0"
          title="Rachelle Chung Resume"
          allow="autoplay"
        />
      </div>

      {/* Mobile fallback — shown only on small screens */}
      <div className="sm:hidden flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6">
        <p className="text-lg font-serif font-bold text-secondary">
          View my resume
        </p>
        <p className="text-muted-foreground text-sm">
          PDF preview isn't supported on mobile browsers. Open it directly in Google Drive instead.
        </p>
        <a
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Open Resume
          <ExternalLink className="w-4 h-4" />
        </a>
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}