import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Palette, Layers, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function CreativeArtsSchool() {
  const departments = [
    { title: "Modeling Department", path: "/departments/modeling", desc: "Fashion, commercial, and runway excellence." },
    { title: "Music Department", path: "/departments/music", desc: "Production, performance, and music business." },
    { title: "Dance Department", path: "/departments/dance", desc: "Contemporary, classical, and cultural choreography." },
    { title: "Film & Theatre", path: "/departments/film-theatre", desc: "Acting, directing, and cinematic storytelling." },
  ];

  return (
    <div>
      <Hero 
        title="School of Creative Arts & Modeling"
        subtitle="A hub of innovation, expression, and professional excellence."
        imageSrc={`${import.meta.env.BASE_URL}images/creative-arts.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-primary mb-6">Where Art Meets Industry</h2>
            <p className="text-lg text-muted-foreground">
              The School of Creative Arts & Modeling at UBU is designed for those who want to turn their passion into a sustainable, global career. We blur the lines between disciplines to create well-rounded artists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Palette, title: "Master One Discipline", desc: "Deep dive into your chosen craft with intensive, focused training." },
              { icon: Layers, title: "Understand Multiple", desc: "Gain exposure to adjacent fields to expand your creative vocabulary." },
              { icon: Lightbulb, title: "Collaborate Across", desc: "Work on joint projects mirroring real-world industry productions." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-xl border border-border text-center"
              >
                <item.icon className="w-12 h-12 text-secondary mx-auto mb-6" />
                <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="heading-sm text-center text-primary mb-12">Explore Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={dept.path}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="font-display text-xl text-primary group-hover:text-secondary transition-colors">
                        {dept.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{dept.desc}</p>
                      <span className="text-sm font-bold text-primary flex items-center group-hover:text-secondary">
                        View Programs <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
