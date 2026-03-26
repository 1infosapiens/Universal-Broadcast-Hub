import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { Shield, CheckCircle2, Briefcase, BookOpen, ArrowRight } from "lucide-react";

const modules = [
  "Introduction to Strategic Studies", "National Security & Defence Policy", "Intelligence Analysis & Methods",
  "Geopolitics & International Order", "Conflict Resolution & Peace Studies", "Terrorism & Counter-Terrorism",
  "Cyber Security & Information Warfare", "Diplomacy & Negotiation", "Military Strategy & History",
  "Ethics in Intelligence & Security",
];

const careers = [
  "Intelligence Analyst", "National Security Advisor", "Diplomat / Foreign Affairs Officer",
  "Corporate Security Manager", "Think Tank Researcher", "Defence Consultant",
  "International Affairs Officer", "Conflict Resolution Specialist",
];

const programs = [
  { title: "Certificate in Strategic & Security Studies", duration: "6 Months", type: "Certificate" },
  { title: "Diploma in Intelligence Studies", duration: "1 Year", type: "Diploma" },
  { title: "BSc in Strategic Studies / Intelligence Studies", duration: "3–4 Years", type: "Degree" },
];

export default function StrategicStudiesProgramme() {
  return (
    <div>
      <Hero
        title="Strategic Studies / Intelligence Studies (BSc)"
        subtitle="Understand the forces shaping our world — and position yourself to influence them."
        imageSrc={`${import.meta.env.BASE_URL}images/campus-hero.png`}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="heading-sm text-primary mb-4">Programme Overview</h2>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Strategic and Intelligence Studies at UnibUni explores the complex dynamics of global security, power, and intelligence. Students gain a deep understanding of geopolitics, security threats, intelligence methodology, and diplomatic strategy — preparing them for careers at the intersection of knowledge and national interest.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  The programme develops critical thinkers and ethical analysts equipped to serve governments, international organisations, research institutions, and the private sector in roles that require precision, discretion, and strategic foresight.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2"><BookOpen className="w-5 h-5 text-secondary" /> Core Modules</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modules.map((m) => (
                    <div key={m} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> {m}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2"><Briefcase className="w-5 h-5 text-secondary" /> Career Paths</h3>
                <div className="flex flex-wrap gap-3">
                  {careers.map((c) => (
                    <span key={c} className="bg-primary/5 text-primary border border-primary/10 text-sm px-4 py-2 rounded-full font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-7 border border-border shadow-lg">
                <h3 className="font-bold text-primary text-lg mb-6 flex items-center gap-2"><Shield className="w-5 h-5 text-secondary" /> Programme Options</h3>
                <div className="space-y-4">
                  {programs.map((prog) => (
                    <div key={prog.title} className="bg-white p-4 rounded-xl border border-border hover:border-secondary transition-colors">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-primary text-sm">{prog.title}</h4>
                        <span className="text-xs bg-primary text-white px-2 py-1 rounded-full shrink-0">{prog.type}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{prog.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-2">Free to Enrol</h4>
                <p className="text-sm text-muted-foreground">Admission is based on passion and commitment. No financial barriers — education is your right.</p>
                <Link href="/contact" className="inline-flex items-center mt-4 text-sm font-bold text-primary hover:text-secondary group">
                  Apply Now <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
