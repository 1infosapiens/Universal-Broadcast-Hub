import { Hero } from "@/components/hero";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Lightbulb, Heart, Shield } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Students Worldwide", value: "10,000+" },
    { label: "Faculty Experts", value: "150+" },
    { label: "Degree Programs", value: "40+" },
    { label: "Countries Reached", value: "60+" },
  ];

  const values = [
    { icon: BookOpen, title: "Free Education", desc: "Removing money as a barrier so that every person, regardless of economic background, can access world-class learning." },
    { icon: Globe, title: "Global Reach", desc: "Delivered via online platforms, radio, and television — reaching students in the most remote corners of the world." },
    { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries and redefining what a university can be in the modern, connected world." },
    { icon: Users, title: "Inclusivity", desc: "Admission based on passion and commitment, not past scores or financial circumstance." },
    { icon: Heart, title: "Passion-Driven", desc: "We believe when money is no longer a barrier, passion will set people apart and drive excellence." },
    { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in education, in business, and in personal conduct." },
  ];

  const programs = [
    { code: "LLB", title: "Law", level: "Degree" },
    { code: "BSc", title: "Applied Psychology", level: "Degree" },
    { code: "BA", title: "Project Management", level: "Degree" },
    { code: "BA", title: "Communication / Journalism / Marketing / Public Relations", level: "Degree" },
    { code: "BA", title: "Entrepreneurship / International Business", level: "Degree" },
    { code: "BA", title: "Creative Arts: Music, Film & Theatre", level: "Degree" },
    { code: "BA", title: "Fashion & Modeling", level: "Degree" },
    { code: "BSc", title: "Politics / Executive Leadership / Management", level: "Degree" },
    { code: "BSc", title: "Strategic Studies / Intelligence Studies", level: "Degree" },
  ];

  return (
    <div>
      <Hero
        title="University of the World"
        subtitle="Where knowledge is a right, not a privilege — building globally relevant creative leaders who transcend boundaries."
        imageSrc={`${import.meta.env.BASE_URL}images/students-gathering.png`}
      />

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-12 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20"></div>
              <h3 className="font-display text-3xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-white/90">
                To be the world's largest university and the world's biggest and most preferred university platform and community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary p-12 rounded-2xl text-primary relative overflow-hidden"
            >
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-20"></div>
              <h3 className="font-display text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed font-medium">
                To provide first-class, free university education to the largest number of people using affordable and reliable technologies and the cooperation of the greatest number of scholars.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome / Introduction */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-primary text-center mb-4">Welcome to the University of the World</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Education is the fundamental tool of the person to change his destiny. It is the power of man over nature and the means to innovation. It is education that has provided humanity with the knowledge and the imagination to build towns, machines, and nations. Access to the right education provides us with opportunities for knowing truths and for discoveries. The fact simply is that knowledge is light — and access to that light is the first step towards self-change.
              </p>
              <p>
                Despite the importance of education, all over the world this right remains but a mere illusion for hundreds of millions of persons. The reason is simply poverty. Most people have been denied access to university education because they cannot afford it. Countless people do not have enough money to pay for useful programs at good universities. Ironically, the world is increasingly becoming too complicated for the uneducated. A university education is, more or less, the basic requirement for a decent life in today's world.
              </p>
              <p>
                Universal Broadcasting University (UnibUni) is quality education at zero or near-zero cost. It provides high-standard education to all by making money irrelevant to the process. UnibUni makes education universally accessible by removing money as a condition for admission or enrollment. Apart from a small registration fee, no payment whatsoever is charged to the student for enrolling in UnibUni certificate, diploma, or degree programs. Free or near-free education is thus the hallmark of UnibUni.
              </p>
              <p>
                The remarkable thing about UnibUni is that it is education that connects the most brilliant professionals and scientists to all manner of students around the world — including the poorest. Outside of UnibUni, only the very rich can afford to pay for access to the brightest professors by attending very expensive schools. UnibUni, however, creates access to the brightest professors by use of its online, radio, and television programs. With UnibUni, all that the student has to do is tune in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Office of the President</p>
              <h2 className="heading-md text-white">A Message from the President</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mt-6"></div>
            </div>
            <div className="text-white/85 text-lg leading-relaxed space-y-6">
              <p>
                Undoubtedly, we would all agree that access to the highest levels of education contributes immensely to competence, excellence, and success of the human being. We know that the greater the education, the greater the chances of a better life. It is truly a great disadvantage to be denied the very best of education because of poverty or some other social disadvantage.
              </p>
              <p>
                That is why at UnibUni, we support the right of every human being to have access to the highest levels of education. That right should not be for the rich alone. It should be for every man, woman, and child regardless of their financial situations. We are committed to that cause and we believe in it passionately.
              </p>
              <p>
                Furthermore, UnibUni does not measure the capacity of the person to learn merely by his or her past performances. Rather, in a truly scientific manner, we measure performance by performance at the university. There are many reasons someone may have performed poorly on examinations in the past — extreme poverty, illness, unbearable social disadvantages and so on are all contributing factors. Therefore, having removed money as a barrier to excellent education, we believe that the fairest measure is not the accumulation of past scores but the demonstration of passion, commitment, and growth.
              </p>
              <p className="text-secondary font-semibold italic">
                — The Office of the President, Universal Broadcasting University
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Passion & Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-sm text-primary mb-4">Passion & Commitment as Admission Criteria</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="text-muted-foreground leading-relaxed space-y-5 text-base">
                <p>
                  At UnibUni, our view is that when money is no longer a barrier to education, passion will set people apart and enable each and every person to have the opportunity for excellence in his or her chosen career.
                </p>
                <p>
                  Passion is tested through access, through opportunities, and through practical education that removes all excuses for incompetence. Thus, the primary criteria for admission into UnibUni is commitment — demonstrated through words and action over the period of study and beyond.
                </p>
                <p>
                  Furthermore, UnibUni is focused more on access rather than barriers to education. The criteria for admission into our programs are flexible. We do not all start at the same places and we do not all have the same opportunities. Scores may reflect talent, but they may also reflect opportunity or misfortune. Thus, UnibUni is interested more in measuring performance at the university, rather than at the pre-university level, where poverty and financial stress may have been the major contributing factors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-sm text-primary mb-4">The First of Its Kind</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="text-muted-foreground leading-relaxed space-y-5 text-base">
                <p>
                  There is no university like UnibUni in the world. For that reason, the university stands with the unique opportunity of becoming the first World University with a countless number of students and teachers — a truly global community of learners united by passion and purpose.
                </p>
                <p>
                  UnibUni programs allow for the enlightenment of the greatest number of persons in the world using logical but simple systems and programs. We would run diploma and certificate programs for those who prefer shorter courses for their own purposes.
                </p>
                <p>
                  In due course, UnibUni would run every useful degree program from undergraduate to postgraduate under the sun, removing all geographic, financial, and social obstacles that have for too long stood between people and their potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md text-center text-primary mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-md hover:border-secondary/40 transition-all"
              >
                <div className="w-14 h-14 bg-primary/5 text-secondary rounded-full flex items-center justify-center mb-5 border border-primary/10">
                  <val.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">{val.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-md text-primary mb-4">Academic Programs</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              UnibUni offers certificate, diploma, and degree programs across disciplines. In due course, every useful degree program from undergraduate to postgraduate will be available.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 bg-background border border-border rounded-xl px-6 py-4 hover:border-secondary/50 hover:shadow-sm transition-all"
              >
                <span className="bg-primary text-secondary font-bold text-xs px-3 py-1.5 rounded-full shrink-0 font-mono">{prog.code}</span>
                <span className="text-primary font-medium">{prog.title}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Certificate and diploma programs also available in all fields.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center px-4"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
