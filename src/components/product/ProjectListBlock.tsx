import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";

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
        className="group relative block overflow-hidden rounded-md border border-violet-30 bg-violet-10 p-3 pl-4 transition-all duration-200 hover:border-violet-70 hover:shadow-[0_2px_8px_-2px_hsl(var(--violet-80)/0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-70 focus-visible:ring-offset-2"
      >
        {/* Accent latéral coloré */}
        <span
          aria-hidden
          className="absolute left-0 top-0 h-full w-1 bg-violet-70"
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="inline-flex h-[18px] items-center rounded-full bg-violet-80 px-2 text-[10px] font-bold uppercase leading-none tracking-[0.08em] text-white">
              Panier simplifié
            </span>
            <span className="text-xs font-semibold text-violet-80">
              {productCount} références
            </span>
          </div>

          <p className="mt-1.5 text-sm font-normal leading-snug text-rexel-text">
            Comparez les différentes déclinaisons et ajoutez-les en une seule fois
          </p>

          <div className="mt-2 flex items-center justify-end">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-violet-80 group-hover:underline">
              Voir le panier simplifié
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    );
  },
);

ProjectListBlock.displayName = "ProjectListBlock";

export default ProjectListBlock;
