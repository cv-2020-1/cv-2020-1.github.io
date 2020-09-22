
import React from "react";
import CafeWall from '../algorithms/illusions/cafeWall.js';
import Ebbinghaus from '../algorithms/illusions/Ebbinghaus';
 
export default () => {

    return(
      <div className="ml-5 mr-5 my-3">
        <div>
          <h1>Ilusiones</h1>
          <h2>Cafe Wall</h2>
          <p>La ilusión de la pared de la cafetería es un tipo de ilusión óptico-geométrica, en la que líneas rectas paralelas  que dividien líneas entre 
            filas formadas por baldosas blancas y negras alternas y escalonadas, aparentan estar inclinadas.</p>
          <CafeWall />
          <h2>Ebbinghaus</h2>
          <p>La ilusión de Ebbinghaus es una ilusión óptica que altera la percepción de las dimensiones relativas. 
            En la versión más conocida de la ilusión, dos círculos de la misma medida son colocados cercanos uno a otro 
            y son circundados, uno por círculos de un tamaño mayor y el otro por círculos de menor tamaño; el primer 
            círculo central parecerá más pequeño que el otro</p>
          <Ebbinghaus />
        </div>
      </div>
    )
};
