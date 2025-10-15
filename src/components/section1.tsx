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
      <h1 className='titulo_section1'> Tipos de Ecosistemas </h1>
      <div className="section1-grid">
        {/* Primera Card */}
        <Card className="section1-card1">
        <img src="../images/forest.jpg" alt=""/>
          <CardHeader className='card-header1'>
            <CardTitle className='card-title1'>Bosques Tropicales</CardTitle>
            <CardDescription className='card-description1'>Riqueza de flora y fauna</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-card1">
              Los bosques tropicales son esenciales para la biodiversidad del planeta.
            </p>
          </CardContent>
          <CardFooter className='card-footer1'>
            <button className="cta-button1">Explorar</button>
          </CardFooter>
        </Card>

        {/* Segunda Card */}
        <Card className="section1-card2">
          <img src="/images/ocean.jpg" alt="Océano" className="card-image2" />
          <CardHeader className='card-header2'>
            <CardTitle className='card-title2'>Océanos</CardTitle>
            <CardDescription className='card-description2'>Vida marina y ecosistemas acuáticos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='card-text2'>
              Los océanos cubren más del 70% del planeta y albergan una gran biodiversidad.
            </p>
          </CardContent>
          <CardFooter className='card-footer2'>
            <button className="cta-button2">Explorar</button>
          </CardFooter>
        </Card>

        <Card className="section1-card3">
          <img src="/images/forest.jpg" alt="Bosque Tropical" className="card-image3" />
          <CardHeader className='card-header3'>
            <CardTitle className='card-title3'>Bosques Europeos</CardTitle>
            <CardDescription className='card-description3'>Riqueza de flora y fauna</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-card3">
              Los bosques Europeos son esenciales para la biodiversidad del planeta.
            </p>
          </CardContent>
          <CardFooter className='card-footer3'>
            <button className="cta-button3">Explorar</button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
