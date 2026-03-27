import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const programs = [
  { title: "International Professional Certificate in Film & Theatre", duration: "1 Year", type: "Certificate" },
  { title: "BA in Acting and Directing", duration: "4 Years", type: "Degree" },
  { title: "BA in Theatrical Design and Technical Production", duration: "4 Years", type: "Degree" },
  { title: "BA in Playwriting & Scriptwriting", duration: "4 Years", type: "Degree" },
  { title: "BA in Dramaturgy", duration: "4 Years", type: "Degree" },
  { title: "BA in Film & Theatre Management & Events", duration: "4 Years", type: "Degree" },
  { title: "BSc in Business of Film and Theatre", duration: "4 Years", type: "Degree" },
  { title: "BSc in Photography and Director of Photography", duration: "4 Years", type: "Degree" },
];

const curriculum = [
  "History and theories of theatre, film and television",
  "Screenwriting and narrative structure",
  "Directing for stage and screen",
  "Cinematography and lighting",
  "Theatrical design and technical production",
  "Dramaturgy and script analysis",
  "New media and emerging forms",
  "Film, video, and animation production",
  "Film & theatre business and management",
  "Photography and director of photography",
  "Film financing and distribution",
  "Events production and management",
];

export default function FilmTheatreDept() {
  return (
    <div>
      <Hero
        title="Film & Theatre Department"
        subtitle="Tell stories that captivate the world — from stage productions to international cinema and new media."
        imageSrc={`${import.meta.env.BASE_URL}images/performance-stage.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-sm text-primary mb-4">Department Overview</h2>
            <div className="w-12 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our Film and Theatre Department teaches the analytic and creative skills necessary to be both a critical reader and an international creative maker of films, video, and emerging forms of new media including theatre. Classes cover the history and theories of theatre, film, television and new media, screenwriting, and film, video, and animation production.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Storytelling is at the heart of human culture. Our department equips visual storytellers with the technical skills, emotional intelligence, and business acumen needed to produce compelling cinema and stage plays that reach global audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <h3 className="text-xl font-bold text-primary mb-5">What You'll Study</h3>
              <ul className="space-y-3 mb-8">
                {curriculum.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Career Paths</h4>
                <p className="text-sm text-muted-foreground">Actor, Director, Screenwriter, Dramaturg, Cinematographer / Director of Photography, Theatrical Designer, Film & Theatre Manager, Events Producer, Film Business Executive.</p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="heading-sm text-primary mb-8 text-center">Academic Programs</h3>
              <div className="space-y-4">
                {programs.map((prog) => (
                  <div key={prog.title} className="bg-white p-4 rounded-lg border border-border/50 hover:border-secondary transition-colors group">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-bold text-primary group-hover:text-secondary transition-colors text-sm leading-snug">{prog.title}</h4>
                      <Badge variant={prog.type === "Certificate" ? "secondary" : "default"} className={prog.type === "Certificate" ? "bg-secondary/20 text-secondary-foreground shrink-0" : "bg-primary text-white hover:bg-primary/90 shrink-0"}>
                        {prog.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{prog.duration}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
