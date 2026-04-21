import { forwardRef } from "react";
import { ArrowRight, Grid2x2 } from "lucide-react";
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

const ProjectListBlock = forwardRef<HTMLAnchorElement, ProjectListBlockProps>(
  (
    {
      categoryName = "communication VDI",
      productCount = 12,
      href = "/simplified-cart/communication-vdi-residentiel",
      previews = defaultPreviews,
    },
    ref,
  ) => {
    const extraCount = Math.max(0, productCount - previews.length);

    return (
      <a
        ref={ref}
        href={href}
        role="link"
        aria-label={`Voir la liste projet ${categoryName} — ${productCount} produits`}
        className="group block rounded-md border border-rexel-loyalty bg-white p-3 transition-colors duration-200 hover:bg-rexel-loyalty-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rexel-blue focus-visible:ring-offset-2"
      >
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-rexel-loyalty-soft text-rexel-loyalty-foreground"
          >
            <Grid2x2 className="h-4 w-4" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-rexel-loyalty-foreground">
                Liste projet
              </p>
              <span className="text-xs font-semibold text-rexel-text-muted">{productCount} produits</span>
            </div>

            <p className="mt-1 text-sm font-semibold leading-snug text-rexel-text">
              Accéder aux références {categoryName}
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <ul className="flex items-center gap-1.5">
                {previews.slice(0, 3).map((p) => (
                  <li key={p.src}>
                    <img
                      src={p.src}
                      alt={p.alt}
                      width={28}
                      height={28}
                      loading="lazy"
                      className="h-7 w-7 rounded-sm border border-rexel-divider bg-white object-contain p-0.5"
                    />
                  </li>
                ))}
                {extraCount > 0 && (
                  <li
                    aria-label={`Plus ${extraCount} produits`}
                    className="flex h-7 min-w-7 items-center justify-center rounded-sm border border-rexel-divider bg-rexel-surface px-1.5 text-[10px] font-bold text-rexel-link"
                  >
                    +{extraCount}
                  </li>
                )}
              </ul>

              <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-rexel-loyalty-foreground">
                Voir
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  },
);

ProjectListBlock.displayName = "ProjectListBlock";

export default ProjectListBlock;
