import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Component } from "../components/Footer";
import ButtonWhatsApp from "./ButtonWhatsApp";
import { ButtonCTA } from "./ButtonCTA";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: string;
  images: string[];
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  selectedImage,
  images,
  setSelectedImage,
}) => {
  if (!isOpen) return null;

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative max-w-9x1 max-h-3xl bg-white rounded-lg p-7">
        <button
          className="absolute top-1 right-1 text-black text-4xl z-50 focus:outline-none"
          onClick={onClose}
          style={{ color: "#0F4BAD" }}
        >
          &times;
        </button>
        <div className="relative flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain mb-4"
            style={{ maxHeight: '80vh', maxWidth: '90vw' }}
          />
          <div className="flex justify-between w-full">
            <button
              className="text-black text-4xl z-50 focus:outline-none"
              onClick={handlePrevImage}
              style={{ color: "#0F4BAD" }}
            >
              &#8249;
            </button>
            <button
              className="text-black text-4xl z-50 focus:outline-none"
              onClick={handleNextImage}
              style={{ color: "#0F4BAD" }}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailM: React.FC = () => {
  const images = [image1, image2, image3, image4, image5];
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        <section className="body-font overflow-hidden text-gray-600">
          <div className="container mx-auto px-5 py-10">
            <Breadcrumb aria-label="Default breadcrumb example">
              <BreadcrumbItem href="./Home" icon={HiHome}>
                <Link to="/">Volver</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Retroexcavadora caterpillar 420F</BreadcrumbItem>
            </Breadcrumb>
            <div className="mx-auto flex flex-wrap lg:w-4/5">
              <div className="mb-6 w-full pt-5 lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
                <h2 className="title-font text-sm tracking-widest text-gray-500">
                  TU SOLUCION EN MAQUINARIA
                </h2>
                <h1 className="title-font mb-4 text-3xl font-medium text-gray-900">
                  Retroexcavadora caterpillar 420F
                </h1>
                <div className="mb-4 flex">
                  <a className="flex-grow border-b-2 border-[#0f4bad] px-1 py-2 text-lg text-[#0f4bad]">
                    Descripción
                  </a>
                </div>
                <p className="mb-4 leading-relaxed">
                  Retroexcavadora con un peso de 8.50 toneladas, cuchara de 2.34
                  m de ancho y 1.00 m³ de capacidad. Tracción en todas las
                  ruedas y longitud de transporte de 7.50 m.
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
                  <ButtonCTA />
                </div>
              </div>

              <div className="flex w-full flex-col items-center lg:w-1/2">
                <div className="mb-4 overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(selectedImage)}
                  />
                </div>
                <div className="flex justify-between space-x-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`h-20 w-20 cursor-pointer rounded-lg object-cover transition-transform duration-300 hover:scale-110 ${selectedImage === image ? "border-4 border-blue-500" : ""}`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedImage={selectedImage}
        images={images}
        setSelectedImage={setSelectedImage}
      />
      <ButtonWhatsApp />
      <Component />
    </>
  );
};

export default DetailM;



