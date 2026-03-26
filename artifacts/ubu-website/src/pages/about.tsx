import { Hero } from "@/components/hero";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Students", value: "2,500+" },
    { label: "Faculty Experts", value: "150+" },
    { label: "Degree Programs", value: "40+" },
    { label: "Placement Rate", value: "90%" },
  ];

  const values = [
    { title: "Excellence", desc: "Striving for the highest quality in artistic and academic pursuits." },
    { title: "Innovation", desc: "Pushing boundaries and redefining traditional creative formats." },
    { title: "Creativity", desc: "Fostering original thought and unique expressive voices." },
    { title: "Integrity", desc: "Upholding ethical standards in business and personal conduct." },
    { title: "Global Perspective", desc: "Embracing diverse cultures and international opportunities." },
  ];

  return (
    <div>
      <Hero 
        title="Our Story"
        subtitle="Building globally relevant creative leaders who transcend boundaries."
        imageSrc={`${import.meta.env.BASE_URL}images/students-gathering.png`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-12 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20"></div>
              <h3 className="font-display text-3xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-white/90">
                "To build globally relevant creative leaders who transcend boundaries and redefine excellence."
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
                "To integrate creativity, business, and innovation in producing industry-ready graduates who lead, inspire, and transform the world."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="heading-md text-primary mb-8">A Legacy of Excellence</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground text-left">
            <p>
              Founded to bridge the gap between raw creative talent and professional excellence, Universal Broadcasting University (UBU) has rapidly grown into a premier institution recognized globally for its interdisciplinary approach.
            </p>
            <p>
              We understood early on that modern creators cannot exist in silos. The musician needs the filmmaker; the model needs the business strategist; the dancer needs the choreographer and the brand manager. UBU was built as a holistic ecosystem where these disciplines collide and collaborate.
            </p>
            <p>
              Today, from our campus in New York to our global partnerships, we remain committed to nurturing not just artists, but architects of the future creative economy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md text-center text-primary mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/5 text-primary rounded-full flex items-center justify-center font-bold text-xl mb-4 border border-primary/10">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">{val.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
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
