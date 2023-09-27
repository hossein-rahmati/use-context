import "./App.css";
import { createContext, useState } from "react";
import WelcomePanel from "./components/WelcomePanel";
import MyProviders from "./components/MyProviders";
export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </MyProviders>
  );
}
