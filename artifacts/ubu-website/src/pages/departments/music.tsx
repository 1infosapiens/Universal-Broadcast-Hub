import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function MusicDept() {
  const programs = [
    { title: "Certificate in Music", duration: "6 Months", type: "Certificate" },
    { title: "BSc in Music Production", duration: "4 Years", type: "Degree" },
    { title: "BA in Music Marketing & Branding", duration: "4 Years", type: "Degree" },
    { title: "BSc in Music Technology", duration: "4 Years", type: "Degree" },
  ];

  return (
    <div>
      <Hero 
        title="Music Department"
        subtitle="Shape the soundscape of tomorrow."
        imageSrc={`${import.meta.env.BASE_URL}images/music-studio.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-sm text-primary mb-6">Department Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Music Department provides comprehensive education that spans the creative and the commercial. Whether you are a performer, producer, or aspiring music executive, our curriculum is tailored to the modern music industry.
              </p>
              
              <h3 className="text-xl font-bold text-primary mb-4 mt-8">What You'll Learn</h3>
              <ul className="space-y-3 mb-8">
                {["Music theory & composition", "Sound engineering & production", "Performance techniques", "Music business & distribution"].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-primary mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm py-1">Contemporary Music</Badge>
                <Badge variant="outline" className="text-sm py-1">Music Production & Engineering</Badge>
                <Badge variant="outline" className="text-sm py-1">Artist Branding & Management</Badge>
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
