import { Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { blogs } from "../data";

export function Blog() {
  return (
    <div className="py-10 sm:py-16 relative">
       <Helmet>
         <title>Fitness & Tech Blog | Latest Electronic Gadgets for Daily Use</title>
         <meta name="description" content="Read the Smartify blog for tips to buy gym equipment for home workouts, reviews of affordable smart gadgets online in India, and the best fitness tech trends." />
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Smartify Blog",
            "url": "https://smartify.com/blog",
            "description": "Insights, news, and trends from the world of fitness algorithms and high-end tech hardware."
          })}
         </script>
       </Helmet>
       <div className="absolute top-1/2 left-0 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="h-[500px] w-[500px] rounded-full bg-fuchsia-600 blur-[150px]" />
       </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-left mb-10">
          <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-4">Latest Blogs</h1>
          <p className="text-lg text-slate-400">Insights, news, and trends from the world of fitness algorithms and high-end tech hardware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {blogs.map((blog, idx) => (
              <article key={idx} className="flex flex-col items-start justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 hover:bg-slate-900 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full group hover:shadow-2xl hover:shadow-cyan-500/5">
                 <div className="flex items-center gap-x-2 text-xs mb-6">
                    <Calendar className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    <time dateTime={blog.date} className="text-slate-500">{blog.date}</time>
                 </div>
                 <div className="group relative">
                    <h2 className="mt-3 text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                       <Link to={`/blog/${blog.slug}`}>
                          <span className="absolute inset-0" />
                          {blog.title}
                       </Link>
                    </h2>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">{blog.summary}</p>
                 </div>
                 <div className="mt-6 flex items-center gap-x-4">
                    <div className="text-sm rounded-full bg-cyan-950/50 border border-cyan-500/20 px-4 py-1.5 text-cyan-400 font-medium tracking-wide uppercase text-xs">
                       {blog.imageCategory}
                    </div>
                 </div>
              </article>
           ))}
        </div>
      </div>
    </div>
  );
}
