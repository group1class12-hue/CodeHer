import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";

const myths = [
  {
    myth: "זה קשה מדי ומסובך",
    fact: "לומדים את זה שלב אחרי שלב, כמו כל שפה חדשה.",
  },
  {
    myth: "צריך להיות גאונה במתמטיקה",
    fact: "היגיון בריא ויצירתיות חשובים הרבה יותר ממתמטיקה.",
  },
  {
    myth: "זה משעמם ויושבים כל היום לבד",
    fact: "עובדים בצוותים, מפתחים רעיונות יחד ופותרים בעיות אמיתיות.",
  },
  {
    myth: "זה מתאים יותר לבנים",
    fact: "טכנולוגיה שייכת לכולן! נשים היו המתכנתות הראשונות בהיסטוריה.",
  }
];

export function WhyStem() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-12 md:py-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">למה דווקא STEM?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          STEM (מדעים, טכנולוגיה, הנדסה ומתמטיקה) זה הרבה מעבר למספרים. 
          זה המקום שבו רעיונות הופכים למציאות. בואי ננפץ כמה מיתוסים:
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {myths.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4 text-slate-500">
              <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
              <p className="font-medium line-through decoration-red-200">{item.myth}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <p className="font-semibold text-slate-800">{item.fact}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <Link to="/role-models">
          <Button size="lg" className="gap-2 group">
            הכירי נשים מובילות
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
