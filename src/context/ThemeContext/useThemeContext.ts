import { createContext,useContext } from "react";
type ThemeContextType={
    theme:"light"|"dark";
    toggleTheme:()=>void
}
export const ThemeContext = createContext<ThemeContextType | null>(null);
export function useThemeContext (): ThemeContextType  {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};