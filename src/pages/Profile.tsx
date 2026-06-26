import { Helmet } from "react-helmet-async";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { LogOut, ShieldCheck, User } from "lucide-react";

export function Profile() {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return <div className="min-h-[50vh] flex items-center justify-center text-cyan-400">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const isModerator = user.role === "moderator" || user.role === "owner";
  const isOwner = user.role === "owner";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Helmet>
        <title>My Profile | Smartify</title>
      </Helmet>

      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">Profile</h1>
        <button
          onClick={signOut}
          className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4" /> Sign Out
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="col-span-1 rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-950 border border-cyan-500/30">
              <User className="h-10 w-10 text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>
            <p className="text-sm text-slate-400">{user.email}</p>
            
            <div className="mt-4 rounded-full bg-fuchsia-950/50 border border-fuchsia-500/20 px-4 py-1 text-xs font-bold text-fuchsia-400 uppercase tracking-widest">
              {user.role}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
            <h3 className="text-xl font-bold text-white mb-4">Account Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-500">Email Address</label>
                <div className="mt-1 text-slate-300">{user.email}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500">Display Name</label>
                <div className="mt-1 text-slate-300">{user.displayName || "Not set"}</div>
              </div>
            </div>
          </div>

          {isModerator && (
            <div className="rounded-3xl border border-fuchsia-500/20 bg-fuchsia-950/10 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="h-32 w-32 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-fuchsia-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Moderator Dashboard
              </h3>
              <p className="text-slate-300 mb-6 relative z-10">
                As a {user.role}, you have access to additional manageable options.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <button className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-left hover:bg-slate-700 hover:border-slate-600 transition-colors">
                  <div className="font-bold text-white mb-1">Manage Products</div>
                  <div className="text-sm text-slate-400">Add, edit, or remove catalog items.</div>
                </button>
                <button className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-left hover:bg-slate-700 hover:border-slate-600 transition-colors">
                  <div className="font-bold text-white mb-1">View Orders</div>
                  <div className="text-sm text-slate-400">Check recent transactions.</div>
                </button>
                {isOwner && (
                  <button className="rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-4 text-left hover:bg-cyan-900/50 hover:border-cyan-500/50 transition-colors sm:col-span-2">
                    <div className="font-bold text-cyan-400 mb-1">Owner Settings</div>
                    <div className="text-sm text-cyan-200/70">Manage roles and global site settings.</div>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
