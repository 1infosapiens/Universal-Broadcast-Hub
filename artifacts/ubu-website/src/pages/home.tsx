import { Hero } from "@/components/hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Users, Target, ArrowRight } from "lucide-react";

export default function Home() {
  const schools = [
    {
      title: "School of Creative Arts & Modeling",
      description: "Master performance, design, and expression in our premier creative faculty.",
      link: "/schools/creative-arts"
    },
    {
      title: "Business School",
      description: "Learn to navigate and lead in the global business of creative industries.",
      link: "#"
    },
    {
      title: "Law School",
      description: "Specialized focus on entertainment law, intellectual property, and contracts.",
      link: "#"
    },
    {
      title: "Communication & Journalism",
      description: "Shape the narrative and tell stories that change the world.",
      link: "#"
    }
  ];

  const features = [
    { icon: Globe, title: "Global Curriculum", desc: "Internationally recognized standards preparing you for a worldwide stage." },
    { icon: Users, title: "Industry Faculty", desc: "Learn directly from active professionals and award-winning artists." },
    { icon: Target, title: "Career-Focused", desc: "90% placement rate within 6 months of graduation across all programs." },
    { icon: GraduationCap, title: "Hands-on Exposure", desc: "Access to state-of-the-art studios, theaters, and practical projects." },
  ];

  return (
    <div>
      <Hero 
        title="Where Creativity Meets Excellence"
        subtitle="A world-class institution shaping the next generation of artists, performers, innovators, and creative leaders across the globe."
        imageSrc={`${import.meta.env.BASE_URL}images/campus-hero.png`}
        primaryAction={{ label: "Apply Now", href: "/contact" }}
        secondaryAction={{ label: "Explore Programs", href: "/schools/creative-arts" }}
      />

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-primary mb-6">Redefining Creative Education</h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At UBU, we believe creativity is not limited to a single discipline. Every artistic expression—whether music, modeling, dance, or film—is interconnected.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We nurture multi-talented individuals, globally competitive creatives, and industry-ready professionals equipped to shape the future of entertainment and arts.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group"
              >
                Discover Our Story 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={`${import.meta.env.BASE_URL}images/students-gathering.png`} 
                  alt="Students at UBU" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schools Overview */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-primary mb-4">Our Academic Schools</h2>
            <p className="text-muted-foreground text-lg">Comprehensive faculties designed to provide specialized knowledge and interdisciplinary collaboration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schools.map((school, idx) => (
              <motion.div
                key={school.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:border-secondary/50 transition-all duration-300 group cursor-pointer bg-white">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl group-hover:text-secondary transition-colors">{school.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">{school.description}</CardDescription>
                    <Link href={school.link} className="text-sm font-bold text-primary uppercase tracking-wider group-hover:text-secondary flex items-center">
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4 text-white">Why Choose UBU?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div 
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-secondary backdrop-blur-sm">
                  <feat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{feat.title}</h3>
                <p className="text-white/70 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="heading-md text-primary mb-6">Start your journey today.</h2>
          <p className="text-xl text-primary/80 mb-10 font-medium">Become a world-class creative and shape the future of the industry.</p>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
