import { useTheme } from "../context/ThemeContext";

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
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
    </div>
  );
}

export default ToggleTheme;
