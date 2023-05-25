import './index.scss';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import {Loader} from 'react-loaders';

const About = () => {
  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>About me</h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a tech enthusiast,
          content creator, ukulele lover!!!
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faYoutube} color='#DD0031'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About