import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-24 bg-gradient-to-b from-white to-accent/30">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            העתיד שייך גם לך
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            חשבת פעם שאת יכולה <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
              להמציא את האפליקציה הבאה?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          עולם ההייטק והטכנולוגיה (STEM) לא נועד רק ל"גאוני מחשבים". 
          הוא נועד למי שאוהבת לפתור בעיות, ליצור דברים חדשים, ולשנות את העולם.
          בואי לגלות איך גם את יכולה להשתלב.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8"
        >
          <Link to="/why-stem">
            <Button size="lg" className="gap-2 group">
              גלי עוד
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative max-w-lg mx-auto"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
              alt="Girls collaborating on a laptop" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
}
