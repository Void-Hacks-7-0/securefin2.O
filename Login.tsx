import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Lock, User, Phone, CheckCircle } from 'lucide-react';

interface LoginProps {
  onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || !password) return;
    if (isSignUp && !name) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
        const displayName = name || "Student User";
        onLogin(displayName);
        setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-200">
      <div className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">
        
        {/* Left Side - Brand & Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-8">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <ShieldCheck className="text-white w-8 h-8" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight">SecureFin</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                    {isSignUp ? "Start Your Financial Journey Today." : "Welcome Back!"}
                </h2>
                <p className="text-indigo-100 opacity-90 leading-relaxed">
                    {isSignUp 
                        ? "Join thousands of students and families securing their future with blockchain-powered finance."
                        : "Track expenses, manage budgets, and learn financial literacy with complete transparency."
                    }
                </p>
            </div>

            <div className="relative z-10 mt-12 space-y-4">
                <div className="flex items-center space-x-3 text-sm opacity-90">
                    <CheckCircle size={18} className="text-emerald-300" />
                    <span>Blockchain Secured Ledger</span>
                </div>
                <div className="flex items-center space-x-3 text-sm opacity-90">
                    <CheckCircle size={18} className="text-emerald-300" />
                    <span>AI-Powered Advice</span>
                </div>
                <div className="flex items-center space-x-3 text-sm opacity-90">
                    <CheckCircle size={18} className="text-emerald-300" />
                    <span>Works Offline</span>
                </div>
            </div>

            {/* Decorative BG Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl"></div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    {isSignUp ? "Create Account" : "Login to Account"}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {isSignUp ? "Enter your details below" : "Enter your mobile and password"}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Mobile Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                        <input 
                            type="tel" 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Password</label>
                        {!isSignUp && <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">Forgot?</a>}
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading || !mobile || !password}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-xl transition-all active:scale-95 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <>
                            {isSignUp ? "Sign Up Free" : "Login"}
                            <ArrowRight size={18} className="ml-2" />
                        </>
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button 
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                    >
                        {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;