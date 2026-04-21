import { Home, ChevronRight } from "lucide-react";

const items = [
  "Appareillage et contrôle du bâtiment",
  "Automatisme du bâtiment",
  "Coffret de communication VDI résidentiel",
  "LB502",
];

const Breadcrumb = () => (
  <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1 py-4 text-sm">
    <a href="#" className="flex h-6 w-6 items-center justify-center text-rexel-link hover:text-rexel-blue">
      <Home className="h-4 w-4" />
    </a>
    {items.map((label, i) => (
      <div key={label} className="flex items-center gap-1">
        <ChevronRight className="h-3.5 w-3.5 text-rexel-text-muted" />
        {i === items.length - 1 ? (
          <span className="font-semibold text-rexel-link">{label}</span>
        ) : (
          <a href="#" className="font-semibold text-rexel-link hover:underline">
            {label}
          </a>
        )}
      </div>
    ))}
  </nav>
);

export default Breadcrumb;
