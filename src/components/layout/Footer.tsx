import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                 <Dumbbell className="h-8 w-8 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Smartify
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Train Smarter. Live Better. Stay Connected.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-zinc-400 hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-zinc-400 hover:text-indigo-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-zinc-400 hover:text-indigo-400">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-zinc-400 hover:text-indigo-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-zinc-400 hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-zinc-400 hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-zinc-400 hover:text-indigo-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Smartify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
