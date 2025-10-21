import React from 'react';
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
          <p className='info-content-bosque'>Los bosques son ecosistemas fundamentales para la vida en el planeta. Albergan una enorme diversidad de flora y fauna, regulan el clima, purifican el aire y protegen el suelo de la erosión. Además, actúan como reservas de agua y carbono, ayudando a mitigar el cambio climático. Los bosques tropicales, templados y boreales ofrecen hábitats únicos y recursos naturales esenciales para millones de especies y comunidades humanas en todo el mundo.</p>
          <img className='image-forest1' src="/images/forest1.jpg" alt="" />
        </Tabs.Content>
        <Tabs.Content className="tabs-content-oceano" value="oceanos">
          <p className='info-content-oceano'>Los océanos son los ecosistemas más extensos del planeta, cubriendo más del 70 % de su superficie. Albergan una enorme diversidad de vida marina, regulan el clima global y producen gran parte del oxígeno que respiramos. Además, actúan como sumideros de carbono y fuente esencial de alimento y recursos para millones de personas, siendo fundamentales para el equilibrio ecológico y la salud del planeta.</p>
          <img className='image-oceano1' src="/images/oceano1.jpg" alt="" />
        </Tabs.Content>
        <Tabs.Content className="tabs-content-montana" value="montanas">
          <p className='info-content-montana'>Los bosques son ecosistemas fundamentales para la vida en el planeta. Albergan una enorme diversidad de flora y fauna, regulan el clima, purifican el aire y protegen el suelo de la erosión. Además, actúan como reservas de agua y carbono, ayudando a mitigar el cambio climático. Los bosques tropicales, templados y boreales ofrecen hábitats únicos y recursos naturales esenciales para millones de especies y comunidades humanas en todo el mundo.</p>
          <img className='image-montana1' src="/images/montañas1.jpg" alt="" />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </section>
  );
}

export default Section2;

