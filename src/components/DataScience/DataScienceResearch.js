// src/components/DataScienceResearch.js

import React from 'react'
import Media from 'react-bootstrap/Media'
import mini_schlmkt from '../../imgs/mini_school_markets_3.png';
import itam20_mods from '../../imgs/itam20_mods.png';
import itam20_rec from '../../imgs/itam20_rec.png';

function DataScienceResearch() {
  return (
    <ul className="list-unstyled">
      <Media as="li">
        <img
          width={120}
          height={120}
          className="mr-3"
          src={mini_schlmkt}
          alt="Generic placeholder"
        />
        <Media.Body>
          <a href="#research/school_markets"> 
          <h5 class="colored_heading_h5">Schooling Markets in Mexico</h5>
          </a>
          <p className="p_ind">
          We proposed a methodology for identifying commuting zones and schooling markets in Mexico using geospatial analysis and graph algorithms for community detection. Public policy programs could use school markets to target interventions towards enhancing education quality through school competition mechanisms. 
          This work was done with Mauricio Romero <a href="https://www.itam.mx/">(Instituto Tecnológico Autónomo de México) </a> and Paola Mejía <a href="https://www.epfl.ch/en/">(EPFL)</a>, at the Center for Economic Research <a href="http://cie.itam.mx/">(CIE) </a>.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
      <div>
      <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={itam20_mods}
          alt="Generic placeholder"
        />
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={itam20_rec}
          alt="Generic placeholder"
        />     
        </div>
        <Media.Body>
        <br />
          <h5 class="colored_heading_h5">Early Warning System of Dropouts at Undergraduate Levels</h5>
          <p className="p_ind">
          Research  assistance  to  generate  school  markets  to  understand  the  migration  mechanisms  
          of  students  among  institutions.   Responsabilities  included:  constructing  andvalidating  
          master  databasecontaining geographical information about nearly 230,000 Mexican schools With this 
          database, wegenerated spatial geometry analysis to construct commuting zones. Using graph algorithms,  
          we detected communities by utilizing bidirectional migration data of more than one million students.
          </p>
        </Media.Body>
      </Media>

    </ul>
  )
}


export default DataScienceResearch;
