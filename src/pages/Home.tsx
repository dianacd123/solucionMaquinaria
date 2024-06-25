import BannerP from "../components/BannerP";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Component } from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import { HiringProcess } from "../components/HiringProcess";
import QuienesS from "../components/QuienesS";
import ServicesP from "../components/ServicesP";
import Test from "../components/Testimonials";
import M_card from '../components/M_card';


export default function Home() {
  return (
    <div>
        <Header></Header>
        <BannerP></BannerP>
        <section id="cards-section" className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-yellow-300 font-bold text-5xl">Nuestras Maquinarias</h2>
          <M_card></M_card>
        </div>
      </section>
        <QuienesS></QuienesS>
        <ServicesP></ServicesP>
        <HiringProcess></HiringProcess>
        <Gallery></Gallery>
        <Test></Test>
        <ButtonWhatsApp></ButtonWhatsApp>
        <Component></Component>
        

    </div>
  )
}
