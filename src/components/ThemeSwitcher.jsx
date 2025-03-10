import { useState, useEffect } from 'react';
import useTheme from './useTheme';

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();
  const [isTheme1, setIsTheme1] = useState(theme === 'theme1');

   useEffect(() => {
    setIsTheme1(theme === 'theme1');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isTheme1 ? 'theme2' : 'theme1';
    switchTheme(newTheme);
    setIsTheme1(!isTheme1);
  };

  return (
    <div className="container mx-auto">
      <label className="switch relative inline-block w-10 h-6 bg-gray-300 rounded-full mt-4 ml-10">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={!isTheme1}
          className="absolute opacity-0 w-0 h-0"
        />
        <div
          className={`slider absolute top-0 left-0 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
            isTheme1 ? 'translate-x-0' : 'translate-x-full'
          }`}
        ></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;



