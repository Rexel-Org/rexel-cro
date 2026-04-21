import { Copy, ChevronDown, FileText, ListChecks, Mail, Barcode } from "lucide-react";
import MichaudBrand from "./MichaudBrand";

const RefChip = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-2 rounded-sm bg-rexel-surface px-3 py-2 text-sm">
    <span className="text-rexel-text-muted">
      {label} : <span className="font-semibold text-rexel-text">{value}</span>
    </span>
    <button
      type="button"
      aria-label={`Copier ${label}`}
      className="flex h-6 w-6 items-center justify-center rounded-sm text-rexel-link hover:bg-white"
    >
      <Copy className="h-3.5 w-3.5" />
    </button>
  </div>
);

const ProductInfo = () => (
  <div className="flex flex-col gap-4">
    {/* Brand + share row */}
    <div className="flex flex-wrap items-center gap-5 text-sm">
      <MichaudBrand />
      <button type="button" className="flex items-center gap-2 font-semibold text-rexel-link hover:underline">
        <Mail className="h-4 w-4" /> Partager par email
      </button>
      <button type="button" className="flex items-center gap-2 font-semibold text-rexel-link hover:underline">
        <Barcode className="h-4 w-4" /> Imprimer le code barre
      </button>
    </div>

    <h1 className="font-display text-[26px] font-bold leading-tight text-rexel-text">
      Tableau de comm. BLUENEO 4 RJ45 &amp; zone attenante
    </h1>
  </div>
);

export const ProductDetails = () => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-wrap gap-2">
      <RefChip label="Réf Rexel" value="MIHLB502" />
      <RefChip label="Réf Fab" value="LB502" />
      <RefChip label="EAN13" value="3660835048331" />
    </div>

    <div>
      <h2 className="mb-2 font-display text-base font-bold text-rexel-link">
        Caractéristiques principales
      </h2>
      <ul className="space-y-1.5 pl-4 text-sm text-rexel-text">
        <li className="list-disc marker:text-rexel-text">
          nombre de ports RJ45 <span className="font-bold">4</span>
        </li>
        <li className="list-disc marker:text-rexel-text">
          Modèle type{" "}
          <span className="font-bold">grade 3TV (max 10Gbps, transmission SAT/TNT)</span>
        </li>
      </ul>
    </div>

    {/* French flag - origin */}
    <div
      aria-label="Fabriqué en France"
      className="flex h-5 w-8 overflow-hidden rounded-[2px] border border-rexel-divider"
    >
      <span className="h-full w-1/3 bg-[#0055A4]" />
      <span className="h-full w-1/3 bg-white" />
      <span className="h-full w-1/3 bg-[#EF4135]" />
    </div>

    <p className="text-sm leading-relaxed text-rexel-text">
      Tableau de communication BLUENEO avec 4 RJ45 grade 3 TV, 4 emplacements Keystones libres,
      1 bornier de terre, 1 emplacement DTI pour paire cuivre éventuelle, 1 zone attenante compacte.
    </p>

    <button
      type="button"
      className="flex items-center gap-1 self-start text-sm font-semibold text-rexel-link hover:underline"
    >
      <ChevronDown className="h-4 w-4" />
      Accéder à la description complète
    </button>

    <div className="flex flex-col gap-3 border-t border-rexel-divider pt-4">
      <a href="#" className="flex items-center gap-2 text-base font-semibold text-rexel-link hover:underline">
        <FileText className="h-5 w-5" /> Documents techniques
      </a>
      <a href="#" className="flex items-center gap-2 text-base font-semibold text-rexel-link hover:underline">
        <ListChecks className="h-5 w-5" /> Spécificités techniques
      </a>
    </div>
  </div>
);

export default ProductInfo;
