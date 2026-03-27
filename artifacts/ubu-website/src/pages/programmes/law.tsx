import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { Scale, CheckCircle2, Briefcase, BookOpen, ArrowRight, Quote } from "lucide-react";

const modules = [
  "Legal Method & Ethics",
  "Legal Research & Legal Drafting",
  "Academic & Professional Skills",
  "Administrative & Public Law",
  "Law of Contract",
  "Law of Torts",
  "Media & Entertainment Law",
  "Criminal Law",
  "Law of Organizations",
  "Land Law & Conveyancing",
  "Actions & Applications",
  "Equity & Trusts",
  "Business Transactions & International Business",
  "Wills & Succession",
  "Companies: Governance, Tax and Insolvency",
  "Legal Methods & Civil Procedure",
  "Law and Society",
  "Commercial Law",
  "Law of Evidence",
  "Competition Law",
  "Labour Law",
  "Housing Law",
  "Human Rights Law",
  "Internet Law",
  "Law, Film and Popular Culture",
  "Legal Theory",
  "Planning Law",
  "Public International Law",
  "Constitutional Law",
  "Trusts Law",
];

const careers = [
  "Barrister / Advocate",
  "Corporate Lawyer",
  "Entertainment & IP Lawyer",
  "Public Prosecutor",
  "Legal Consultant",
  "Policy Analyst",
  "Magistrate / Judge (with experience)",
  "Commercial Solicitor",
  "Human Rights Lawyer",
  "In-House Counsel",
];

const programs = [
  { title: "International Professional Certificate in Legal Studies", duration: "6 Months", type: "Certificate" },
  { title: "International Professional Diploma in Law", duration: "1 Year", type: "Diploma" },
  { title: "LLB (Bachelor of Laws)", duration: "4 Years", type: "Degree" },
];

export default function LawProgramme() {
  return (
    <div>
      <Hero
        title="Law (LLB)"
        subtitle="A rigorous, globally relevant legal education preparing advocates, counsellors, and leaders in justice."
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
                  The Law programme at UnibUni provides a comprehensive legal education rooted in justice, ethics, and global awareness. Students gain deep knowledge of domestic and international law, with specialised exposure to entertainment, intellectual property, commercial law, and the full spectrum of legal practice — preparing them for wide-ranging careers in both the public and private sectors.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  Our curriculum combines theoretical rigour with practical skills — from moot court competitions to legal drafting — so graduates are not only knowledgeable but confident advocates from day one.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-primary/80 leading-relaxed text-base italic mb-4">
                  "All law schools are created equal, but some are more learned than others. Appreciating that law is a culture founded on historical, logical, and philosophical narratives, UnibUni Law School teaches more than rules, procedures, precedents, and statutes. At UnibUni, there is an emphasis on the human business of law — how law expresses the wishes, the powers, and the relationships of dominant players in the race towards individual and social welfare."
                </p>
                <p className="text-sm font-bold text-primary">The UnibUni Law School Philosophy</p>
                <p className="text-xs text-muted-foreground mt-1">
                  The easiest part of lawyering is knowing where to find applicable laws and to draft a good case. The most difficult part is understanding the emotions, powers, and logic that move judges and the entire legal fraternity. At UnibUni, we demystify legal culture and help the student move towards the centre of juris-nations. A law degree from UnibUni is more than a degree for practice — it is the key to legal practice.
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
                  <Scale className="w-5 h-5 text-secondary" /> Programme Options
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
