import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { Radio, CheckCircle2, Briefcase, BookOpen, ArrowRight } from "lucide-react";

const modules = [
  "Foundations of Communication", "Broadcast Journalism & Reporting", "Digital & Social Media",
  "Public Relations Strategy", "Marketing Communications", "Media Law & Ethics",
  "Brand Storytelling", "Crisis Communication Management", "Documentary & Investigative Journalism",
  "Audience Research & Analytics",
];

const careers = [
  "Broadcast Journalist", "PR Manager", "Brand Strategist", "Content Creator",
  "Media Producer", "Marketing Manager", "Communications Director", "Social Media Manager",
];

const programs = [
  { title: "Certificate in Communication & Media", duration: "6 Months", type: "Certificate" },
  { title: "Diploma in Journalism & PR", duration: "1 Year", type: "Diploma" },
  { title: "BA in Communication / Journalism / Marketing / PR", duration: "3 Years", type: "Degree" },
];

export default function CommunicationProgramme() {
  return (
    <div>
      <Hero
        title="Communication / Journalism / Marketing / PR (BA)"
        subtitle="Shape narratives, build brands, and tell the stories that move the world."
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
                  This comprehensive programme trains students to become powerful communicators across journalism, public relations, marketing, and digital media. Students learn to research, write, produce, and distribute information with purpose and integrity — gaining hands-on skills across print, broadcast, and online platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  With an emphasis on media ethics, brand communication, and audience engagement, graduates are equipped to lead communications for businesses, governments, NGOs, and media houses around the world.
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
                <h3 className="font-bold text-primary text-lg mb-6 flex items-center gap-2"><Radio className="w-5 h-5 text-secondary" /> Programme Options</h3>
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
