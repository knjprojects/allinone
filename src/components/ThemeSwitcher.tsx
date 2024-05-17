"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    //${theme == "dark" ? 'light' : 'dark'}
    <div className="w-8 sm:h-8 rounded-xl justify-center m-3 hover:scale-150 animate-spin dark:animate-none">
      {theme == "dark" ? (
        <Moon
          onClick={() => {
            setTheme(`${theme == "dark" ? "light" : "dark"}`);
          }}
        />
      ) : (
        <Sun
          onClick={() => {
            setTheme(`${theme == "dark" ? "light" : "dark"}`);
          }}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
