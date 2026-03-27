import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const programs = [
  { title: "International Professional Certificate in Professional Modeling", duration: "6 Months", type: "Certificate" },
  { title: "International Professional Diploma in Professional Modeling", duration: "1 Year", type: "Diploma" },
  { title: "BFA in Modeling, Events & Campaign Management", duration: "4 Years", type: "Degree" },
  { title: "BSc in Fashion, Modeling & Performing Arts (Music, Film, Theatre)", duration: "4 Years", type: "Degree" },
  { title: "BSc in Modeling & Communication / Broadcasting / Journalism", duration: "4 Years", type: "Degree" },
  { title: "BSc in Modeling & Business (Banking, Insurance, Finance)", duration: "4 Years", type: "Degree" },
];

const curriculum = [
  "Psychology & Anthropology",
  "Aesthetics & Personal Branding",
  "Communication & Media Studies",
  "Theatre & Performing Arts",
  "Film & Acting",
  "Fashion Design & Styling",
  "Advertising & Campaigns",
  "Logic, Law & Ethics",
  "Runway Techniques & Editorial Posing",
  "Portfolio Development",
  "Fashion Business & Agency Contracts",
  "Campaign Management & Art Direction",
  "Computer & Digital Skills for the Industry",
];

export default function ModelingDept() {
  return (
    <div>
      <Hero
        title="Modeling Department"
        subtitle="Define the future of fashion and brand representation — from runways in New York and Milan to the streets of Paris and Tokyo."
        imageSrc={`${import.meta.env.BASE_URL}images/creative-arts.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-sm text-primary mb-4">Department Overview</h2>
            <div className="w-12 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Modeling is the ultimate artistic expression of individual style. Our faculty prepares students for professional futures in the world of modeling and business, offering degrees for those who pursue professional careers in modeling with several options including Communication, Journalism, Marketing, Theatre, Fashion, and Events Management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Through hands-on, first-class courses, students gain both theoretical and practical experience that makes them stand out. Our top-notch faculty allows students to work on international projects in many diverse fields including business, banking, communication, social sciences, and even politics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Those who specialise in the Fashion option can work for fashion houses including powerhouses such as Gucci, Ralph Lauren, Dolce & Gabbana, Donna Karan, BCBG, and Gap Inc. Our programme provides students with a global vision that combines the excellence of Western styles with the energy and technology of the creative arts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <h3 className="text-xl font-bold text-primary mb-5">What You'll Study</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Top industry professionals teach a curriculum that includes coursework in psychology, anthropology, aesthetics, communication, theatre, film, acting, performing arts, fashion, design, advertising, logic, law, and more — guaranteeing business and professional opportunities for graduates worldwide.
              </p>
              <ul className="space-y-3">
                {curriculum.map((item) => (
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
