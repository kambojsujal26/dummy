import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Dumbbell, Search, User } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../../context";
import { useAuth } from "../../context/AuthContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, searchQuery, setSearchQuery, currency, setCurrency } = useAppContext();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Dumbbell className="h-8 w-8 text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-500" />
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30 group-hover:bg-fuchsia-400 transition-colors duration-500"></div>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Smartify
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-slate-300 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="relative hidden lg:block">
                <input
                   type="text"
                   placeholder="Search our catalog..."
                   value={searchQuery}
                   onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value && location.pathname !== "/products") {
                         navigate("/products");
                      }
                   }}
                   className="w-80 rounded-xl border border-fuchsia-500/30 bg-slate-950/80 px-4 py-2.5 pl-11 text-sm text-white placeholder-slate-500 backdrop-blur-md focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.1)] focus:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all"
                />
                <Search className="absolute left-4 top-3 h-4 w-4 text-fuchsia-400" />
             </div>
             
             <div className="relative">
               <select
                 value={currency}
                 onChange={(e) => setCurrency(e.target.value)}
                 className="appearance-none bg-transparent border-none text-slate-300 text-sm font-medium focus:outline-none cursor-pointer pr-4 hover:text-white transition-colors"
               >
                 <option value="USD" className="bg-slate-900 text-white">USD ($)</option>
                 <option value="EUR" className="bg-slate-900 text-white">EUR (€)</option>
                 <option value="GBP" className="bg-slate-900 text-white">GBP (£)</option>
                 <option value="INR" className="bg-slate-900 text-white">INR (₹)</option>
                 <option value="AUD" className="bg-slate-900 text-white">AUD (A$)</option>
                 <option value="CAD" className="bg-slate-900 text-white">CAD (C$)</option>
               </select>
             </div>

            <Link
              to={user ? "/profile" : "/login"}
              className="relative p-2 text-slate-300 hover:text-fuchsia-400 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>

            <Link
              to="/cart"
              className="relative p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-500 text-[10px] font-bold text-white shadow-[0_0_10px_rgba(217,70,239,0.7)]">
                  {totalItems}
                </span>
              )}
            </Link>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="px-4 py-3">
             <div className="relative">
                <input
                   type="text"
                   placeholder="Search our catalog..."
                   value={searchQuery}
                   onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value && location.pathname !== "/products") {
                         navigate("/products");
                      }
                   }}
                   className="w-full rounded-xl border border-fuchsia-500/30 bg-slate-950/80 px-4 py-2.5 pl-11 text-sm text-white placeholder-slate-500 backdrop-blur-md focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.1)] focus:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all"
                />
                <Search className="absolute left-7 top-3 h-4 w-4 text-fuchsia-400" />
             </div>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
