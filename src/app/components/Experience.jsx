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
                Trabajé como desarrollador web 2 años (2021-enero 2022-noviembre) en OutDev una empresa emergente de Guadalajara, Jalisco, en la cual me encargaba de dar mantenimiento a aplicaciones web, desde iniciarlas hasta darles mantenimiento. Estas aplicaciones estaban desarrolladas en React y Django. Además, en algunas ocasiones realizaba despliegues en los servidores. Después de quedar en la universidad, renuncié a la empresa, pero regresé tiempo después debido a necesidades económicas. En mi regreso, me encargué de desarrollar aplicaciones de realidad virtual en Unity, las cuales estaban destinadas a brindar experiencias inmersivas para exponer arte. Posteriormente, debido a la necesidad, nos vimos en la situación de migrar a Three.js, una biblioteca que permite trabajar con modelos 3D en la web.
Actualmente, ya no trabajo en OutDev debido a circunstancias externas.
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
                    Actualmente, el 07/12/22 termina el segundo semestre de ingeniería en computación, en el cual llevé mecánica, una rama de la física. Se me pidió hacer un análisis de un problema, en el cual me encargué de simular la gravedad de los cuerpos celestes con Unity. Para obtener más información sobre este proyecto, puedes hacer clic <a className="ease-in duration-200 text-aqua-blue-100 hover:text-white font-bold" href={pdfPlanets} target="_blank" rel="noopener noreferrer">aquí </a>o en la imagen para tener acceso al build del proyecto.</p>
                </div>
                <div className="w-auto m-auto mt-2">
                  <a href="https://fanciful-mandazi-f672f4.netlify.app/" target="_blank">
                    <img src={planets} alt="Planetas" /> 
                  </a>
                  
                </div>
                <p className="mt-4 sm:text-xl">
                  Puedes ver mi CV   
                  dando clic <a className="ease-in duration-200 text-aqua-blue-100 hover:text-white font-bold" href={pdfCV} target="_blank" rel="noopener noreferrer">aquí.</a>
                </p>
              </div>
            </section>
          </article>
      </div>
    </div>
  )
}
