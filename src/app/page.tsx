"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutCard from "../components/AboutCard";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center px-2 sm:px-6 relative ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-[#f5f5f5] text-black"
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutCard />
    </main>
  );
}