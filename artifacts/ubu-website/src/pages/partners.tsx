import { Hero } from "@/components/hero";
import { motion } from "framer-motion";

export default function Partners() {
  const categories = [
    {
      title: "Fashion Houses",
      desc: "Our modeling and fashion students gain direct exposure through partnerships with global fashion brands.",
      brands: ["Versace", "H&M", "Gucci", "Vogue"]
    },
    {
      title: "Media Organizations",
      desc: "Journalism and communication students benefit from our strong ties with major broadcasting networks.",
      brands: ["CNN", "BBC", "Al Jazeera", "Reuters"]
    },
    {
      title: "Production Studios",
      desc: "Film and music students secure internships and placements in top-tier production environments.",
      brands: ["Universal Studios", "Sony Music", "Warner Bros", "Netflix"]
    }
  ];

  return (
    <div>
      <Hero 
        title="Industry Partners"
        subtitle="Bridging the gap between academia and the professional world."
        imageSrc={`${import.meta.env.BASE_URL}images/creative-arts.png`}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-primary mb-6">A Global Network</h2>
            <p className="text-lg text-muted-foreground">
              We collaborate with industry leaders to ensure our curriculum remains cutting-edge and our students have direct pathways into their chosen careers.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm"
              >
                <div className="max-w-2xl mb-8">
                  <h3 className="heading-sm text-primary mb-4">{cat.title}</h3>
                  <p className="text-muted-foreground">{cat.desc}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {cat.brands.map(brand => (
                    <div key={brand} className="h-24 bg-primary/5 rounded-lg flex items-center justify-center border border-border/50 hover:bg-primary hover:text-white transition-colors cursor-default">
                      <span className="font-display font-bold text-xl">{brand}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
