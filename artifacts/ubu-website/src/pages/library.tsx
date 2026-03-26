import { Hero } from "@/components/hero";
import { BookOpen, Monitor, Library as LibraryIcon, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Library() {
  const services = [
    { icon: BookOpen, title: "Physical Archives", desc: "Thousands of books covering arts, business, history, and scripts." },
    { icon: Monitor, title: "Digital Journals", desc: "Access to premium academic and industry-specific databases." },
    { icon: LibraryIcon, title: "Media Labs", desc: "Equipped with software for research, editing, and creative writing." },
    { icon: Search, title: "Research Support", desc: "Dedicated librarians to assist with academic and creative research." },
  ];

  return (
    <div>
      <Hero 
        title="University Library"
        subtitle="The heart of research and creative archives."
        imageSrc={`${import.meta.env.BASE_URL}images/library-interior.png`}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-sm text-primary mb-6">A Modern Academic Hub</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The UBU Library is designed to support the unique needs of creative students. Beyond traditional books, we house extensive collections of sheet music, film scripts, fashion archives, and digital media.
              </p>
              <div className="bg-primary text-white p-8 rounded-xl shadow-xl">
                <h3 className="font-bold text-xl mb-4 text-secondary">Library Hours</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday - Friday</span> <span>8:00 AM - 10:00 PM</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span>9:00 AM - 8:00 PM</span></li>
                  <li className="flex justify-between pt-2"><span>Sunday</span> <span>12:00 PM - 8:00 PM</span></li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((svc, idx) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background p-6 rounded-xl border border-border hover:border-secondary transition-colors"
                >
                  <svc.icon className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-bold text-primary mb-2">{svc.title}</h4>
                  <p className="text-sm text-muted-foreground">{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
