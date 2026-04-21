import { Search, Settings2, Briefcase, Wrench, User, ShoppingCart } from "lucide-react";
import RexelLogo from "./RexelLogo";
import DiteLogo from "./DiteLogo";

const HeaderIcon = ({
  icon: Icon,
  label,
  badge,
  badgeColor = "bg-rexel-blue",
}: {
  icon: typeof Search;
  label: string;
  badge?: string;
  badgeColor?: string;
}) => (
  <button
    type="button"
    className="relative flex min-w-[64px] flex-col items-center gap-1 px-2 text-rexel-blue transition-colors hover:text-rexel-link"
  >
    <div className="relative">
      <Icon className="h-6 w-6" strokeWidth={1.75} />
      {badge && (
        <span
          className={`absolute -right-2 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full ${badgeColor} px-1 text-[10px] font-bold leading-none text-white`}
        >
          {badge}
        </span>
      )}
    </div>
    <span className="text-[11px] font-semibold leading-tight">{label}</span>
  </button>
);

const Header = () => (
  <header className="border-b border-rexel-divider bg-white">
    {/* Top row: logos + search + utility icons */}
    <div className="flex items-center gap-4 px-4 py-3 lg:px-6">
      <div className="flex shrink-0 items-center gap-2">
        <RexelLogo />
        <DiteLogo />
      </div>

      <div className="flex flex-1 items-center gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-rexel-blue" />
          <input
            type="search"
            placeholder="Recherchez un produit, une référence, un numéro EAN ..."
            className="h-11 w-full rounded-md border border-rexel-divider bg-rexel-surface pl-11 pr-4 text-sm text-rexel-text placeholder:text-rexel-text-muted focus:border-rexel-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-rexel-blue"
            aria-label="Recherche produit"
          />
        </div>
        <button
          type="button"
          className="hidden h-11 items-center gap-2 rounded-md border border-rexel-divider bg-white px-4 text-sm font-semibold text-rexel-blue transition-colors hover:bg-rexel-surface md:flex"
        >
          <Settings2 className="h-4 w-4" />
          Paramètres de recherche
        </button>
      </div>

      <nav className="hidden items-center gap-1 lg:flex">
        <HeaderIcon icon={Briefcase} label="Vos affaires" badge="" badgeColor="bg-destructive" />
        <HeaderIcon icon={Wrench} label="Vos outils" />
        <div className="flex flex-col items-center gap-1 px-2 text-rexel-blue">
          <User className="h-6 w-6" strokeWidth={1.75} />
          <span className="text-[11px] font-semibold leading-tight">taina.hake</span>
        </div>
        <HeaderIcon icon={ShoppingCart} label="Panier" badge="3" />
      </nav>
    </div>

    {/* Bottom row: nav links */}
    <div className="flex items-center justify-between gap-6 px-4 pb-3 lg:px-6">
      <nav className="flex items-center gap-6 overflow-x-auto">
        <a className="flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-rexel-blue hover:text-rexel-link" href="#">
          <span className="inline-block h-4 w-4 rounded-sm border border-current" />
          Catégories
        </a>
        {["Services", "Expertises", "La Fabrique"].map((l) => (
          <a key={l} href="#" className="whitespace-nowrap text-[15px] font-semibold text-rexel-blue hover:text-rexel-link">
            {l}
          </a>
        ))}
      </nav>
      <nav className="hidden items-center gap-6 md:flex">
        <a href="#" className="flex items-center gap-1.5 text-[15px] font-semibold text-rexel-blue hover:text-rexel-link">
          <span aria-hidden>📰</span> Nouveau
        </a>
        <a href="#" className="flex items-center gap-1.5 text-[15px] font-semibold text-rexel-blue hover:text-rexel-link">
          <span aria-hidden>🏷️</span> Promos
        </a>
        <a href="#" className="flex items-center gap-1.5 text-[15px] font-semibold text-rexel-blue hover:text-rexel-link">
          <span aria-hidden>💲</span> Destockage
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
