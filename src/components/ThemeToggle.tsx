import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC<{ isCollapsed?: boolean }> = ({ isCollapsed }) => {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-full flex items-center px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-gray-200 rounded-md transition-colors ${
        isCollapsed ? 'justify-center' : ''
      }`}
      title="Toggle theme"
    >
      {isDark ? (
        <Sun size={16} className={isCollapsed ? '' : 'mr-2'} />
      ) : (
        <Moon size={16} className={isCollapsed ? '' : 'mr-2'} />
      )}
      {!isCollapsed && 'Toggle Theme'}
    </button>
  );
};

export default ThemeToggle;
