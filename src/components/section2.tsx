
import '../section2.css';
import * as Tabs from '@radix-ui/react-tabs';

function Section2() {
  return (
  <section className='section2'>
    <div>
      <Tabs.Root className='section2-root' defaultValue="bosques">
        <Tabs.List className="tabs-list">
          <h1 className='tittle-caracteristicas'> Caracteristicas </h1>
          <Tabs.Trigger className="bosques" value="bosques">Bosques</Tabs.Trigger>
          <Tabs.Trigger className="oceanos" value="oceanos">Océanos</Tabs.Trigger>
          <Tabs.Trigger className="montanas" value="montanas">Montañas</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="tabs-content-bosque" value="bosques">
          <p className='info-content-bosque'>Los bosques son ecosistemas esenciales para la vida en la Tierra. Ocupan alrededor del 30 % de la superficie terrestre y desempeñan un papel fundamental en el equilibrio ecológico del planeta. Actúan como los pulmones del mundo, ya que absorben dióxido de carbono y liberan oxígeno, ayudando a regular el clima global y a mitigar los efectos del cambio climático. Además, albergan cerca del 80 % de la biodiversidad terrestre, ofreciendo refugio a millones de especies de plantas, animales, hongos y microorganismos. Los bosques también son fuente de recursos naturales vitales, como madera, alimentos, medicinas y materias primas, de las cuales dependen numerosas comunidades humanas. Su suelo fértil previene la erosión y retiene el agua, evitando inundaciones y sequías.</p>
          <img className='image-forest1' src="/images/forest1.jpg" alt="" />
        </Tabs.Content>
        <Tabs.Content className="tabs-content-oceano" value="oceanos">
          <p className='info-content-oceano'>Los océanos son el componente más vasto e importante de la biosfera, cubriendo más del 70 % de la superficie terrestre y albergando una asombrosa diversidad de vida. Son esenciales para el equilibrio del clima global, ya que absorben gran parte del dióxido de carbono emitido por las actividades humanas y liberan oxígeno a través de organismos microscópicos como el fitoplancton, responsables de generar más de la mitad del oxígeno del planeta. Además, las corrientes oceánicas distribuyen el calor desde las zonas tropicales hacia los polos, regulando la temperatura de la Tierra y evitando cambios climáticos extremos. Los océanos también constituyen la base de la economía y el bienestar de millones de personas: proporcionan alimento, empleo y recursos energéticos, además de ser la principal vía para el comercio marítimo internacional.</p>
          <img className='image-oceano1' src="/images/oceano1.jpg" alt="" />
        </Tabs.Content>
        <Tabs.Content className="tabs-content-montana" value="montanas">
          <p className='info-content-montana'>Las montañas cubren aproximadamente una cuarta parte de la superficie terrestre y son el hogar de alrededor del 15 % de la población mundial. Constituyen fuentes vitales de agua dulce, ya que de sus nieves y glaciares nacen los ríos que abastecen a millones de personas. Además, poseen ecosistemas únicos que albergan una gran variedad de especies adaptadas a condiciones extremas de altitud y clima. Las montañas también tienen un profundo valor cultural y espiritual para numerosas comunidades indígenas, que han aprendido a convivir en armonía con su entorno. Proteger las montañas significa preservar no solo su belleza natural, sino también la estabilidad ambiental y los recursos hídricos de los que depende gran parte de la humanidad.</p>
          <img className='image-montana1' src="/images/montañas1.jpg" alt="" />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </section>
  );
}

export default Section2;

