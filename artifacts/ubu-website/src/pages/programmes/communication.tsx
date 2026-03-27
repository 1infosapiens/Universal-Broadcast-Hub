import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { Radio, CheckCircle2, Briefcase, BookOpen, ArrowRight, Quote } from "lucide-react";

const modules = [
  "Elements & Principles of Communication",
  "Professional Journalism",
  "Professional Drafting & Writing",
  "Public Speaking & Presentations",
  "Branding / Marketing / Advertising",
  "Media Languages and Cultures",
  "Community Journalism",
  "Broadcast Journalism",
  "Corporate Communication / Public Relations",
  "Feature Writing",
  "News Writing and Reporting",
  "Literary Journalism",
  "Professional Research & Reporting",
  "Introduction to Multimedia & Online Journalism",
  "Media Review & Criticisms",
  "Media Law, Defamation & Privacy",
  "Magazine and Feature Writing",
  "Public Opinion and Editorial Analysis",
  "Entrepreneurial Journalism Practicum",
  "Freelance Sport Writing",
  "Science, Health and Environmental Reporting",
  "Social Media Management",
  "Television Reporting & Broadcasting",
  "Documentaries, Videos and Films",
  "Sports Journalism",
  "Print Journalism",
  "Photojournalism",
  "Radio Journalism",
  "Technical / Print Writing",
  "Professional Blogging",
];

const careers = [
  "Broadcast Journalist",
  "PR Manager",
  "Brand Strategist",
  "Content Creator / Blogger",
  "Media Producer",
  "Marketing Manager",
  "Communications Director",
  "Social Media Manager",
  "TV / Radio Presenter",
  "Photojournalist",
  "Sports Journalist",
  "Documentary Filmmaker",
];

const programs = [
  { title: "International Professional Certificate in Communication & Media", duration: "6 Months", type: "Certificate" },
  { title: "International Professional Diploma in Journalism & PR", duration: "1 Year", type: "Diploma" },
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

            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="heading-sm text-primary mb-4">Programme Overview</h2>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  This comprehensive programme trains students to become powerful communicators across journalism, public relations, marketing, and digital media. Students learn to research, write, produce, and distribute information with purpose and integrity — gaining hands-on skills across print, broadcast, television, radio, and online platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  With an emphasis on media ethics, brand communication, and audience engagement, graduates are equipped to lead communications for businesses, governments, NGOs, and media houses around the world.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-primary/80 leading-relaxed text-base italic mb-4">
                  "Everything that human beings do is communication. Indeed, meaningful communication is the only thing that makes community, cooperation, businesses, and nation-states possible. Whether we are trying to sell an idea or a product, or whether we are seeking to persuade someone to act or refrain from acting, we are engaged in communication. Even silence is communication."
                </p>
                <p className="text-sm font-bold text-primary">The UnibUni Communication & Journalism School</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Our methods of instruction are guided by the panoramic lens that sees the human being as an emotional and logical creature driven by a set of complicated needs and goals. Whether teaching advertising, public relations, or journalism, we first teach students to understand the human being in the context of economics, laws, politics, and the competition for power, money, and pleasure. The use of advanced technologies makes masters of communication — not servants of machines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-secondary" /> Course Curriculum
                </h3>
                <p className="text-sm text-muted-foreground mb-5">30 subject areas covered across the full programme</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {modules.map((m) => (
                    <div key={m} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {m}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-secondary" /> Career Paths
                </h3>
                <div className="flex flex-wrap gap-3">
                  {careers.map((c) => (
                    <span key={c} className="bg-primary/5 text-primary border border-primary/10 text-sm px-4 py-2 rounded-full font-medium">{c}</span>
                  ))}
                </div>
              </div>

            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-7 border border-border shadow-lg">
                <h3 className="font-bold text-primary text-lg mb-6 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-secondary" /> Programme Options
                </h3>
                <div className="space-y-4">
                  {programs.map((prog) => (
                    <div key={prog.title} className="bg-white p-4 rounded-xl border border-border hover:border-secondary transition-colors">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h4 className="font-bold text-primary text-sm leading-snug">{prog.title}</h4>
                        <span className="text-xs bg-primary text-white px-2 py-1 rounded-full shrink-0">{prog.type}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{prog.duration}</p>
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
