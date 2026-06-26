import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck, Truck, Clock } from "lucide-react";
import { products } from "../data";
import { ProductCard } from "../components/ProductCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";

export function Home() {
  const featuredProducts = products.filter(p => ["adjustable-dumbbells", "yoga-mat", "whey-protein", "smart-watch"].includes(p.id)).slice(0, 4);
  const taglines = [
    "Unleash Your Ultimate Potential with",
    "Transform Your Fitness Journey with",
    "Experience the Future of Training on"
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="flex flex-col relative">
      <Helmet>
        <title>Buy Best Fitness Products & Smart Gadgets Online in India | Smartify</title>
        <meta name="description" content="Looking for the best fitness products online in India? Shop premium gym equipment online, affordable smart gadgets, and fitness accessories for home workouts at Smartify." />
        <meta name="keywords" content="fitness products online, gym equipment online, smart gadgets online, fitness accessories online, electronic gadgets online" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Smartify",
            "url": "https://smartify.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://smartify.com/products?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Smartify",
            "url": "https://smartify.com",
            "logo": "https://smartify.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98765-43210",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": "en"
            }
          })}
        </script>
      </Helmet>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <img loading="lazy" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=2000" alt="Best fitness products online background" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img loading="lazy" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" alt="Gym equipment online hero background" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-transparent" />
          </div>

        <div className="absolute top-0 right-0 -z-0 translate-x-1/3 -translate-y-1/3 opacity-30">
          <div className="h-[800px] w-[800px] rounded-full bg-cyan-600 blur-[150px]" />
        </div>
        <div className="absolute bottom-0 left-0 -z-0 -translate-x-1/3 translate-y-1/3 opacity-30">
          <div className="h-[600px] w-[600px] rounded-full bg-fuchsia-600 blur-[150px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
             <div className="h-[140px] md:h-[160px] relative">
                <AnimatePresence mode="wait">
                  <motion.h1
                     key={taglineIndex}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5 }}
                     className="absolute inset-0 text-5xl font-display font-bold tracking-tight text-white sm:text-7xl leading-[1.1]"
                  >
                     {taglines[taglineIndex]} <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Smartify</span>
                  </motion.h1>
                </AnimatePresence>
             </div>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Discover premium gym equipment, affordable smart gadgets online in India, cutting-edge fitness electronics, and powerful supplements for your best home workout.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/products"
                className="group relative rounded-full p-[2px] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                <span className="relative flex items-center justify-center rounded-full bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-transparent">
                   Shop Now
                </span>
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2 hover:text-cyan-400 transition-colors">
                Explore Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Content Section */}
      <section className="py-16 relative bg-slate-900/40 backdrop-blur-md border-y border-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-300">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Buy Gym Equipment for Home Workout & Smart Gadgets Online</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                Welcome to Smartify, your ultimate destination to find the <strong>best fitness products online in India</strong>. Whether you are building a home gym, looking to <strong>buy gym equipment for home workout</strong>, or upgrading your active lifestyle, our premium selection has you covered. We offer high-quality gear ranging from adjustable dumbbells to durable yoga mats, ensuring everything you need is just a click away.
              </p>
              <p>
                In today's fast-paced world, tracking your health is essential. That's why we carry <strong>affordable smart gadgets online in India</strong>, including the <strong>latest electronic gadgets for daily use</strong> and the <strong>best wearable fitness gadgets for workout</strong>. From smartwatches with advanced biometric tracking to precision smart scales, our curated collection empowers athletes of all levels.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Beyond standard <strong>gym equipment online</strong>, we specialize in high-grade <strong>fitness accessories online</strong> and nutritional supplements. Explore our professional-grade resistance bands, foam rollers, and grass-fed whey proteins—all carefully chosen to support your recovery and peak performance.
              </p>
              <p>
                Browse through our categories to buy the <strong>electronic gadgets online</strong> that fit modern active lifestyles. We pride ourselves on fast delivery, premium quality, and secure payments. Enhance your edge today with Smartify's state-of-the-art catalog!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-slate-900/10 relative backdrop-blur-sm border-t border-slate-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl text-center mb-16">Explore Fitness Accessories & Smart Gadgets</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {[
               {name: "Home Gym", path: "Gym Equipment", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=400"},
               {name: "Accessories", path: "Fitness Accessories", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400"},
               {name: "Supplements", path: "Supplements", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400"},
               {name: "Smart Gadgets", path: "Smart Fitness Gadgets", image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=400"}
            ].map((cat) => (
              <Link key={cat.name} to="/products" className="group relative flex h-40 flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-800/80 hover:ring-2 hover:ring-fuchsia-500 transition-all cursor-pointer">
                 <img loading="lazy" src={cat.image} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-transform duration-500 group-hover:scale-110" alt={`Buy ${cat.name} online`} />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                 <span className="relative z-10 font-bold text-lg text-slate-200 group-hover:text-cyan-300 drop-shadow-md">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
             <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-4">Why Choose Smartify for Fitness Products Online?</h2>
                <div className="flex items-start gap-4 group">
                   <div className="mt-1 p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors"><ShieldCheck className="h-6 w-6" /></div>
                   <div>
                      <h3 className="text-lg font-semibold text-white">Premium Quality Gym Gear</h3>
                      <p className="mt-1 text-slate-400">fitness products and accessories built to last and elevate your workout routines.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 group">
                   <div className="mt-1 p-2.5 rounded-xl bg-fuchsia-950 text-fuchsia-400 border border-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-colors"><Zap className="h-6 w-6" /></div>
                   <div>
                      <h3 className="text-lg font-semibold text-white">Latest Electronics Technology</h3>
                      <p className="mt-1 text-slate-400">Cutting-edge smart gadgets and fitness tech for optimal tracking.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 group">
                   <div className="mt-1 p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors"><Truck className="h-6 w-6" /></div>
                   <div>
                      <h3 className="text-lg font-semibold text-white">Fast Nationwide Delivery</h3>
                      <p className="mt-1 text-slate-400">Get your gym equipment delivered safely right to your doorstep quickly.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 group">
                   <div className="mt-1 p-2.5 rounded-xl bg-fuchsia-950 text-fuchsia-400 border border-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-colors"><Clock className="h-6 w-6" /></div>
                   <div>
                      <h3 className="text-lg font-semibold text-white">24/7 Expert Support</h3>
                      <p className="mt-1 text-slate-400">Our customer team is always here to assist you with electronic gadgets queries.</p>
                   </div>
                </div>
             </div>
             
             <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-2xl font-display font-bold text-white">Featured Products</h2>
                   <Link to="/products" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">View all</Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900/10 py-16 border-y border-slate-800/30 backdrop-blur-sm relative">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-10">What Our Customers Say</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
               <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 text-6xl text-cyan-500/10 font-serif leading-none">"</div>
                  <p className="text-lg text-slate-300 italic relative z-10">"Great place for both fitness and tech products. Has transformed my home gym completely. Highly resilient build quality!"</p>
                  <p className="mt-6 font-semibold text-cyan-400">— Rahul Sharma</p>
               </div>
               <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 text-6xl text-fuchsia-500/10 font-serif leading-none">"</div>
                  <p className="text-lg text-slate-300 italic relative z-10">"The gadgets quality is amazing and delivery is super fast. It integrates perfectly into my daily routine."</p>
                  <p className="mt-6 font-semibold text-fuchsia-400">— Priya Mehta</p>
               </div>
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-[400px] w-[800px] rounded-full bg-cyan-600 blur-[150px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900/40 px-6 py-10 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
             <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl mb-4">Stay updated</h2>
             <p className="text-lg leading-8 text-cyan-100/70 mb-8">
               Get the latest fitness and technology trends delivered to your inbox.
             </p>
             <form className="flex max-w-md mx-auto gap-x-4">
               <input
                 id="email-address"
                 name="email"
                 type="email"
                 autoComplete="email"
                 required
                 className="min-w-0 flex-auto rounded-xl border border-slate-700 bg-slate-950/50 px-6 py-3.5 text-white shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-sm sm:leading-6"
                 placeholder="Enter your email"
               />
               <button
                 type="submit"
                 className="flex-none rounded-xl bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-colors"
               >
                 Subscribe
               </button>
             </form>
           </div>
        </div>
      </section>
      </div>

    </div>
  );
}
