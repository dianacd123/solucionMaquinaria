
import BannerP from "../components/BannerP";
import { Component } from "../components/Footer";
import GalleryM from "../components/GalleryM";
import Header from "../components/Header";
import { HiringProcess } from "../components/HiringProcess";
import QuienesS from "../components/QuienesS";
import ServicesP from "../components/ServicesP";
import Test from "../components/Testimonials";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <BannerP></BannerP>
        <QuienesS></QuienesS>
        <ServicesP></ServicesP>
        <HiringProcess></HiringProcess>
        <GalleryM></GalleryM>
        <Test></Test>
        <Component></Component>
    </div>
  )
}
