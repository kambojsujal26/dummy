import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";
import { useState } from "react";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, formatPrice, currency } = useAppContext();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart, currency }),
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong with checkout.");
      }
    } catch (err) {
      console.error(err);
      alert("Error initiating checkout.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">Your Cart is Empty</h2>
          <p className="mt-4 text-lg text-slate-400">Looks like you haven't added anything yet.</p>
          <div className="mt-8 flex justify-center">
             <Link
               to="/products"
               className="rounded-xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-400 transition-colors"
             >
               Start Shopping
             </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-12 border-b border-slate-800/50 pb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <ul className="divide-y divide-slate-800/50">
            {cart.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 flex items-center justify-center">
                   {item.image ? (
                     <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                   ) : (
                     <span className="text-4xl text-slate-700">{item.name.charAt(0)}</span>
                   )}
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-base font-medium text-white">
                      <h3 className="font-display font-semibold">{item.name}</h3>
                      <p className="ml-4 text-cyan-400 font-mono">{formatPrice(item.price)}</p>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{item.category}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center border border-slate-700 rounded-lg bg-slate-800/50 overflow-hidden">
                       <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"><Minus className="h-4 w-4" /></button>
                       <span className="px-4 text-white font-medium">{item.quantity}</span>
                       <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"><Plus className="h-4 w-4" /></button>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="font-medium text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-2 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl p-8 h-fit sticky top-24">
           <h2 className="text-xl font-display font-bold text-white mb-6">Order Summary</h2>
           <div className="flow-root">
              <dl className="-my-4 divide-y divide-slate-800/50 text-sm">
                 <div className="flex items-center justify-between py-4">
                    <dt className="text-slate-400">Subtotal</dt>
                    <dd className="font-mono font-medium text-white">{formatPrice(cartTotal)}</dd>
                 </div>
                 <div className="flex items-center justify-between py-4">
                    <dt className="text-slate-400">Shipping</dt>
                    <dd className="font-medium text-white">Calculated at checkout</dd>
                 </div>
                 <div className="flex items-center justify-between py-4 border-t-2 border-slate-700 mt-4">
                    <dt className="text-lg font-bold text-white">Total</dt>
                    <dd className="text-lg font-mono font-bold text-cyan-400">{formatPrice(cartTotal)}</dd>
                 </div>
              </dl>
           </div>
           
           <button
             onClick={handleCheckout}
             disabled={isCheckingOut}
             className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
           >
             {isCheckingOut ? "Processing..." : "Proceed to Checkout"} <ArrowRight className="h-5 w-5" />
           </button>
        </div>
      </div>
    </div>
  );
}
