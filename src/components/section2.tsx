import '../section2.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Leaf, Mountain } from "lucide-react" // iconos de shadcn/lucide

export default function Section2() {
  return (
    <section className="section2 py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-700 dark:text-green-400">
        Descubre nuestros ecosistemas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Bosques */}
        <Card className="flex flex-col items-center text-center p-6">
          <Leaf className="w-12 h-12 text-green-600 mb-4" />
          <CardHeader>
            <CardTitle className='card-tittle1'>Bosques</CardTitle>
            <CardDescription>Riqueza de flora y fauna</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Conservamos los bosques tropicales y templados para mantener la biodiversidad.
            </p>
          </CardContent>
        </Card>

        {/* Océanos */}
        <Card className="flex flex-col items-center text-center p-6">
          <CardHeader>
            <CardTitle>Océanos</CardTitle>
            <CardDescription>Vida marina y ecosistemas acuáticos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Protegemos los océanos y su vida marina para preservar el equilibrio del planeta.
            </p>
          </CardContent>
        </Card>

        {/* Montañas */}
        <Card className="flex flex-col items-center text-center p-6">
          <Mountain className="w-12 h-12 text-gray-700 dark:text-gray-200 mb-4" />
          <CardHeader>
            <CardTitle>Montañas</CardTitle>
            <CardDescription>Hábitats alpinos y biodiversidad</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Fomentamos la conservación de montañas y ecosistemas de altura.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
