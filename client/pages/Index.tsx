import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

// ── Experiences ──────────────────────────────────────────────────────────────

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

const experiences: Experience[] = [
  {
    title: "Technical Project Management Intern",
    company: "Intuit - Quickbooks",
    period: "May - Dec 2025",
    description:
      "Transformed documentation and communication workflows between national accounting firm clients and product development teams, improving collaboration and issue resolution using Jira and Smartsheets",
    skills: ["Jira", "Smartsheets", "product roadmap", "User Testing", "Figma", "Scrum", "product management", "product design"],
  },
  {
    title: "Clinical Research Projects Coordinator",
    company: "Provincial Health Services Authority",
    period: "Jun 2021 - Sep 2025",
    description:
      "Mastered skills in Microsoft Excel, REDCap and Microsoft Office apps to organize various tasks such as data analysis across 8 different projects and problem-solve in quick-paced environments",
    skills: ["Data Analysis", "Data Collection", "Data Management", "Recruitment", "Clinical Research", "Canva", "REDCap"],
  },
];

// ── Gallery ───────────────────────────────────────────────────────────────────

interface GalleryItem {
  title: string;
  description: string;
  image: string;
  category: "UI/UX" | "Photography" | "Graphics" | "Front-End Dev" | "Full-Stack Dev" | "Product Management" | "Project Management";
  tags?: string[];
  githubUrl?: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Moodie",
    description: "Letting users select curated playlists based on their emotional state.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2fee5fb64ed040cfbb079c9f4e5444d0%2F4ff4a8ec420e4e40a18042ddd3838a84",
    category: "UI/UX",
  },
  {
    title: "Hey Neighbour",
    description: "Our web app connects volunteers with neighbors in need, whether it's help with groceries, yard work, or just a friendly conversation.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2fee5fb64ed040cfbb079c9f4e5444d0%2F1fb28e0038514a6b84c61fd94f7ac5e5",
    category: "UI/UX",
  },
  {
    title: "Dine Finder",
    description: "Restaurant discovery app designed around user needs, from initial research to high-fidelity prototype.",
    image: "/images/dineFinder.png",
    category: "UI/UX",
    tags: ["Hi-fi Prototype", "User Interviews", "Conceptual Models"],
  },
  {
    title: "The Last Laugh",
    description: "2D pixelated game that follows our heroine in defeating misogynistic comedian Rat Rife with tomatoes!",
    image: "/images/TheLastLaugh.png",
    category: "Graphics",
    tags: ["Game Design", "Sprites", "Storytelling"],
  },
  {
    title: "Virtual Closet",
    description: "Full-stack web application to reduce closet clutter and fashion waste.",
    image: "/images/virtualCloset_home.png",
    category: "UI/UX",
    githubUrl: "https://github.com/chellexra/Virtual-Closet",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "UI/UX": "bg-rose-100 text-rose-700",
  Photography: "bg-sky-100 text-sky-700",
  Graphics: "bg-amber-100 text-amber-700",
  "Front-End Dev": "bg-violet-100 text-violet-700",
  "Full-Stack Dev": "bg-emerald-100 text-emerald-700",
  "Product Management": "bg-orange-100 text-orange-700",
  "Project Management": "bg-teal-100 text-teal-700",
};

function PortfolioGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  return (
    <>
      <section id="gallery" className="py-24 overflow-hidden border-t border-border">
        <div className="max-w-6xl mx-auto px-6 mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-secondary leading-tight">
              Portfolio Gallery
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-secondary hover:text-background transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-secondary hover:text-background transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-5 overflow-x-auto scroll-smooth px-6 max-w-6xl mx-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item)}
              className="group flex-shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-accent/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-background text-sm font-medium tracking-wide">
                    <ZoomIn size={16} /> View
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide mb-3 ${CATEGORY_COLORS[item.category]}`}>
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-secondary text-lg leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-accent/20 text-secondary rounded-full text-[10px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={12} />
                    View on GitHub
                  </a>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-secondary/80 text-background flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="aspect-video bg-accent/10 overflow-hidden">
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide mb-3 ${CATEGORY_COLORS[lightbox.category]}`}>
                {lightbox.category}
              </span>
              <h3 className="font-serif font-bold text-secondary text-2xl mb-2">{lightbox.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{lightbox.description}</p>
              {lightbox.tags && lightbox.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {lightbox.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-accent/20 text-secondary rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {lightbox.githubUrl && (
                <a
                  href={lightbox.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
                >
                  <ExternalLink size={14} />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg sm:text-2xl font-bold text-secondary shrink-0">
            Rachelle Chung
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Work
            </a>
            <a
              href="https://github.com/chellexra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              GitHub
              <ExternalLink className="w-3 h-3 hidden sm:block" />
            </a>
            <a
              href="https://www.linkedin.com/in/rachelle-chung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              LinkedIn
              <ExternalLink className="w-3 h-3 hidden sm:block" />
            </a>
            <Link
              to="/resume"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center gap-2"
            >
              View Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-accent/15">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div
              className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={(e) => {
                const inner = e.currentTarget.querySelector(".flip-inner") as HTMLElement;
                if (inner) inner.style.transform = inner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
              }}
            >
              <div
                className="flip-inner relative w-full h-full"
                style={{ transformStyle: "preserve-3d", transition: "transform 0.6s ease", transform: "rotateY(0deg)" }}
              >
                {/* Front — new photo */}
                <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                  <img
                    src="/images/IntuitDay3-096.jpg"
                    alt="Rachelle Chung"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    style={{ objectPosition: "center 30%"}}
                  />
                </div>
                {/* Back — original photo */}
                <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2fee5fb64ed040cfbb079c9f4e5444d0%2F25cd4cd78d22483582751cd445a76f79"
                    alt="Rachelle Chung"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
                Welcome to my portfolio
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-secondary mb-6 leading-tight">
                Design-focused. User-centered.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Crafting meaningful and accessible digital experiences through research, design,
                and thoughtful problem-solving. Currently exploring opportunities in Software Development,
                Product Management or UX Design/Research.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#experiences"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Explore My Work
            </a>
                <a
                  href="#matcha"
                  className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                >
                  Wanna grab matcha? 🍵
                  </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-secondary mb-6">About</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            I'm passionate about creating digital experiences that are both beautiful and functional.
            With a background in design research and user experience, I combine strategic thinking
            with hands-on design skills to solve complex user problems.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            I'm currently studying Computer Science at UBC in the BCS program, an accelerated
            two-year degree designed for students who already hold a degree in another field. 
            My first degree was in Health Sciences, which gave me a strong foundation in research,
            data, and understanding people.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            My approach is rooted in understanding users deeply—through research, testing, and
            iteration. I believe great design comes from empathy, and I'm committed to creating
            products that make a real difference in people's lives.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section
        id="experiences"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wider">My journey</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-secondary">Professional Menu</h2>
            <p className="text-muted-foreground mt-4">A selection of my work experiences, carefully curated</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                  <h3 className="text-xl sm:text-lg font-serif font-bold text-secondary">{exp.title}</h3>
                  <span className="text-sm font-medium text-accent">{exp.period}</span>
                </div>
                <p className="text-primary font-semibold mb-4">{exp.company}</p>
                <p className="text-foreground leading-relaxed mb-4">{exp.description}</p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary/10 rounded-xl border border-secondary/20 text-center">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-3">Want to see more?</h3>
            <p className="text-foreground mb-6">
              Check out my full professional history and recommendations on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/rachelle-chung/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Visit LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* CTA Section */}
           <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 md:p-16 text-center text-primary-foreground">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6">Let's work together</h2>
          <p className="text-lg mb-8 opacity-95">
            Interested in collaborating or have questions? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rachellechungg@gmail.com"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
            <Link
              to="/resume"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>

      <section id="matcha" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
            A little about me
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-secondary mb-4">
              My Current Favourite Matcha Spot 🍵
              </h2>
              <p className="text-muted-foreground mb-8">
                Because every great portfolio needs a matcha recommendation.
                </p>
                <div className="relative rounded-2xl overflow-hidden w-full aspect-[3/4] bg-accent/10 max-w-sm mx-auto">
                <img
                src="/images/cowdog.PNG"
                alt="My favourite matcha"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 60%"}}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-serif font-bold text-xl">
                  Cowdog
                  </p>
                  <p className="text-white/80 text-sm">
                  📍 3720 Oak Street
                  </p>
                  </div>
                  </div>
                  <p className="text-muted-foreground mt-6 text-sm italic">
                    Drop your matcha recommendations my way, I am always on the hunt for the next great cup.
                  </p>
                    </div>
                    </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2026 Rachelle Chung. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}