import './App.css'
import { useState, useEffect } from "react"
import Header from './components/header'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Footer from './components/footer'   


function App() {
  const [darkMode,] = useState(
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

      <main className='px-8 py-10'>
        <Section4 />
      </main>

      <main className='px-8 py-10'>
        <Section5 />
      </main>

      <main className='px-8 py-10'>
        <Footer />
      </main>

      
      
    </div>
   
  )
}

export default App
