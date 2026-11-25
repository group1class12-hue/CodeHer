import { useState } from "react";
import { Button } from "./Button";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const messages = [
  "את לא צריכה ניסיון כדי להתחיל!",
  "הרבה מתחילות בדיוק כמוך.",
  "זה לגמרי בסדר לא לדעת הכל מההתחלה.",
  "הצעד הראשון הוא תמיד הכי קשה, אבל את יכולה!",
  "טעויות הן חלק מהלמידה, אל תפחדי מהן.",
  "יש לך את כל מה שצריך כדי להצליח.",
  "תכנות זה פשוט לפתור חידות, ואת טובה בזה!",
];

export function EncouragementButton() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <Button variant="secondary" size="lg" onClick={handleClick} className="gap-2">
        <Sparkles className="w-5 h-5" />
        זה יכול להתאים גם לי?
      </Button>
      
      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-accent text-accent-dark px-6 py-3 rounded-2xl font-medium text-center max-w-md shadow-sm border border-pink-200"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
