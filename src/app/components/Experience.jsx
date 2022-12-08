import React from 'react'

import planets from '../../assets/imgs/imgExp/planets.png'
import pdf from '../../assets/pdf/Gravity.pdf'
import { VrScene } from '../../scenes/VrScene'

export const Experience = () => {
  return (
    <div className="text-white h-screen py-4">
      <div className="w-10/12 m-auto">
        <h2 className="text-3xl font-semibold block mt-4">
          Experiencia
        </h2>
          <article>
            <section>
              <p className="mt-4 text-xl">
                Trabajé como desarrollador web 1 año (2021-octubre 2022-noviembre) en <a className="text-[#A766FF] hover:text-white" href="https://outdev.com.mx/" target="_blank">OutDev</a> una empresa emergente de Guadalajara Jalisco, en la cual me encargaba desde dar mantenimiento a aplicaciones web, hasta iniciarlas, estas aplicaciones estaban desarrolladas en react y django, así mismo en algunas ocasiones hacia deployments a los servidores. Después de quedar en la universidad renuncie de la empresa, y volví tiempo después por necesidades económicas, en mi regreso me encargue de hacer aplicaciones de realidad virtual en unity, las cuales eran dirigidas a experiencias inmersivas para exponer arte, después de utilizar unity, nos vimos en la necesidad de migrar a three js el cual es una librería que permite trabajar con modelos 3D en la web.
                Actualmente ya no trabajo en OutDev debido a circunstancias externas.
              </p>
              {/* <div className="w-2/4 h-80">
                <VrScene/>
              </div> */}
            </section>
            <section>
              <h2 className="text-3xl font-semibold block mt-8">
                ¿Qué hago en mi ingeniería?
              </h2>
              <p className="mt-4 text-xl">
                Actualmente 07/12/22 termina el segundo semestre de ingeniería en computación, en la cual llevé mecánica una parte de la oficina, en la cual se me encargo hacer un análisis de un problema donde lo analizara con mecánica, el cual me encargue de simular la gravedad de los planetas en unity, para ver mas información de este proyecto puedes dar <a className="text-[#A766FF] hover:text-white font-bold" href={pdf} target="_blank" rel="noopener noreferrer">aquí.</a></p>
              <div className="w-5/12 m-auto mt-6">
                <img src={planets} alt="Planetas"/>
              </div>
            </section>
          </article>
      </div>
    </div>
  )
}
