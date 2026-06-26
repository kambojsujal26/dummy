import { products } from "../data";
import { ProductCard } from "../components/ProductCard";
import { useState, useMemo } from "react";
import { useAppContext } from "../context";
import { Helmet } from "react-helmet-async";

export function Products() {
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const { searchQuery } = useAppContext();

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 py-10">
      <Helmet>
        <title>Shop Best Fitness Products Online | Buy Gym Equipment & Smart Gadgets India</title>
        <meta name="description" content="Explore our catalog of the best fitness products online in India. Buy affordable smart gadgets online, gym equipment for home workouts, and sports accessories." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Shop Best Fitness Products Online",
            "url": "https://smartify.com/products",
            "description": "Explore our catalog of the best fitness products online in India. Buy affordable smart gadgets online, gym equipment for home workouts, and sports accessories."
          })}
        </script>
      </Helmet>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-800/50 pb-6 gap-6">
         <div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-2">Our Premium Fitness Products Online</h1>
            <p className="mt-4 text-lg text-slate-400">Discover everything you need to upgrade your lifestyle and buy the best gym equipment for your home workout.</p>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <h2 className="text-lg font-display font-bold text-white mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
             <div className="py-24 text-center">
                <p className="text-slate-400">No products found in this category.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
