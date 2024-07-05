import BannerP from "../components/BannerP";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Component } from "../components/Footer";
import Header from "../components/Header";
import { HiringProcess } from "../components/HiringProcess";
import QuienesS from "../components/QuienesS";
import ServicesP from "../components/ServicesP";
import Test from "../components/Testimonials";
import M_card from "../components/M_card";
import ProductList from "../components/ProductList";

export default function Home() {
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
      <div className="container mx-auto px-4 text-center">
        <h1 style={{ color: "#fde502" }} className="text-5xl font-bold">
          MAQUINARIA DISPONIBLE
        </h1>
        <br></br>
        <ProductList />
      </div>
      <Test></Test>
      <ButtonWhatsApp></ButtonWhatsApp>
      <Component></Component>
    </div>
  );
}
