import React, { useEffect } from "react";
import BannerP from "../components/BannerP";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import Header from "../components/Header";
import { HiringProcess } from "../components/HiringProcess";
import QuienesS from "../components/QuienesS";
import ServicesP from "../components/ServicesP";
import Test from "../components/Testimonials";
import M_card from "../components/M_card";
import ProductList from "../components/ProductList";
import { Component } from "../components/Footer";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header></Header>
      <BannerP></BannerP>
      <section id="cards-section" className="py-8">
        <div className="container mx-auto px-4 text-center">
          <M_card></M_card>
        </div>
      </section>
      <QuienesS></QuienesS>
      <ServicesP></ServicesP>
      <HiringProcess></HiringProcess>
      <section id="available-machinery-section" className="py-8">
        <div className="container mx-auto sm:px-20 px-4 p-10 text-center">
          <h1 className="text-5xl font-bold text-center" style={{ color: "#fde502" }}>
            MAQUINARIA DISPONIBLE
          </h1>
          <br />
          <ProductList />
        </div>
      </section>
      <Test></Test>
      <ButtonWhatsApp></ButtonWhatsApp>
      <Component></Component>
    </div>
  );
}
