
import BannerP from "../components/BannerP";
import { Component } from "../components/Footer";
import GalleryM from "../components/GalleryM";
import Header from "../components/Header";
import Test from "../components/Testimonials";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <BannerP></BannerP>
        <GalleryM></GalleryM>
        <Test></Test>
        <Component></Component>
    </div>
  )
}
