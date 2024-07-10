import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import image from "/src/assets/B416FNB.png";
import Header from "./Header";
import { Component } from "./Footer";
import ButtonWhatsApp from "./ButtonWhatsApp";
import { ButtonCTA } from "./ButtonCTA";

export default function DetailM3() {
  const images = [image ];
  const [] = useState(images[0]);
  
  return (
    <html>
      <Header></Header>
      <body className="bg-white">
        <section className="body-font overflow-hidden text-gray-600">
          <div className="container mx-auto px-5 py-10">
          <Breadcrumb aria-label="Default breadcrumb example">
              <BreadcrumbItem href="./Home" icon={HiHome}>
                <Link to="/">Volver</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Retroexcavadora Caterpillar 416F</BreadcrumbItem>
            </Breadcrumb>
            <div className="mx-auto flex flex-wrap lg:w-4/5">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
                <h2 className="title-font text-sm tracking-widest text-gray-500">
                  TU SOLUCION EN MAQUINARIA
                </h2>
                <h1 className="title-font mb-4 text-3xl font-medium text-gray-900">
                  Retroexcavadora caterpillar 416F
                </h1>
                <div className="mb-4 flex">
                  <a className="flex-grow border-b-2 border-indigo-500 px-1 py-2 text-lg text-indigo-500">
                    Descripción
                  </a>
                </div>
                <p className="mb-4 leading-relaxed">
                  Retroexcavadora con un peso de 7.21 toneladas, cuchara de 2.26
                  m de ancho y 0.76 m³ de capacidad. Tracción en todas las
                  ruedas y longitud de transporte de 7.08 m.{" "}
                </p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Peso Operacional</span>
                  <span className="ml-auto text-gray-900">
                    Aprox. 21,500 kg (47,400 lbs)
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Motor</span>
                  <span className="ml-auto text-gray-900">
                    Motor CAT C6.6 ACERT
                  </span>
                </div>
                <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                  <span className="text-gray-500">Potencia</span>
                  <span className="ml-auto text-gray-900">4</span>
                </div>
                <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                  <span className="text-gray-500">Capacidad del Balde</span>
                  <span className="ml-auto text-gray-900">4</span>
                </div>
                <div className="flex">
                  <span className="title-font hidden text-2xl font-medium text-gray-900">
                    $58.00
                  </span>
                  <ButtonCTA></ButtonCTA>
                  <button className="ml-4 hidden h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200  p-0 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="hidden h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <img
                alt="ecommerce"
                className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
                src={image}
              />
            </div>
          </div>
        </section>
      </body>
      <ButtonWhatsApp></ButtonWhatsApp>
      <Component></Component>
    </html>
  );
}
