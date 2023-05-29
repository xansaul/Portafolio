import React from 'react'

import planets from '../../assets/imgs/imgExp/planets.png'
import pdfPlanets from '../../assets/pdf/Gravity.pdf'
import pdfCV from '../../assets/pdf/CV.pdf'

export const Experience = () => {
  return (
    <div className="text-white h-auto sm:my-10" id="experience">
      <div className="w-10/12 m-auto mt-10">
        <h2 className="text-3xl font-semibold block mt-4">
          Experiencia
        </h2>
          <article>
            <section>
              <p className="mt-4 sm:text-xl">
                Trabajé como desarrollador web 1 año (2021-octubre 2022-noviembre) en <a className="text-[#A766FF] hover:text-white ease-in duration-200" href="https://outdev.com.mx/" target="_blank">OutDev</a> una empresa emergente de Guadalajara Jalisco, en la cual me encargaba desde dar mantenimiento a aplicaciones web, hasta iniciarlas, estas aplicaciones estaban desarrolladas en react y django, así mismo en algunas ocasiones hacia deployments a los servidores. Después de quedar en la universidad renuncié de la empresa, y volví tiempo después por necesidades económicas, en mi regreso me encargué de hacer aplicaciones de realidad virtual en unity, las cuales eran dirigidas a experiencias inmersivas para exponer arte, después de utilizar unity, nos vimos en la necesidad de migrar a three js el cual es una librería que permite trabajar con modelos 3D en la web.
                Actualmente ya no trabajo en OutDev debido a circunstancias externas.
              </p>

            </section>
            <section>
              <div className="flex items-center justify-center ">

              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-5">
                <div>
                  <h2 className="text-3xl font-semibold block mt-8">
                    ¿Qué hago en mi ingeniería?
                  </h2>
                  <p className="mt-4 sm:text-xl">
                    Actualmente 07/12/22 termina el segundo semestre de ingeniería en computación, en la cual llevé mecánica una rama de la física, en la cual se me dejó hacer un análisis de un problema donde lo analizara con mecánica, en el cual me encargué de simular la gravedad de los planetas en unity, para ver más información de este proyecto puedes dar click <a className="ease-in duration-200 text-aqua-blue-100 hover:text-white font-bold" href={pdfPlanets} target="_blank" rel="noopener noreferrer">aquí.</a></p>
                    <p className="mt-2 sm:text-xl">O puedes un build de la aplicación desde el navegador dando click <a className="ease-in duration-200 text-aqua-blue-100 hover:text-white font-bold" href="https://fanciful-mandazi-f672f4.netlify.app/" target="_blank">aquí.</a></p>
                </div>
                <div className="w-auto m-auto mt-2">
                  <a href="https://fanciful-mandazi-f672f4.netlify.app/" target="_blank">
                    <img src={planets} alt="Planetas" /> 
                  </a>
                  
                </div>
                <p className="mt-4 sm:text-xl">
                  Puedes ver mi CV   
                  dando click <a className="ease-in duration-200 text-aqua-blue-100 hover:text-white font-bold" href={pdfCV} target="_blank" rel="noopener noreferrer">aquí.</a>
                </p>
              </div>
            </section>
          </article>
      </div>
    </div>
  )
}
