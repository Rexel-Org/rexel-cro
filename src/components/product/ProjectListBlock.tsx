import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

export interface ProjectListBlockProps {
  categoryName?: string;
  productCount?: number;
  href?: string;
  previews?: { src: string; alt: string }[];
}

const ProjectListBlock = forwardRef<HTMLAnchorElement, ProjectListBlockProps>(
  (
    {
      categoryName = "communication VDI",
      productCount = 12,
      href = "/simplified-cart/communication-vdi-residentiel",
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        role="link"
        aria-label={`Voir le panier simplifié ${categoryName} — ${productCount} produits`}
        className="group relative block overflow-hidden rounded-md border border-rexel-loyalty bg-rexel-loyalty-soft p-3 pl-4 transition-all duration-200 hover:border-rexel-blue hover:shadow-[0_2px_8px_-2px_hsl(var(--rexel-blue)/0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rexel-blue focus-visible:ring-offset-2"
      >
        {/* Accent latéral coloré */}
        <span
          aria-hidden
          className="absolute left-0 top-0 h-full w-1 bg-rexel-blue"
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="inline-flex items-center rounded-full bg-rexel-blue px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              Panier simplifié
            </span>
            <span className="text-xs font-semibold text-rexel-loyalty-foreground">
              {productCount} références
            </span>
          </div>

          <p className="mt-1.5 text-sm font-semibold leading-snug text-rexel-text">
            Accéder à la sélection {categoryName}
          </p>

          <div className="mt-2 flex items-center justify-end">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-rexel-blue group-hover:underline">
              Voir le panier simplifié
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    );
  },
);

ProjectListBlock.displayName = "ProjectListBlock";

export default ProjectListBlock;
