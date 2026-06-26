import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { products } from "../data";
import { useAppContext } from "../context";
import { Helmet } from "react-helmet-async";

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart, inventory, formatPrice, currency } = useAppContext();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const inStockCount = inventory[product.id] ?? 0;
  const isOutOfStock = inventory[product.id] !== undefined && inStockCount <= 0;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>{`Buy ${product.name} | Best Fitness Products Online - Smartify`}</title>
        <meta name="description" content={`Shop ${product.name} at Smartify. ${product.description || "Get the best gym equipment and smart gadgets online in India."}`} />
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
      </Helmet>

      <div className="mb-8">
        <Link to="/products" className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm font-medium transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" /> Back to Catalog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 aspect-square flex items-center justify-center">
          <img 
            src={product.image} 
            alt={`Buy ${product.name} online`} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-2">{product.category}</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">{product.name}</h1>
            <p className="text-3xl font-mono font-bold text-fuchsia-400">{formatPrice(product.price)}</p>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-300 leading-relaxed">
              {product.description || `Enhance your fitness journey with the ${product.name}. Designed for durability and peak performance, it is one of the best fitness products online in India.`}
            </p>
          </div>

          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-300 font-medium">Availability</span>
              {isOutOfStock ? (
                <span className="text-red-400 font-bold bg-red-400/10 px-3 py-1 rounded-full text-sm">Out of Stock</span>
              ) : (
                <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-sm">
                  {inventory[product.id] !== undefined ? `${inStockCount} in stock` : 'In Stock'}
                </span>
              )}
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={isOutOfStock}
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-cyan-500/25"
            >
              <ShoppingCart className="h-6 w-6" />
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <ShieldCheck className="h-6 w-6 text-cyan-400 mb-2" />
              <span className="text-sm text-slate-300 font-medium">1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Truck className="h-6 w-6 text-fuchsia-400 mb-2" />
              <span className="text-sm text-slate-300 font-medium">Free Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <RotateCcw className="h-6 w-6 text-cyan-400 mb-2" />
              <span className="text-sm text-slate-300 font-medium">7-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
