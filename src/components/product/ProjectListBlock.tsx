import { ArrowRight, Clock } from "lucide-react";
import previewKeystone from "@/assets/preview-keystone.jpg";
import previewCable from "@/assets/preview-cable.jpg";
import previewSocket from "@/assets/preview-socket.jpg";

export interface ProjectListBlockProps {
  categoryName?: string;
  productCount?: number;
  timeSaved?: string;
  href?: string;
  previews?: { src: string; alt: string }[];
}

const defaultPreviews = [
  { src: previewKeystone, alt: "Aperçu produit Keystone RJ45" },
  { src: previewCable, alt: "Aperçu produit Câble Cat 6" },
  { src: previewSocket, alt: "Aperçu produit Prise murale RJ45" },
];

const ProjectListBlock = ({
  categoryName = "communication VDI résidentiel",
  productCount = 12,
  timeSaved = "~15 min de recherche",
  href = "/simplified-cart/communication-vdi-residentiel",
  previews = defaultPreviews,
}: ProjectListBlockProps) => {
  const extraCount = Math.max(0, productCount - previews.length);

  return (
    <a
      href={href}
      role="link"
      aria-label={`Voir le panier complet pour ${categoryName} — ${productCount} produits sélectionnés`}
      className="group block rounded-xl border border-rexel-info-border bg-rexel-info-bg p-4 transition-shadow duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rexel-blue focus-visible:ring-offset-2 md:p-5"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* LEFT */}
        <div className="flex min-w-0 flex-col gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-rexel-link">
            Liste projet
          </span>
          <h3 className="font-display text-lg font-bold leading-snug text-rexel-text transition-colors group-hover:text-rexel-link md:text-xl">
            Équipe ton chantier {categoryName} en un clic
          </h3>
          <p className="text-sm text-rexel-text-muted">
            {productCount} produits sélectionnés par nos experts pour un projet complet
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-rexel-text">
            <Clock className="h-3.5 w-3.5 text-rexel-link" aria-hidden />
            Gagne {timeSaved}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-stretch gap-3 md:items-end md:gap-3">
          <ul className="flex items-center gap-2" aria-hidden={false}>
            {previews.slice(0, 3).map((p) => (
              <li key={p.src}>
                <img
                  src={p.src}
                  alt={p.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-md border border-rexel-divider bg-white object-contain p-1"
                />
              </li>
            ))}
            {extraCount > 0 && (
              <li
                aria-label={`Plus ${extraCount} produits`}
                className="flex h-12 w-12 items-center justify-center rounded-md border border-rexel-divider bg-white text-xs font-bold text-rexel-link"
              >
                +{extraCount}
              </li>
            )}
          </ul>

          <span
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-rexel-blue bg-white px-4 text-sm font-semibold text-rexel-blue transition-colors group-hover:bg-rexel-blue group-hover:text-white md:w-auto"
          >
            Voir le panier complet
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectListBlock;
