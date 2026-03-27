import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function CreativeArtsSchool() {
  const departments = [
    { title: "Modeling Department", path: "/departments/modeling", desc: "Fashion, commercial, runway, and international brand representation." },
    { title: "Music Department", path: "/departments/music", desc: "Composition, production, performance, and music business." },
    { title: "Dance Department", path: "/departments/dance", desc: "African, contemporary, global choreography and dance management." },
    { title: "Film & Theatre", path: "/departments/film-theatre", desc: "Acting, directing, scriptwriting, and cinematic storytelling." },
  ];

  return (
    <div>
      <Hero
        title="School of Creative Arts & Modeling"
        subtitle="A hub of innovation, expression, and professional excellence — where every art form connects."
        imageSrc={`${import.meta.env.BASE_URL}images/creative-arts.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-primary mb-6 text-center">Where Art Meets Industry</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              The School of Creative Arts & Modeling at UnibUni is designed for those who want to turn their passion into a sustainable, global career. We blur the lines between disciplines to create well-rounded, world-class artists.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 mb-20 max-w-4xl mx-auto">
            <Quote className="w-8 h-8 text-secondary mb-4" />
            <p className="text-primary/80 leading-relaxed text-lg italic mb-6">
              "To those used to thinking of the creative arts in departmental terms, there is not much connection between modeling and poetry or between music and journalism. At UnibUni, however, we see the connections between all creative arts. Music is connected to film, and film is connected to dance, as modeling is connected to broadcasting. The common element to all of them is beauty, order, craftiness, and creative pleasure."
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Anyone who has demonstrated a skill in any of the creative arts can be taught to acquire skills in the rest. At UnibUni, whilst we support every student to excel in a particular field of creative mastery, we enable every student to be multi-talented — for life is never about distinct and unrelated performances. Every thing that works well and works great is a symphony. Those who graduate from the Creative Arts School at UnibUni are world-class artists, able to appreciate and belong to the coherent eco-systems of beauty and pleasure, wherever they may be and in whatever theatre they find themselves.
            </p>
            <p className="text-sm font-bold text-primary mt-4">At UnibUni, we are the artists.</p>
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
