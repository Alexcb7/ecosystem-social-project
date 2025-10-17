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
        <img src="/images/forest.avif" alt="forest-image" className='card-image1'/>
          <CardHeader className='card-header1'>
            <CardTitle className='card-title1'> Bosques </CardTitle>
            <CardDescription className='card-description1'>Riqueza de flora y fauna</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-card1">
              Los bosques tropicales son esenciales para la biodiversidad del planeta.
            </p>
          </CardContent>
          <CardFooter className='card-footer1'>
          </CardFooter>
        </Card>

        {/* Segunda Card */}
        <Card className="section1-card2">
          <img src="/images/oceano.webp" alt="Océano" className="card-image2" />
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
          </CardFooter>
        </Card>

        <Card className="section1-card3">
          <img src="/images/montaña.jfif" alt="Montaña" className="card-image3" />
          <CardHeader className='card-header3'>
            <CardTitle className='card-title3'> Montañas </CardTitle>
            <CardDescription className='card-description3'>Paisajes imponentes y diversidad de relieves</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-card3">
              Los bosques Europeos son esenciales para la biodiversidad del planeta.
            </p>
          </CardContent>
          <CardFooter className='card-footer3'>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
