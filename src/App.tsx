import './App.css'
import { useState, useEffect } from "react"
import Header from './components/header'
import Section1 from './components/section1'


function App() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  return (
    <div className="app">
      <Header />

      <main className="px-8 py-10">
      <Section1 />
      </main>
    </div>
   
  )
}

export default App
