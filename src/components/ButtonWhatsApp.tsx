import { Button } from 'flowbite-react';
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsApp() {
    const phoneNumber = '+52 55 87674615'; // Replace with your actual WhatsApp number
    const message = 'Hola! Me gustaría obtener más información.'; // Replace with your desired message
  
    const WhatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    return (
      <Button  size="lg" target='blank'
        className='fixed bottom-0 right-0 bg-[#25D366]
         text-white font-bold p-2 m-8 rounded-full
          z-50 hover:bg-[#209e4e]' 
        href={WhatsAppLink} color="success">
        <BsWhatsapp className='h-10 w-10'></BsWhatsapp>
      </Button>
    );
  };

