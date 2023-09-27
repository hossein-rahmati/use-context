import "./App.css";
import WelcomePanel from "./components/WelcomePanel";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

export default function MyApp() {
  return (
    <ThemeProvider>
      <UserProvider>
        <WelcomePanel />
        <ToggleTheme />
      </UserProvider>
    </ThemeProvider>
  );
}
