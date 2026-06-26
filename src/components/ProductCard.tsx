import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { useAppContext } from "../context";

export function ProductCard({ product }: { product: Product; key?: string | number }) {
  const { addToCart, inventory, formatPrice, currency } = useAppContext();
  
  const inStockCount = inventory[product.id] ?? 0;
  const isOutOfStock = inventory[product.id] !== undefined && inStockCount <= 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-3 transition-all hover:border-fuchsia-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-fuchsia-500/10">
      {/* JSON-LD Schema Markup for Product */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": product.name,
          "image": product.image,
          "description": product.description || `Buy ${product.name} online at Smartify.`,
          "brand": {
            "@type": "Brand",
            "name": "Smartify"
          },
          "offers": {
            "@type": "Offer",
            "url": `https://smartify.com/product/${product.id}`,
            "priceCurrency": currency || "USD",
            "price": product.price,
            "availability": isOutOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"
          }
        })}
      </script>

      <Link to={`/product/${product.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 flex items-center justify-center">
        <img loading="lazy" src={product.image} alt={`Buy ${product.name} - ${product.category} online`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </Link>
      
      <div className="mt-3 flex flex-1 flex-col relative z-10">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-display font-medium text-white hover:text-cyan-400 transition-colors">{product.name}</h3>
        </Link>
        <p className="mt-1 flex items-center text-sm text-slate-400">
          <span className="text-fuchsia-400 font-bold">{formatPrice(product.price)}</span>
        </p>
        {product.description && (
          <p className="mt-2 text-xs text-slate-400 line-clamp-2">{product.description}</p>
        )}

        <div className="mt-3 flex items-center justify-between">
           <div className="text-xs">
              {isOutOfStock ? (
                 <span className="text-red-400 font-medium">Out of stock</span>
              ) : (
                 <span className="text-emerald-400 font-medium">
                    {inventory[product.id] !== undefined ? `${inStockCount} in stock` : 'Loading...'}
                 </span>
              )}
           </div>
           <button
             onClick={() => addToCart(product)}
             disabled={isOutOfStock}
             className="flex items-center justify-center rounded-xl bg-fuchsia-600/10 p-2 text-fuchsia-400 transition hover:bg-fuchsia-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed border border-fuchsia-500/20 hover:border-fuchsia-500"
             aria-label={`Add ${product.name} to cart`}
           >
             <ShoppingCart className="h-5 w-5" />
           </button>
        </div>
      </div>
    </div>
  );
}
