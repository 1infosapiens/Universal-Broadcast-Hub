import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";

export default function DanceDept() {
  const programs = [
    { title: "Certificate in Dance", duration: "6 Months", type: "Certificate" },
    { title: "BSc in African Dance", duration: "4 Years", type: "Degree" },
    { title: "BA in Contemporary Dance", duration: "4 Years", type: "Degree" },
    { title: "BFA in Global Dance", duration: "4 Years", type: "Degree" },
    { title: "BA in Choreography", duration: "4 Years", type: "Degree" },
  ];

  return (
    <div>
      <Hero 
        title="Dance Department"
        subtitle="Express emotion through movement."
        imageSrc={`${import.meta.env.BASE_URL}images/performance-stage.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-sm text-primary mb-6">Department Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Dance Department celebrates movement as a universal language. From deeply rooted cultural dances to avant-garde contemporary choreography, students undergo rigorous physical training paired with historical and theoretical studies.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mt-8">
                <h3 className="font-bold text-primary mb-2">Career Paths</h3>
                <p className="text-sm text-muted-foreground">Professional Dancer, Choreographer for Film/Stage, Dance Educator, Artistic Director, Movement Therapist.</p>
              </div>
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
