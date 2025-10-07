import './App.css'
import Header from './components/header'

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors">
      <Header />

      <main className="px-8 py-10">
        {/* Aquí irán tus secciones: Hero, Problema, Causas, Soluciones, CTA */}
      </main>
    </div>
  )
}

export default App
