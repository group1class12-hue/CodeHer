import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const roleModels = [
  {
    id: 1,
    name: "קירה רדינסקי",
    title: "מדענית מחשב ויזמית",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kira_Radinsky.jpg/800px-Kira_Radinsky.jpg",
    quote: "המטרה שלי היא להשתמש בטכנולוגיה כדי להציל חיים.",
    story: "אני משתמשת בבינה מלאכותית כדי לחזות התפרצויות של מחלות ברחבי העולם. טכנולוגיה היא כלי אדיר שיכול לפתור את הבעיות הכי גדולות של האנושות. את יכולה להיות חלק מזה."
  },
  {
    id: 2,
    name: "עדה לאבלייס",
    title: "המתכנתת הראשונה בהיסטוריה",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    quote: "המוח שלי הוא לא רק מוח, הוא כלי ליצירה.",
    story: "חייתי במאה ה-19, הרבה לפני שהמציאו את המחשב המודרני, אבל כבר אז הבנתי שמכונות יוכלו לעשות הרבה יותר מסתם חישובים. כתבתי את אלגוריתם המחשב הראשון אי פעם!"
  },
  {
    id: 3,
    name: "גרייס הופר",
    title: "חלוצת מדעי המחשב",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
    quote: "המשפט המסוכן ביותר בשפה הוא 'תמיד עשינו את זה ככה'.",
    story: "המצאתי את המהדר (קומפיילר) הראשון, שמאפשר לכתוב קוד במילים באנגלית במקום במספרים. בזכותי, תכנות הפך לנגיש הרבה יותר. אל תפחדי לשנות את הכללים!"
  }
];

function RoleModelCard({ model }: { model: typeof roleModels[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img 
          src={model.image} 
          alt={model.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{model.name}</h3>
        <p className="text-primary font-medium text-sm mb-4">{model.title}</p>
        
        <div className="bg-accent/50 p-4 rounded-2xl mb-4">
          <p className="text-slate-700 italic font-medium">"{model.quote}"</p>
        </div>

        <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
          <span>קראי עוד</span>
          <ChevronDown className={cn("w-5 h-5 transition-transform", isExpanded && "rotate-180")} />
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-slate-600 leading-relaxed border-t border-slate-100 mt-4">
                {model.story}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function RoleModels() {
  return (
    <div className="flex-1 max-w-6xl mx-auto px-4 py-12 md:py-20 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">נשים שמובילות את התחום</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          הן התחילו בדיוק כמוך, עם הרבה שאלות וקצת חששות. 
          היום הן מפתחות טכנולוגיות שמשנות את העולם.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {roleModels.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <RoleModelCard model={model} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/how-to-start">
          <Button size="lg" className="gap-2 group">
            איך מתחילים?
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
