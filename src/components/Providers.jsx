import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { UserProvider } from "../context/UserContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}

export default Providers;
