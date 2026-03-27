import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const programs = [
  { title: "International Professional Certificate in Dance", duration: "6 Months", type: "Certificate" },
  { title: "BSc in African Dance", duration: "4 Years", type: "Degree" },
  { title: "BA in Contemporary Dance", duration: "4 Years", type: "Degree" },
  { title: "BFA in Global Dance", duration: "4 Years", type: "Degree" },
  { title: "BA in Creative Dance", duration: "4 Years", type: "Degree" },
  { title: "BA in Dance Management & Events", duration: "4 Years", type: "Degree" },
  { title: "BA in Choreography", duration: "4 Years", type: "Degree" },
];

const skills = [
  "Aesthetic, technical, and critical dance skills",
  "Modern dance and physical performance",
  "African dance traditions and culture",
  "Contemporary and global choreography",
  "Dance history, theory and criticism",
  "Creative direction and stage production",
  "Dance management and events coordination",
  "Movement therapy and somatic practices",
];

export default function DanceDept() {
  return (
    <div>
      <Hero
        title="Dance Department"
        subtitle="Express emotion through movement — from deeply rooted cultural dances to avant-garde contemporary choreography."
        imageSrc={`${import.meta.env.BASE_URL}images/performance-stage.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-sm text-primary mb-4">Department Overview</h2>
            <div className="w-12 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The School of Dance offers undergraduate programs designed to prepare students for careers as performers, choreographers, and professionals across all dance disciplines from around the world. Under the guidance of our excellent faculty, talented students develop aesthetic, technical, and critical skills through the art form of modern dance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              The Dance Department celebrates movement as a universal language. From deeply rooted cultural dances to avant-garde contemporary choreography, students undergo rigorous physical training paired with historical and theoretical studies. Degree offerings include the Bachelor of Arts and the professional Bachelor of Fine Arts in dance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <h3 className="text-xl font-bold text-primary mb-5">What You'll Develop</h3>
              <ul className="space-y-3 mb-8">
                {skills.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Career Paths</h4>
                <p className="text-sm text-muted-foreground">Professional Dancer, Choreographer for Film/Stage, Dance Educator, Artistic Director, Dance Manager & Events Coordinator, Movement Therapist.</p>
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
