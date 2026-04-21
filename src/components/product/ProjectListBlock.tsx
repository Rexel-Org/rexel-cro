import { forwardRef } from "react";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
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
        className="group relative block overflow-hidden rounded-md border border-rexel-loyalty bg-rexel-loyalty-soft p-3 pl-4 transition-all duration-200 hover:border-rexel-blue hover:shadow-[0_2px_8px_-2px_hsl(var(--rexel-blue)/0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rexel-blue focus-visible:ring-offset-2"
      >
        {/* Accent latéral coloré */}
        <span
          aria-hidden
          className="absolute left-0 top-0 h-full w-1 bg-rexel-blue"
        />

        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-rexel-blue text-white shadow-sm"
          >
            <Layers className="h-[18px] w-[18px]" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-rexel-blue px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                <Sparkles className="h-2.5 w-2.5" aria-hidden />
                Liste projet
              </span>
              <span className="text-xs font-semibold text-rexel-loyalty-foreground">
                {productCount} références
              </span>
            </div>

            <p className="mt-1.5 text-sm font-semibold leading-snug text-rexel-text">
              Accéder à la sélection {categoryName}
            </p>

            <div className="mt-2.5 flex items-center justify-between gap-3">
              <ul className="flex items-center -space-x-1.5">
                {previews.slice(0, 3).map((p) => (
                  <li key={p.src} className="relative">
                    <img
                      src={p.src}
                      alt={p.alt}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="h-8 w-8 rounded-sm border-2 border-white bg-white object-contain p-0.5 shadow-sm ring-1 ring-rexel-divider"
                    />
                  </li>
                ))}
                {extraCount > 0 && (
                  <li
                    aria-label={`Plus ${extraCount} produits`}
                    className="relative flex h-8 min-w-8 items-center justify-center rounded-sm border-2 border-white bg-rexel-blue px-1.5 text-[10px] font-bold text-white shadow-sm"
                  >
                    +{extraCount}
                  </li>
                )}
              </ul>

              <span className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-rexel-blue px-2.5 py-1 text-xs font-semibold text-white transition-colors group-hover:bg-rexel-eclipse">
                Voir la liste
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
