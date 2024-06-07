import { Button, Modal } from "flowbite-react";
import { useRef, useState } from "react";

export function ButtonCTA() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      nombre: formData.get('nombre') as string,
      email: formData.get('email') as string,
      telefono: formData.get('telefono') as string,
      proyecto: formData.get('proyecto') as string,
      maquinaria: formData.get('maquinaria') as string,
    };

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Cotización enviada con éxito');
        setOpenModal(false);
      } else {
        alert('Error al enviar la cotización');
      }
    } catch (error) {
      alert('Error al enviar la cotización');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Button className="bg-[#0f4bad]" onClick={() => setOpenModal(true)}>COTIZA AHORA</Button>
      <Modal show={openModal} size="2xl" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="max-w-4xl mx-auto py-10 pt-0 pb-0 ">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Solicita una Cotización</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre Completo</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" name="nombre" type="text" placeholder="Nombre Completo" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electrónico</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Correo Electrónico" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telefono" name="telefono" type="tel" placeholder="Teléfono" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Detalles del Proyecto</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proyecto" name="proyecto" rows={4} placeholder="Describe tu proyecto y necesidades"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maquinaria">Tipo de Maquinaria Necesaria</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maquinaria" name="maquinaria">
                  <option>Excavadora</option>
                  <option>Grúa</option>
                  <option>Montacargas</option>
                  <option>Tractor</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar Cotización</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
