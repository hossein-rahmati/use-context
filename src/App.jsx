import "./App.css";
import WelcomePanel from "./components/WelcomePanel";
import ToggleTheme from "./components/ToggleTheme";
import Providers from "./components/Providers";

export default function MyApp() {
  return (
    <Providers>
      <WelcomePanel />
      <ToggleTheme />
    </Providers>
  );
}
