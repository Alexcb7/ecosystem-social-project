import '../App.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1-grid">
        {/* Primera Card */}
        <Card className="section1-card">
          <img src="/images/forest.jpg" alt="Bosque Tropical" className="card-image" />
          <CardHeader>
            <CardTitle>Bosques Tropicales</CardTitle>
            <CardDescription>Riqueza de flora y fauna</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Los bosques tropicales son esenciales para la biodiversidad del planeta.
            </p>
          </CardContent>
          <CardFooter>
            <button className="cta-button">Explorar</button>
          </CardFooter>
        </Card>

        {/* Segunda Card */}
        <Card className="section1-card">
          <img src="/images/ocean.jpg" alt="Océano" className="card-image" />
          <CardHeader>
            <CardTitle>Océanos</CardTitle>
            <CardDescription>Vida marina y ecosistemas acuáticos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Los océanos cubren más del 70% del planeta y albergan una gran biodiversidad.
            </p>
          </CardContent>
          <CardFooter>
            <button className="cta-button">Explorar</button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
