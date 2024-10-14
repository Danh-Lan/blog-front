import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-md bg-transparent"
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggleButton;
