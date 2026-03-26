import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function FilmTheatreDept() {
  const programs = [
    { title: "Certificate in Film & Theatre", duration: "1 Year", type: "Certificate" },
    { title: "BA in Acting & Directing", duration: "4 Years", type: "Degree" },
    { title: "BA in Scriptwriting", duration: "4 Years", type: "Degree" },
    { title: "BSc in Film Business", duration: "4 Years", type: "Degree" },
    { title: "BSc in Photography & Cinematography", duration: "4 Years", type: "Degree" },
  ];

  return (
    <div>
      <Hero 
        title="Film & Theatre Department"
        subtitle="Tell stories that captivate the world."
        imageSrc={`${import.meta.env.BASE_URL}images/performance-stage.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-sm text-primary mb-6">Department Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Storytelling is at the heart of human culture. Our Film & Theatre Department equips visual storytellers with the technical skills, emotional intelligence, and business acumen needed to produce compelling cinema and stage plays.
              </p>
              
              <h3 className="text-xl font-bold text-primary mb-4 mt-8">What You'll Learn</h3>
              <ul className="space-y-3 mb-8">
                {["Cinematography and lighting", "Screenwriting and narrative structure", "Directing for stage and screen", "Film financing and distribution"].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="heading-sm text-primary mb-8 text-center">Academic Programs</h3>
              <div className="space-y-4">
                {programs.map((prog) => (
                  <div key={prog.title} className="bg-white p-4 rounded-lg border border-border/50 hover:border-secondary transition-colors flex justify-between items-center group">
                    <div>
                      <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">{prog.title}</h4>
                      <p className="text-sm text-muted-foreground">{prog.duration}</p>
                    </div>
                    <Badge variant={prog.type === 'Degree' ? 'default' : 'secondary'} className="bg-primary text-white">
                      {prog.type}
                    </Badge>
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
