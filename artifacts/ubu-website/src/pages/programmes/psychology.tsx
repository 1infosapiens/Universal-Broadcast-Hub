import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { Brain, CheckCircle2, Briefcase, BookOpen, ArrowRight } from "lucide-react";

const modules = [
  "Introduction to Psychology", "Research Methods & Statistics", "Developmental Psychology",
  "Abnormal Psychology & Psychopathology", "Counselling Theory & Practice", "Organisational Behaviour",
  "Social & Community Psychology", "Cognitive Psychology", "Neuropsychology", "Psychological Assessment",
];

const careers = [
  "Counsellor / Therapist", "HR & Organisational Psychologist", "Community Outreach Officer",
  "Rehabilitation Specialist", "Mental Health Advocate", "Research Analyst", "Life Coach",
];

const programs = [
  { title: "Certificate in Psychology", duration: "6 Months", type: "Certificate" },
  { title: "Diploma in Applied Psychology", duration: "1 Year", type: "Diploma" },
  { title: "BSc in Applied Psychology", duration: "3–4 Years", type: "Degree" },
];

export default function PsychologyProgramme() {
  return (
    <div>
      <Hero
        title="Applied Psychology (BSc)"
        subtitle="Understand the human mind and apply that knowledge to improve lives, organisations, and communities."
        imageSrc={`${import.meta.env.BASE_URL}images/students-gathering.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="heading-sm text-primary mb-4">Programme Overview</h2>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Applied Psychology at UnibUni equips students with a science-based understanding of human thought, emotion, and behaviour — and the practical tools to apply that knowledge in real-world settings. From counselling individuals to improving workplace dynamics, our graduates make a measurable difference in the lives of others.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  The programme combines evidence-based theory with hands-on practice, preparing graduates for careers in mental health, organisational consulting, community development, and research.
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
                <h3 className="font-bold text-primary text-lg mb-6 flex items-center gap-2"><Brain className="w-5 h-5 text-secondary" /> Programme Options</h3>
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
