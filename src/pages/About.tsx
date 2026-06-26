import { MoveRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function About() {
  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      <Helmet>
        <title>About Us | Best Fitness Products Online in India - Smartify</title>
        <meta name="description" content="Learn about Smartify, the leading platform to buy gym equipment for home workout and affordable smart gadgets online in India." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Smartify",
            "url": "https://smartify.com/about",
            "description": "Learn about Smartify, the leading platform to buy gym equipment for home workout and affordable smart gadgets online in India."
          })}
        </script>
      </Helmet>
      
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="h-[600px] w-[600px] rounded-full bg-cyan-600 blur-[150px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-6">About Smartify</h1>
            <p className="text-xl text-slate-400">Bridging the gap between active living and modern technology.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-8">
               <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Our Story</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                     Founded in 2021, Smartify started as a fitness-focused brand, making it easy to <strong>buy gym equipment for home workout</strong>. We quickly evolved into a comprehensive digital marketplace where Indian consumers can discover the <strong>best fitness products online in India</strong> alongside the <strong>latest electronic gadgets for daily use</strong>.
                  </p>
               </div>
               <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Mission</h2>
                  <p className="text-slate-300 leading-relaxed border-l-4 border-fuchsia-500 pl-6 text-lg">
                     Empowering smarter living by breaking barriers to accessibility for premium, <strong>affordable smart gadgets online in India</strong> and high-performance physical training equipment.
                  </p>
               </div>
               <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Vision</h2>
                  <p className="text-slate-300 leading-relaxed border-l-4 border-cyan-500 pl-6 text-lg">
                     To become the foremost global destination for wellness and technology integration.
                  </p>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-800 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <h3 className="text-xl font-display font-bold text-white mb-8 relative z-10">Core Values</h3>
               <ul className="space-y-6 relative z-10">
                  {["Uncompromising Quality", "Relentless Innovation", "Customer-First Experience", "Accessible Wellness"].map((value, i) => (
                     <li key={value} className="flex items-center gap-4 text-lg text-slate-300 font-medium tracking-wide">
                        <div className={`h-2 w-2 rounded-full ${i % 2 === 0 ? 'bg-cyan-500' : 'bg-fuchsia-500'}`} />
                        {value}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
}
