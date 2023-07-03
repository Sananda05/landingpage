import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--text-color", "#fff");
      root.style.setProperty("--background-color", "#000");
    } else {
      root.style.setProperty("--text-color", "#000");
      root.style.setProperty("--background-color", "#fff");
    }
  }, [darkMode]);

  const toggleDarkMode = async (darkMode) => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
