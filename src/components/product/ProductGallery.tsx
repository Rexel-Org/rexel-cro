import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import productImg from "@/assets/blueneo-product.jpg";

const thumbs = [productImg, productImg];

const ProductGallery = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full flex-col">
      <div className="relative flex aspect-square w-full items-center justify-center rounded-sm bg-white">
        <img
          src={thumbs[active]}
          alt="Tableau de communication BLUENEO 4 RJ45"
          width={800}
          height={800}
          className="max-h-full max-w-full object-contain"
        />
        <button
          type="button"
          aria-label="Zoom sur l'image"
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-rexel-link transition-colors hover:bg-rexel-surface"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Image précédente"
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full text-rexel-link transition-colors hover:bg-rexel-surface"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          {thumbs.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Voir l'image ${i + 1}`}
              className={`h-[72px] w-[72px] overflow-hidden rounded-sm border bg-white p-1 transition-colors ${
                active === i ? "border-rexel-blue" : "border-rexel-divider hover:border-rexel-blue/60"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Image suivante"
          onClick={() => setActive((a) => Math.min(thumbs.length - 1, a + 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full text-rexel-link transition-colors hover:bg-rexel-surface"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
