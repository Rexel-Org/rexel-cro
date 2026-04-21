import { useState } from "react";
import { Minus, Plus, ShoppingCart, Star, Info, Truck, Store, ChevronRight } from "lucide-react";

const QuantityStepper = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => setQty((q) => Math.max(1, q - 1))}
        aria-label="Diminuer la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-l-sm border border-r-0 border-rexel-divider bg-white text-rexel-blue transition-colors hover:bg-rexel-surface"
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="text"
        value={qty}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n) && n > 0) setQty(n);
        }}
        className="h-10 w-14 border border-rexel-divider bg-white text-center text-sm font-semibold text-rexel-text focus:outline-none focus:ring-1 focus:ring-rexel-blue"
        aria-label="Quantité"
      />
      <button
        type="button"
        onClick={() => setQty((q) => q + 1)}
        aria-label="Augmenter la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-r-sm border border-l-0 border-rexel-divider bg-white text-rexel-blue transition-colors hover:bg-rexel-surface"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

const StockBadge = ({ value, color = "bg-rexel-green-soft text-[hsl(142,55%,28%)]" }: { value: string; color?: string }) => (
  <span className={`flex h-7 min-w-[28px] items-center justify-center rounded-sm px-1.5 text-xs font-bold ${color}`}>
    {value}
  </span>
);

const PurchasePanel = () => (
  <aside className="flex w-full flex-col gap-4 rounded-md border border-rexel-divider bg-rexel-surface p-5">
    {/* Price */}
    <div>
      <p className="text-sm text-rexel-text-muted">Prix unitaire € HT</p>
      <p className="mt-1 flex items-baseline gap-1">
        <span className="font-display text-[18px] font-bold leading-none text-rexel-text">75,00 €</span>
        <span className="text-sm text-rexel-text-muted">/ P.</span>
        <Info className="ml-1 h-3.5 w-3.5 text-rexel-link" />
      </p>
    </div>

    {/* Add to cart */}
    <div className="flex items-center gap-2">
      <QuantityStepper />
      <span className="ml-1 text-sm font-semibold text-rexel-text">P.</span>
      <button
        type="button"
        className="ml-auto flex h-10 flex-1 items-center justify-center gap-2 rounded-sm bg-rexel-blue px-4 text-sm font-semibold text-white transition-colors hover:bg-[hsl(218,95%,14%)]"
      >
        <ShoppingCart className="h-4 w-4" />
        Ajouter au panier
      </button>
      <button
        type="button"
        aria-label="Ajouter aux favoris"
        className="flex h-10 w-10 items-center justify-center rounded-sm border border-rexel-divider bg-white text-rexel-link transition-colors hover:bg-rexel-surface"
      >
        <Star className="h-4 w-4" />
      </button>
    </div>

    <p className="text-xs text-rexel-text-muted">Min: 1 P. | Multiple: 1 P.</p>

    {/* Delivery */}
    <div className="rounded-sm border border-rexel-divider bg-white p-4 text-sm">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 font-display font-bold text-rexel-text">
          <Truck className="h-5 w-5 text-rexel-blue" />
          Livraison
        </p>
        <button type="button" className="flex items-center gap-0.5 text-xs font-semibold text-rexel-link hover:underline">
          Changer <ChevronRight className="h-3 w-3" />
        </button>
      </div>
      <p className="mt-2 text-xs uppercase tracking-wide text-rexel-text-muted">19 RUE DES VANNEAUX 57155 MARLY</p>
      <div className="mt-3 flex items-center gap-2">
        <StockBadge value="29" />
        <p className="text-rexel-text">Le jeudi 23 avril si commande avant 18:00.</p>
      </div>
    </div>

    {/* Pickup */}
    <div className="rounded-sm border border-rexel-divider bg-white p-4 text-sm">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 font-display font-bold text-rexel-text">
          <Store className="h-5 w-5 text-rexel-blue" />
          Retrait en agence
        </p>
        <button type="button" className="flex items-center gap-0.5 text-xs font-semibold text-rexel-link hover:underline">
          Changer <ChevronRight className="h-3 w-3" />
        </button>
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-rexel-link">REXEL - ANNECY</p>
      <div className="mt-3 flex items-center gap-2">
        <StockBadge value="0" color="bg-rexel-green-soft text-[hsl(142,55%,28%)]" />
        <p className="text-rexel-text">Dans 2h dans votre agence (click and collect)</p>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <StockBadge value="29" />
        <p className="text-rexel-text">Le jeudi 23 avril si commande avant 18:00.</p>
      </div>
    </div>
  </aside>
);

export default PurchasePanel;
