import '../section1.css';
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
      <div className="container-section1">
        <h1 className='titulo_section1'> Tipos de Ecosistemas </h1>

        <div className="section1-grid">

          {/* Primera Card */}
          <Card className="section1-card">
            <img src="/images/forest.avif" alt="forest-image" className='card-image' />
            <CardHeader className='card-header'>
              <CardTitle className='card-title'>Bosques</CardTitle>
              <CardDescription className='card-description'>
                Riqueza de flora y fauna
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="card-text">
                Los bosques tropicales son esenciales para la biodiversidad del planeta.
              </p>
            </CardContent>
            <CardFooter className='card-footer'>
              <button className="card-button">Acceder</button>
            </CardFooter>
          </Card>

          {/* Segunda Card */}
          <Card className="section1-card">
            <img src="/images/oceano.webp" alt="Océano" className="card-image" />
            <CardHeader className='card-header'>
              <CardTitle className='card-title'>Océanos</CardTitle>
              <CardDescription className='card-description'>
                Vida marina y ecosistemas acuáticos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='card-text'>
                Los océanos cubren más del 70% del planeta y albergan una gran biodiversidad.
              </p>
            </CardContent>
            <CardFooter className='card-footer'>
              <button className="card-button">Acceder</button>
            </CardFooter>
          </Card>

          {/* Tercera Card */}
          <Card className="section1-card">
            <img src="/images/montaña.jfif" alt="Montaña" className="card-image" />
            <CardHeader className='card-header'>
              <CardTitle className='card-title'>Montañas</CardTitle>
              <CardDescription className='card-description'>
                Paisajes imponentes y diversidad de relieves
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="card-text">
                Las montañas aportan hábitats, fuentes de agua y paisajes variados.
              </p>
            </CardContent>
            <CardFooter className='card-footer'>
              <button className="card-button">Acceder</button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  )
}
