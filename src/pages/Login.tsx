import { Helmet } from "react-helmet-async";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function Login() {
  const { user, signInWithGoogle, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-[50vh] flex items-center justify-center text-cyan-400">Loading...</div>;
  }

  if (user) {
    const from = location.state?.from?.pathname || "/profile";
    return <Navigate to={from} replace />;
  }

  return (
    <div className="mx-auto max-w-md px-4 py-32 text-center">
      <Helmet>
        <title>Login / Register | Smartify</title>
        <meta name="description" content="Login or register to access your profile and manage orders." />
      </Helmet>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10 shadow-2xl backdrop-blur-sm">
        <h1 className="text-3xl font-display font-bold text-white mb-4">Welcome Back</h1>
        <p className="text-slate-400 mb-8">Sign in to your account to manage your profile, view moderator tools, and track orders.</p>
        
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition-all hover:bg-slate-200"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
