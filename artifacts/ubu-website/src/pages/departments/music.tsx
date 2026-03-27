import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const programs = [
  { title: "International Professional Certificate in Music", duration: "6 Months", type: "Certificate" },
  { title: "BSc in Music Composition, Engineering & Production", duration: "4 Years", type: "Degree" },
  { title: "BSc in Pop, Hiphop, Rock, Blues, Jazz, R&B, Hiplife, Highlife, Reggae, Reggaeton, Dancehall, Country, Dance, Techno, New Age, Hindi, Arabic", duration: "4 Years", type: "Degree" },
  { title: "BA in Music Branding, Marketing, Distribution & Artists' Management", duration: "4 Years", type: "Degree" },
  { title: "BSc in Music Technology", duration: "4 Years", type: "Degree" },
];

const whatYouLearn = [
  "Music theory & composition",
  "Sound engineering & production",
  "Performance techniques across genres",
  "Music business & distribution",
  "Artists' branding & management",
  "Music technology & software",
  "Music marketing & promotion",
  "Advanced music research",
];

export default function MusicDept() {
  return (
    <div>
      <Hero
        title="Music Department"
        subtitle="Shape the soundscape of tomorrow — from performance and production to management and technology."
        imageSrc={`${import.meta.env.BASE_URL}images/music-studio.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-sm text-primary mb-4">Department Overview</h2>
            <div className="w-12 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Faculty of Music offers degrees and prepares talented and committed students for careers as artists, performers, teachers, composers, managers, and researchers. It also provides the foundation for advanced degrees in music at the graduate level.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              The programme is designed for students who plan on a professional career in a music-related occupation, and it also prepares students for advanced degrees in the music field. Our curriculum spans the creative and the commercial — whether you are a performer, producer, or aspiring music executive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <h3 className="text-xl font-bold text-primary mb-5">What You'll Learn</h3>
              <ul className="space-y-3 mb-8">
                {whatYouLearn.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold text-primary mb-3">Genre Specialisations</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  UnibUni's Music programme is unique in offering genre-specific pathways covering the full breadth of global music: Pop, Hiphop, Rock, Blues, Jazz, R&B, Hiplife, Highlife, Reggae, Reggaeton, Dancehall, Country, Dance, Techno, New Age, Hindi, Arabic, and more.
                </p>
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
