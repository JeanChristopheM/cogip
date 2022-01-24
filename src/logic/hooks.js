import { useState, useEffect } from "react";

const useLocalState = (key, initialValue) => {
  const saved = localStorage.getItem(key);
  const value = saved ? JSON.parse(saved) : null;
  const [theme, setTheme] = useState(value || initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);
  return [theme, setTheme];
};
export { useLocalState };
