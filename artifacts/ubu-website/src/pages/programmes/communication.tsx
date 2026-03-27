import { Hero } from "@/components/hero";
import { Link } from "wouter";
import { Radio, CheckCircle2, Briefcase, BookOpen, ArrowRight, Quote, Users, Layers, GraduationCap } from "lucide-react";

const coreTheory = [
  "Introduction to Communication Studies",
  "Theories of Communication",
  "Communication Research Methods",
  "Media Ethics",
  "Interpersonal Communication",
  "Intercultural Communication",
  "Conflict Negotiation / Resolution",
  "Public Relations and Advocacy",
  "Digital Media and Strategy",
  "Persuasion and Rhetoric",
  "Marketing and Advertising Communications",
  "Broadcast Journalism",
];

const practicalSkills = [
  "Public Speaking",
  "Professional Writing & Editing",
  "Digital Communication & Social Media",
  "Media Production I (Video / Audio / Multimedia)",
  "Media Studies / Foundations",
  "Ethics in Communication / Media",
];

const advancedCourses = [
  "Communication Planning & Strategy",
  "Risk and Crisis Communication",
  "Gender Communication",
  "Visual Communication / Design",
  "Technical Writing / Professional Communication",
  "Senior Seminar / Capstone Project",
  "Field Experience / Internship",
];

const concentrations = [
  {
    title: "Organizational & Corporate Communication",
    courses: [
      "Organizational Communication Consulting and Training",
      "Crisis Communication and Management",
      "Communication in Group Settings",
      "Intercultural Communication",
    ],
  },
  {
    title: "Media, Marketing & Advertising",
    courses: [
      "Advertising Principles and Techniques",
      "Marketing Strategy and Brand Management",
      "Media Audiences and Users",
      "Public Relations Planning and Campaigns",
    ],
  },
  {
    title: "Journalism & Digital Media",
    courses: [
      "Digital Journalism and Reporting",
      "Photojournalism and Media Production",
      "News Writing and Reporting",
      "Digital Social Research",
    ],
  },
  {
    title: "Media Arts & Culture",
    courses: [
      "Cinema, Nation and Identity",
      "Visual Communication and Culture",
      "Popular Culture and Communication",
      "Gender, Race, and Media",
    ],
  },
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

            <div className="lg:col-span-2 space-y-14">

              {/* Overview */}
              <div>
                <h2 className="heading-sm text-primary mb-4">Programme Overview</h2>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The BA in Communication Studies prepares students for long and satisfying careers in a variety of fields including public and media relations, business communication, social media strategy, project management, fundraising, and event management. The programme encourages students to develop and refine durable, transferable skills prized by a wide range of employers.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  The programme features courses in strategic communication, project management, writing, research, public speaking, and numeracy — covering print, broadcast, television, radio, and online platforms. With an emphasis on media ethics, brand communication, and audience engagement, graduates are equipped to lead communications for businesses, governments, NGOs, and media houses around the world.
                </p>
              </div>

              {/* School Philosophy */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-primary/80 leading-relaxed text-base italic mb-4">
                  "Everything that human beings do is communication. Indeed, meaningful communication is the only thing that makes community, cooperation, businesses, and nation-states possible. Whether we are trying to sell an idea or a product, or whether we are seeking to persuade someone to act or refrain from acting, we are engaged in communication. Even silence is communication."
                </p>
                <p className="text-sm font-bold text-primary">The UnibUni Communication & Journalism School</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Our methods of instruction are guided by the panoramic lens that sees the human being as an emotional and logical creature driven by complicated needs and goals. Whether teaching advertising, public relations, or journalism, we first teach students to understand the human being in the context of economics, laws, politics, and the competition for power, money, and pleasure.
                </p>
              </div>

              {/* Core Theory Modules */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-secondary" /> Core Theory & Foundational Courses
                </h3>
                <p className="text-sm text-muted-foreground mb-5">Covering communication principles, media, interpersonal and organisational contexts</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {coreTheory.map((m) => (
                    <div key={m} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Skills */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" /> Practical & Skills Courses
                </h3>
                <p className="text-sm text-muted-foreground mb-5">Hands-on training in production, writing, speaking, and digital platforms</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {practicalSkills.map((m) => (
                    <div key={m} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialisation Concentrations */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-secondary" /> Specialisation Concentrations
                </h3>
                <p className="text-sm text-muted-foreground mb-6">Choose a focus area to tailor your degree toward a specific career path</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {concentrations.map((conc) => (
                    <div key={conc.title} className="bg-background border border-border rounded-xl p-5">
                      <h4 className="font-bold text-primary mb-3 text-sm">{conc.title}</h4>
                      <ul className="space-y-2">
                        {conc.courses.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Courses */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-secondary" /> Advanced & Senior-Level Courses
                </h3>
                <p className="text-sm text-muted-foreground mb-5">Capstone projects, internships, and advanced specialisations</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {advancedCourses.map((m) => (
                    <div key={m} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
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

            {/* Sidebar */}
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

              <div className="bg-background rounded-2xl p-6 border border-border">
                <h4 className="font-bold text-primary mb-3 text-sm">Concentration Tracks</h4>
                <ul className="space-y-2">
                  {concentrations.map((c) => (
                    <li key={c.title} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" /> {c.title}
                    </li>
                  ))}
                </ul>
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
