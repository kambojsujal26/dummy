import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export function Success() {
  return (
    <div className="py-24 sm:py-32 flex flex-col items-center justify-center relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-[400px] w-[400px] rounded-full bg-cyan-600 blur-[120px]" />
       </div>
       <CheckCircle2 className="h-24 w-24 text-cyan-400 mb-8" />
       <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-4 text-center">Payment Successful!</h1>
       <p className="text-lg text-slate-400 text-center max-w-md">
          Thank you for your purchase. Your order has been placed and is being processed.
       </p>
       <div className="mt-10">
          <Link
             to="/"
             className="rounded-xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-400 transition-colors"
          >
             Return Home
          </Link>
       </div>
    </div>
  );
}
