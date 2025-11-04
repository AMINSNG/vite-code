import { useState } from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const label = theme === 'light' ? 'Light mode' : 'Dark mode';

  return (
    <div className={`theme-switch theme-switch--${theme}`}>
      <h2 className="theme-switch__title">Theme setting</h2>
      <div className="theme-switch__content">
        <span className="theme-switch__label" aria-live="polite">
          {label}
        </span>
        <button type="button" className="theme-switch__button" onClick={toggleTheme}>
          Toggle
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
