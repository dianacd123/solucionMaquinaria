
import BannerP from "../components/BannerP";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Component } from "../components/Footer";
import GalleryM from "../components/GalleryM";
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
        <M_card></M_card>
        <QuienesS></QuienesS>
        <ServicesP></ServicesP>
        <HiringProcess></HiringProcess>
        <GalleryM></GalleryM>
        <Test></Test>
        <ButtonWhatsApp></ButtonWhatsApp>
        <Component></Component>
        

    </div>
  )
}
