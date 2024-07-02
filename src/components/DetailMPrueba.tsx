import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import { Component } from "./Footer";
import ButtonWhatsApp from "./ButtonWhatsApp";
import { ButtonCTA } from "./ButtonCTA";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';

export default function DetailMPrueba() {
  const images = [image1, image2, image3, image4, image5];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <Header />
      <body className="bg-white">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <Breadcrumb aria-label="Default breadcrumb example">
              <BreadcrumbItem href="./Home" icon={HiHome}>
              <Link to="/">Volver</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Retroexcavadora caterpillar 420F</BreadcrumbItem>
            </Breadcrumb>
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 pt-5 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">TU SOLUCION EN MAQUINARIA</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Retroexcavadora caterpillar 420F</h1>
                <div className="flex mb-4">
                  <a className="flex-grow text-[#0f4bad] border-b-2 border-[#0f4bad] py-2 text-lg px-1">Descripción</a>
                </div>
                <p className="leading-relaxed mb-4">Retroexcavadora con un peso de 8.50 toneladas, cuchara de 2.34 m de ancho y 1.00 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.50 m.</p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Peso Operacional</span>
                  <span className="ml-auto text-gray-900">Aprox. 21,500 kg (47,400 lbs)</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Motor</span>
                  <span className="ml-auto text-gray-900">Motor CAT C6.6 ACERT</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Potencia</span>
                  <span className="ml-auto text-gray-900">4</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Capacidad del Balde</span>
                  <span className="ml-auto text-gray-900">4</span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900 hidden">$58.00</span>
                  <ButtonCTA />
                  <button className="rounded-full w-10 h-10 hidden bg-gray-200 p-0 border-0 items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 hidden" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 w-full flex flex-col items-center pt-10">
                <div className="mb-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex space-x-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${selectedImage === image ? 'border-4 border-blue-500' : ''}`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
      <ButtonWhatsApp />
      <Component />
    </>
  );
}
