import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  overlayOpacity?: number;
}

export function Hero({ 
  title, 
  subtitle, 
  imageSrc, 
  primaryAction, 
  secondaryAction,
  overlayOpacity = 0.6 
}: HeroProps) {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark wash for text readability */}
        <div 
          className="absolute inset-0 bg-primary" 
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl text-center mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-display leading-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-white/90 font-sans text-balance leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryAction || secondaryAction) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-primary bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 text-center uppercase tracking-wide text-sm"
                >
                  {primaryAction.label}
                </a>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center uppercase tracking-wide text-sm"
                >
                  {secondaryAction.label}
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
