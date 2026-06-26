import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogs } from "../data";
import { Helmet } from "react-helmet-async";

export function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
      <Helmet>
        <title>{`${blog.title} | Smartify Blog`}</title>
        <meta name="description" content={blog.summary} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.summary,
            "image": blog.imageCategory === "tech" ? "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" : "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
            "datePublished": new Date(blog.date).toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Smartify"
            }
          })}
        </script>
      </Helmet>

      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="h-[600px] w-[600px] rounded-full bg-cyan-600 blur-[150px]" />
      </div>

      <div className="mb-10">
        <Link to="/blog" className="text-slate-400 hover:text-cyan-400 flex items-center gap-2 text-sm font-medium transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
        <header className="mb-10 border-b border-slate-800 pb-10">
          <div className="flex items-center gap-x-4 mb-6">
            <div className="flex items-center gap-x-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4 text-cyan-400" />
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
            <div className="text-xs rounded-full bg-cyan-950/50 border border-cyan-500/20 px-3 py-1 text-cyan-400 font-medium tracking-wide uppercase">
              {blog.imageCategory}
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
          <p className="text-xl text-slate-200 mb-8 font-medium leading-relaxed">
            {blog.summary}
          </p>
          <p>
            {blog.content}
          </p>
        </div>
      </article>
    </div>
  );
}
