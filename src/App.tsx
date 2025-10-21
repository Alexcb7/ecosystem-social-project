import './App.css'
import { useState, useEffect } from "react"
import Header from './components/header'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'



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

      <main className='px-8 py-10'>
      <Section2 />
      </main>

      <main className='px-8 py-10'>
      <Section3 />
      </main>

      
    </div>
   
  )
}

export default App
