import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { TrendingUp, CheckCircle2, Briefcase, BookOpen, ArrowRight, Quote } from "lucide-react";

const modules = [
  "Advertising / Marketing / Branding",
  "Research & Competitive Intelligence",
  "Retailing, Wholesaling & Middlemen",
  "Business Chains & Distribution Structures",
  "Creative Thinking & Strategies",
  "Credit, Finance, Supplies & Investors",
  "Business Planning & Financial Management",
  "Competitive Advantage & Niche Trading",
  "International Business & Partnerships",
  "Technology Options & Management",
  "Product Design, Development and Production",
  "Customer Satisfaction & Loyalty",
  "Business Growth & Sustainability",
  "Strategic Business Planning",
  "Business Risks Management",
  "Project Management & Efficiency",
  "Culture & Organizational Behaviour",
  "Human Resource Management",
  "Business Administration & Niche Dominance",
  "Business Thinking & International Trade",
  "Information Systems & Technology Creation & Management",
  "Market Structures & Access",
  "Commercial Law & Regulatory Compliance",
  "Third Party Networks & Relationships",
];

const careers = [
  "Entrepreneur / Founder",
  "International Business Manager",
  "Business Development Officer",
  "Trade Analyst",
  "Start-up Consultant",
  "Investment Analyst",
  "Export / Import Manager",
  "Marketing Director",
  "Operations Manager",
  "Business Strategist",
];

const programs = [
  { title: "International Professional Certificate in Entrepreneurship", duration: "6 Months", type: "Certificate" },
  { title: "International Professional Diploma in International Business", duration: "1 Year", type: "Diploma" },
  { title: "BA in Entrepreneurship / International Business", duration: "3 Years", type: "Degree" },
];

export default function EntrepreneurshipProgramme() {
  return (
    <div>
      <Hero
        title="Entrepreneurship / International Business (BA)"
        subtitle="Launch ventures, cross borders, and build businesses that matter in the global economy."
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
                  This programme builds bold, globally minded business creators and leaders. Students develop the entrepreneurial mindset alongside the technical skills of international business — from launching startups to navigating cross-border trade, foreign markets, and global supply chains.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  Whether the goal is to build a local business with global reach or manage international operations for a multinational, this programme provides the commercial intelligence and cultural fluency to succeed.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-primary/80 leading-relaxed text-base italic mb-4">
                  "Our business school is organised and focused on systematic and sustainable ways of money-making. In order to ensure that students do not fall victims to fashionable but unsustainable concepts driven by wishes rather than reality, we have modelled our business school after nature. At UnibUni, we point students in the direction of the natural order and enable them to learn from the state of things."
                </p>
                <p className="text-sm font-bold text-primary">The UnibUni Business School Philosophy</p>
                <p className="text-xs text-muted-foreground mt-1">
                  In nature, things that work are organic. They connect in an orderly and supportive manner. Functional identities and supportive relationships linked together by the rules of survival, continuity, and strength dominate nature's ecosystems. From nature, we extract and apply universal ecosystem rules to business — ensuring our students understand the basics, the fundamentals, the exceptions, and all that they need to establish or be important players in successful businesses. The UnibUni Business School is more than a school. It is business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-secondary" /> Course Curriculum
                </h3>
                <p className="text-sm text-muted-foreground mb-5">24 subject areas covered across the full programme</p>
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
                  <TrendingUp className="w-5 h-5 text-secondary" /> Programme Options
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
