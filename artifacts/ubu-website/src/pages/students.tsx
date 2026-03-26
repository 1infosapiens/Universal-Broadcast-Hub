import { Hero } from "@/components/hero";
import { motion } from "framer-motion";

export default function Students() {
  return (
    <div>
      <Hero 
        title="Student Life"
        subtitle="A vibrant community of creators, thinkers, and innovators."
        imageSrc={`${import.meta.env.BASE_URL}images/students-gathering.png`}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-sm text-primary mb-6">Campus Life</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Life at UBU is dynamic and inspiring. From impromptu courtyard performances to late-night studio sessions, our campus is alive with creative energy. Students have access to various clubs, organizations, and events that foster collaboration across all departments.
              </p>
              <ul className="space-y-4 font-medium text-primary">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-full"></span> Annual Arts Festival</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-full"></span> UBU Fashion Week</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-full"></span> Film Screening Nights</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-full"></span> Industry Networking Mixers</li>
              </ul>
            </motion.div>
            <div className="aspect-video bg-primary/10 rounded-2xl overflow-hidden relative">
              <img src={`${import.meta.env.BASE_URL}images/campus-hero.png`} alt="Campus Life" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="heading-sm text-primary mb-4">Alumni Success Stories</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Award-winning Cinematographer", quote: "UBU taught me not just how to hold a camera, but how to see the world differently. The cross-department collaboration was invaluable." },
              { name: "Marcus 'DJ Marc' Thorne", role: "Platinum Music Producer", quote: "The facilities and the faculty mentorship gave me the foundation to navigate the complex music industry with confidence." },
              { name: "Elena Rostova", role: "International Runway Model", quote: "Beyond the runway, UBU taught me the business of fashion. I manage my brand today because of the foundation I built here." }
            ].map((alumni, i) => (
               <motion.div 
                key={alumni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-xl border border-border relative mt-6"
              >
                <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-xl font-bold absolute -top-8 left-8 border-4 border-white shadow-sm">
                  {alumni.name[0]}
                </div>
                <p className="italic text-muted-foreground mb-6 pt-4">"{alumni.quote}"</p>
                <div>
                  <h4 className="font-bold text-primary">{alumni.name}</h4>
                  <p className="text-sm text-secondary font-medium">{alumni.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
