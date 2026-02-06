import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Lock } from 'lucide-react';

const StagingAuth = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAuth = localStorage.getItem('staging_auth');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Use environment variable for password
        const correctPassword = import.meta.env.VITE_STAGING_PASSWORD;

        if (password === correctPassword) {
            localStorage.setItem('staging_auth', 'true');
            setIsAuthenticated(true);
        } else {
            setError(true);
        }
    };

    if (loading) return null; // Prevent flash

    if (isAuthenticated) {
        return children ? children : <Outlet />;
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-center p-4 selection:bg-white selection:text-black font-sans">
            <div className="max-w-sm w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-xl animate-in fade-in zoom-in duration-500">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-4 bg-zinc-800/50 rounded-full mb-4 text-emerald-500 border border-white/5">
                        <Lock size={24} />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Staging Access</h1>
                    <p className="text-zinc-500 text-xs mt-2 text-center uppercase tracking-widest leading-relaxed">
                        Restricted Environment
                    </p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            placeholder="Enter access code"
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700"
                            autoFocus
                        />
                        {error && (
                            <p className="text-red-500 text-[10px] mt-2 ml-1 uppercase tracking-wider font-bold animate-pulse">Incorrect password</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors active:scale-95"
                    >
                        Authenticate
                    </button>
                </form>
            </div>
            <div className="fixed bottom-6 text-zinc-800 text-[10px] uppercase tracking-widest">
                Kieran Janin &copy; {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default StagingAuth;
