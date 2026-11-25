import { Button } from "@/components/Button";
import { EncouragementButton } from "@/components/EncouragementButton";
import { Code, PlayCircle, Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: <PlayCircle className="w-8 h-8 text-secondary" />,
    title: "צפי בסרטון היכרות",
    description: "סרטון קצר וכיפי שמסביר מה זה בכלל תכנות.",
    link: "https://www.youtube.com/watch?v=nKIu9yen5nc", // Code.org video
    linkText: "צפי עכשיו ביוטיוב"
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "התנסי במשחק קוד",
    description: "שחקי וכתבי את שורות הקוד הראשונות שלך (בלי שום ניסיון קודם!).",
    link: "https://studio.code.org/hoc/1", // Hour of code
    linkText: "שחקי עכשיו בחינם"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
    title: "הצטרפי לקהילה",
    description: "הכירי עוד בנות שמתעניינות בתחום, שאלי שאלות וקבלי השראה.",
    link: "https://www.queenb.org.il/", // QueenB Israel
    linkText: "הכירי את QueenB"
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "קורס למתחילות",
    description: "מוכנה לצעד הבא? קורס חינמי ובסיסי שילמד אותך לבנות אתר משלך.",
    link: "https://he.khanacademy.org/computing/computer-programming", // Khan Academy Hebrew
    linkText: "התחילי ללמוד"
  }
];

export function HowToStart() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-12 md:py-20 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">איך מתחילים?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          הדרך הכי טובה לדעת אם זה בשבילך, היא פשוט לנסות. 
          הנה כמה צעדים קטנים ופשוטים שאת יכולה לעשות ממש עכשיו:
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow"
          >
            <div className="bg-slate-50 p-4 rounded-2xl shrink-0">
              {step.icon}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a href={step.link} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button variant="outline" className="w-full">
                  {step.linkText}
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-16">
        <EncouragementButton />
      </div>
    </div>
  );
}
