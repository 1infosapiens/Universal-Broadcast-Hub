import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Faculty() {
  const facultyList = [
    { name: "Dr. Sandra Williams", title: "Dean of Creative Arts", spec: "Arts Administration & Theory" },
    { name: "Prof. James Osei", title: "Head of Music Department", spec: "Music Production & Sound Engineering" },
    { name: "Dr. Amina Bello", title: "Dance Faculty", spec: "Contemporary & African Dance" },
    { name: "Mr. David Chen", title: "Film & Theatre Chair", spec: "Cinematography & Directing" },
    { name: "Ms. Rachel Adams", title: "Modeling Director", spec: "High Fashion & Campaign Management" },
    { name: "Prof. Emmanuel Kwame", title: "Business School Dean", spec: "Entertainment Law & Economics" },
  ];

  return (
    <div>
      <Hero 
        title="Our Distinguished Faculty"
        subtitle="Learn from industry professionals with global exposure."
        imageSrc={`${import.meta.env.BASE_URL}images/students-gathering.png`}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-primary mb-6">Mentorship-Driven Teaching</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members are more than academics; they are active practitioners, award-winning artists, and thought leaders in their respective industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyList.map((faculty, idx) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-white border-border hover:shadow-xl hover:border-secondary/50 transition-all duration-300 text-center overflow-hidden group">
                  <div className="h-32 bg-primary/5 flex items-center justify-center border-b border-border relative">
                     {/* Placeholder for faculty image - using an elegant initial avatar */}
                     <div className="w-24 h-24 bg-primary text-secondary rounded-full flex items-center justify-center font-display text-3xl font-bold absolute -bottom-12 shadow-lg border-4 border-white group-hover:bg-secondary group-hover:text-primary transition-colors">
                        {faculty.name.split(' ').map(n => n[0]).join('').replace('.', '').substring(0,2)}
                     </div>
                  </div>
                  <CardHeader className="pt-16 pb-2">
                    <h3 className="font-display font-bold text-xl text-primary">{faculty.name}</h3>
                    <p className="text-secondary font-bold text-sm uppercase tracking-wider">{faculty.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{faculty.spec}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
