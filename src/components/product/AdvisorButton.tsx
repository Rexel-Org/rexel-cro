import { Bot } from "lucide-react";

const AdvisorButton = () => (
  <button
    type="button"
    className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-rexel-blue bg-white pl-5 pr-2 py-2 shadow-lg transition-transform hover:scale-[1.02]"
    aria-label="Besoin d'un conseil"
  >
    <span className="font-display text-sm font-semibold text-rexel-blue">Besoin d'un conseil ?</span>
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rexel-blue text-white">
      <Bot className="h-6 w-6" />
    </span>
  </button>
);

export default AdvisorButton;
