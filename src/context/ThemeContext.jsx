  // import { createContext, useEffect, useState } from "react";

  // const ThemeContext = createContext();

  // export function ThemeProvider({ children }) {
  //   const [theme, setTheme] = useState(
  //     localStorage.getItem("voyara-theme") || "light"
  //   );

  //   useEffect(() => {
  //     localStorage.setItem("voyara-theme", theme);
  //   }, [theme]);

  //   const toggleTheme = () => {
  //     setTheme((currentTheme) =>
  //       currentTheme === "light" ? "dark" : "light"
  //     );
  //   };

  //   return (
  //     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
  //       {children}
  //     </ThemeContext.Provider>
  //   );
  // }

  // export default ThemeContext;
  import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("voyara-theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("voyara-theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;