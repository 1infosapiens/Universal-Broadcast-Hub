import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function ModelingDept() {
  const programs = [
    { title: "Certificate in Modeling", duration: "6 Months", type: "Certificate" },
    { title: "Diploma in Modeling", duration: "1 Year", type: "Diploma" },
    { title: "BFA in Modeling & Campaign Management", duration: "4 Years", type: "Degree" },
    { title: "BSc in Fashion & Performing Arts", duration: "4 Years", type: "Degree" },
    { title: "BSc in Modeling & Journalism", duration: "4 Years", type: "Degree" },
    { title: "BSc in Modeling & Business", duration: "4 Years", type: "Degree" },
  ];

  return (
    <div>
      <Hero 
        title="Modeling Department"
        subtitle="Define the future of fashion and brand representation."
        imageSrc={`${import.meta.env.BASE_URL}images/creative-arts.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-sm text-primary mb-6">Department Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Modeling Department at UBU goes beyond the runway. We train our students to be complete brand ambassadors, understanding the business of fashion, the art of posing, and the mechanics of campaign management.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4 mt-8">What You'll Learn</h3>
              <ul className="space-y-3">
                {["Runway techniques & editorial posing", "Personal branding and portfolio development", "Fashion business and agency contracts", "Campaign management and art direction"].map((item) => (
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
                    <Badge variant={prog.type === 'Degree' ? 'default' : 'secondary'} className="bg-primary text-white hover:bg-primary/90">
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
