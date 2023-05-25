import './index.scss';
import {Loader} from 'react-loaders'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ewh6ff', 'template_wlq6mih', refForm.current, 's0_iCObp1sgrGTtXL')
      .then(
        (result) => {
          alert('Message sent successfully!');
          window.location.reload(false)
      }, (error) => {
        alert('Failed to send the message');
      });
  };

  const customIcon = new Icon({
    iconUrl: "/icons8-select-24.png",
    iconSize: [33, 33]
  })

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>Contact me</h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required/>
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required/>
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required/>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Etisha Garg,
          <br/>
          India,
          <br/>
          Raj Nagar Extension, Ghaziabad <br/>
          <span>gargetisha@gmail.com</span>
        </div>
        <div id = "map" className='map-wrap'>
          <MapContainer center={[28.6991, 77.4304]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            <Marker position={[28.6991, 77.4304]} pinColor = {"blue"} icon={customIcon}>
              <Popup>
                Etisha Garg lives here :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Contact