import { Hero } from "@/components/hero";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Scale, Brain, BarChart2, Radio, TrendingUp, Music2, Camera, Globe2, Shield, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

const programmes = [
  {
    code: "LLB",
    title: "Law",
    href: "/programmes/law",
    icon: Scale,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700",
    description: "A rigorous, globally relevant legal education covering constitutional law, international law, commercial law, human rights, and entertainment law. Graduates are prepared for practice at the bar, in corporations, and in public service.",
    tracks: ["Constitutional & Administrative Law", "Commercial & Contract Law", "International & Human Rights Law", "Entertainment & Intellectual Property Law"],
  },
  {
    code: "BSc",
    title: "Applied Psychology",
    href: "/programmes/psychology",
    icon: Brain,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-700",
    description: "Study the science of human behaviour and mental processes with practical applications in counselling, organizational psychology, and social development. Gain tools to support mental health, improve performance, and drive social change.",
    tracks: ["Counselling & Therapy", "Organizational Behaviour", "Social & Community Psychology", "Research & Data Analysis"],
  },
  {
    code: "BA",
    title: "Project Management",
    href: "/programmes/project-management",
    icon: BarChart2,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700",
    description: "Develop the strategic, analytical, and leadership skills required to plan, execute, and close projects across industries. Learn internationally recognized frameworks including PMP, PRINCE2, and Agile methodologies.",
    tracks: ["Strategic Planning & Leadership", "Risk & Quality Management", "Agile & Scrum Methodologies", "International Project Delivery"],
  },
  {
    code: "BA",
    title: "Communication / Journalism / Marketing / Public Relations",
    href: "/programmes/communication",
    icon: Radio,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-700",
    description: "Master the art of storytelling, persuasion, and information management across print, digital, and broadcast media. Shape narratives, build brands, and influence public opinion through ethical and powerful communication.",
    tracks: ["Broadcast & Digital Journalism", "Brand & Marketing Strategy", "Public Relations & Crisis Comms", "Media Production & Content"],
  },
  {
    code: "BA",
    title: "Entrepreneurship / International Business",
    href: "/programmes/entrepreneurship",
    icon: TrendingUp,
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-700",
    description: "Build the mindset and toolkit of a global entrepreneur. Learn to identify opportunities, launch ventures, manage international trade, and navigate cross-cultural business environments in a fast-changing world economy.",
    tracks: ["Venture Creation & Start-ups", "International Trade & Finance", "Cross-Cultural Management", "Innovation & Business Strategy"],
  },
  {
    code: "BA",
    title: "Creative Arts: Music, Film & Theatre",
    href: "/schools/creative-arts",
    icon: Music2,
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-700",
    description: "A multi-disciplinary creative degree spanning music performance and production, film-making, and theatre arts. Develop your unique artistic voice while gaining business and industry knowledge to sustain a professional creative career.",
    tracks: ["Music Performance & Production", "Film Direction & Screenwriting", "Theatre Arts & Acting", "Arts Business & Management"],
  },
  {
    code: "BA",
    title: "Fashion & Modeling",
    href: "/departments/modeling",
    icon: Camera,
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-700",
    description: "A comprehensive program blending fashion design, personal branding, runway technique, and business strategy. Graduate as a runway model, brand ambassador, fashion entrepreneur, or media personality with global industry connections.",
    tracks: ["Runway & Editorial Modeling", "Fashion Design & Styling", "Brand & Image Management", "Fashion Business & Marketing"],
  },
  {
    code: "BSc",
    title: "Politics / Executive Leadership / Management",
    href: "/programmes/politics",
    icon: Globe2,
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-700",
    description: "Understand political systems, governance, and the principles of executive leadership that drive organizations and nations. Develop the strategic thinking and ethical leadership skills needed to influence public policy and organizational direction.",
    tracks: ["Political Theory & Governance", "Executive & Organizational Leadership", "Public Policy & Administration", "International Relations"],
  },
  {
    code: "BSc",
    title: "Strategic Studies / Intelligence Studies",
    href: "/programmes/strategic-studies",
    icon: Shield,
    color: "bg-slate-50 border-slate-200",
    iconColor: "text-slate-700",
    description: "Examine national security, geopolitics, intelligence analysis, and conflict resolution. This program equips graduates for careers in government agencies, think tanks, international organizations, and corporate security environments.",
    tracks: ["National Security & Geopolitics", "Intelligence Analysis & Ethics", "Conflict Resolution & Diplomacy", "Corporate & Cyber Security"],
  },
];

const levels = [
  { label: "Certificate Programs", desc: "Short, focused credentials for professional development — ideal for those entering or upskilling in a field." },
  { label: "Diploma Programs", desc: "Structured intermediate programs offering deeper mastery — a stepping stone to a full degree or a standalone qualification." },
  { label: "Bachelor's Degree Programs", desc: "Full undergraduate programs leading to BA, BSc, or LLB qualifications, internationally recognized and career-ready." },
  { label: "Postgraduate Programs", desc: "Advanced study programs to be offered in due course — deepening expertise and opening doors to research and leadership." },
];

export default function Programmes() {
  return (
    <div>
      <Hero
        title="Our Programmes"
        subtitle="World-class education at zero or near-zero cost. Certificate, diploma, and degree programs across nine disciplines."
        imageSrc={`${import.meta.env.BASE_URL}images/campus-hero.png`}
      />

      {/* Intro */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              UnibUni offers certificate, diploma, and degree programs designed to equip students with real-world knowledge and skills. Admission is based on <strong className="text-primary">passion and commitment</strong> — not financial background. In due course, every useful degree from undergraduate to postgraduate will be available.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {levels.map((lvl, idx) => (
                <motion.div
                  key={lvl.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-background rounded-xl border border-border p-5 text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary font-bold text-sm">{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-primary text-sm mb-1">{lvl.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{lvl.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-md text-primary mb-4">Degree Programmes</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {programmes.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
              >
                <Link href={prog.href} className="flex flex-col flex-grow">
                {/* Card Header */}
                <div className={`p-6 border-b ${prog.color} flex items-start gap-4`}>
                  <div className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0`}>
                    <prog.icon className={`w-6 h-6 ${prog.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/50 bg-white/60 px-2 py-0.5 rounded-full">{prog.code}</span>
                    <h3 className="font-display font-bold text-primary text-lg leading-tight mt-1">{prog.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{prog.description}</p>
                  <div className="mt-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-3">Specialisation Tracks</p>
                    <ul className="space-y-2">
                      {prog.tracks.map((track) => (
                        <li key={track} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                          {track}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                      View Full Programme <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="heading-md text-white mb-4">Ready to Begin?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            All programmes are offered at zero or near-zero cost. Admission is open to anyone with the passion and commitment to learn. Your background, your finances, your past — none of it is a barrier here.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-secondary text-primary font-bold rounded-md hover:bg-secondary/90 transition-all hover:shadow-2xl hover:-translate-y-1 group"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
