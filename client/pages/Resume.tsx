import { Link } from "react-router-dom";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { useState } from "react";

const RESUMES = {
  pm: {
    label: "PM Resume",
    embedUrl: "https://docs.google.com/document/d/1tVTpTm9koVws2ZExwKdcTEVmHkwd2C0AYmQEV-F1ldM/preview",
    viewUrl: "https://docs.google.com/document/d/1tVTpTm9koVws2ZExwKdcTEVmHkwd2C0AYmQEV-F1ldM/view",
  },
  swe: {
    label: "SWE Resume",
    embedUrl: "https://docs.google.com/document/d/1Ey3mzLUgVxcKK9EFueVuNUmS9LlIZ2AtM-N5NHh_Yr0/preview",
    viewUrl: "https://docs.google.com/document/d/1Ey3mzLUgVxcKK9EFueVuNUmS9LlIZ2AtM-N5NHh_Yr0/view",
  },
};

export default function Resume() {
  const [active, setActive] = useState<"pm" | "swe">("pm");
  const resume = RESUMES[active];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg sm:text-2xl font-bold text-secondary shrink-0">
            Rachelle Chung
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={resume.viewUrl}
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

      {/* Toggle */}
      <div className="pt-24 flex justify-center px-4">
        <div className="flex bg-accent/10 rounded-xl p-1 gap-1">
          {(["pm", "swe"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {RESUMES[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Resume Viewer — desktop */}
      <div className="mt-6 hidden sm:block" style={{ height: "calc(100vh - 140px)" }}>
        <iframe
          key={active}
          src={resume.embedUrl}
          className="w-full h-full border-0"
          title={resume.label}
          allow="autoplay"
        />
      </div>

      {/* Mobile fallback */}
      <div className="sm:hidden flex flex-col items-center justify-center min-h-[60vh] px-6 text-center gap-6 mt-6">
        <p className="text-lg font-serif font-bold text-secondary">
          View my resume
        </p>
        <p className="text-muted-foreground text-sm">
          PDF preview isn't supported on mobile browsers. Open it directly in Google Drive instead.
        </p>
        <a
          href={resume.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Open {resume.label}
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
