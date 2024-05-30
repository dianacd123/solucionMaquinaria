import { ButtonCTA } from "./ButtonCTA";

export default function GalleryM() {
  return (
    
<div className="bg-[#0B0A09] p-20">
  <div className="flex justify-center mb-8">
    <h1 className="text-[#FDE502] font-bold text-5xl">MAQUINARIA DISPONIBLE</h1>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
      </div>
    </div>
  </div>
  <div className="flex justify-center m-8">
    <ButtonCTA></ButtonCTA>
  </div>
  
</div>


  )
}
