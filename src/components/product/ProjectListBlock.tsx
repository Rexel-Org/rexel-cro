import { ArrowRight, ListChecks } from "lucide-react";
import previewKeystone from "@/assets/preview-keystone.jpg";
import previewCable from "@/assets/preview-cable.jpg";
import previewSocket from "@/assets/preview-socket.jpg";

export interface ProjectListBlockProps {
  categoryName?: string;
  productCount?: number;
  href?: string;
  previews?: { src: string; alt: string }[];
}

const defaultPreviews = [
  { src: previewKeystone, alt: "Aperçu produit Keystone RJ45" },
  { src: previewCable, alt: "Aperçu produit Câble Cat 6" },
  { src: previewSocket, alt: "Aperçu produit Prise murale RJ45" },
];

const ProjectListBlock = ({
  categoryName = "communication VDI",
  productCount = 12,
  href = "/simplified-cart/communication-vdi-residentiel",
  previews = defaultPreviews,
}: ProjectListBlockProps) => {
  const extraCount = Math.max(0, productCount - previews.length);

  return (
    <a
      href={href}
      role="link"
      aria-label={`Voir le panier simplifié ${categoryName} — ${productCount} produits`}
      className="group block rounded-lg border border-rexel-loyalty/40 bg-rexel-loyalty-soft p-3 transition-shadow duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rexel-blue focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-rexel-loyalty-foreground"
        >
          <ListChecks className="h-4 w-4" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-rexel-loyalty-foreground">
            Panier simplifié
          </p>
          <p className="mt-0.5 text-[13px] font-semibold leading-snug text-rexel-text transition-colors group-hover:text-rexel-loyalty-foreground">
            Composez votre projet {categoryName}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <ul className="flex items-center gap-1.5">
          {previews.slice(0, 3).map((p) => (
            <li key={p.src}>
              <img
                src={p.src}
                alt={p.alt}
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8 rounded border border-rexel-divider bg-white object-contain p-0.5"
              />
            </li>
          ))}
          {extraCount > 0 && (
            <li
              aria-label={`Plus ${extraCount} produits`}
              className="flex h-8 w-8 items-center justify-center rounded border border-rexel-divider bg-white text-[11px] font-bold text-rexel-link"
            >
              +{extraCount}
            </li>
          )}
        </ul>

        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-rexel-loyalty-foreground">
          Voir le panier
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
};

export default ProjectListBlock;
