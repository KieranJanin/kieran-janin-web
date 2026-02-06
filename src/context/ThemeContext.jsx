import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check local storage or system preference on initial load
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            // Default to dark if no preference is saved, since the original site was dark
            // Or check system: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            // For now, let's default to 'dark' to match the original design
            return 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove the old class and add the new one
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // Save to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
