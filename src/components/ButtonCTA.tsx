import { Button, Modal } from "flowbite-react";
import { useRef, useState } from "react";

export function ButtonCTA() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gsanchez@promarketconnect.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        },
      );

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Cotización enviada con éxito",
        });
        setOpenModal(false);
      } else {
        setNotification({
          type: "error",
          message: "Error al enviar la cotización",
        });
      }

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch (error) {
      setNotification({
        type: "error",
        message: "Error al enviar la cotización",
      });
      console.error("Error:", error);

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  return (
    <>
      <Button className="bg-[#0f4bad]" onClick={() => setOpenModal(true)}>
        COTIZA AHORA
      </Button>
      <Modal
        show={openModal}
        size="2xl"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="mx-auto max-w-4xl py-10 pb-0 pt-0">
            <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
              Solicita una Cotización
            </h1>
            <form
              className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="nombre"
                >
                  Nombre Completo
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre Completo"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Correo Electrónico"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Teléfono"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="proyecto"
                >
                  Detalles del Proyecto
                </label>
                <textarea
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="proyecto"
                  name="proyecto"
                  rows={4}
                  placeholder="Describe tu proyecto y necesidades"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="maquinaria"
                >
                  Tipo de Maquinaria Necesaria
                </label>
                <select
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="maquinaria"
                  name="maquinaria"
                >
                  <option>Excavadora</option>
                  <option>Grúa</option>
                  <option>Montacargas</option>
                  <option>Tractor</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="tipo"
                >
                  Tipo de Solicitud
                </label>
                <select
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="tipo"
                  name="tipo"
                >
                  <option>Renta</option>
                  <option>Compra</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  type="submit"
                >
                  Enviar Cotización
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {notification && (
        <div
          className={`fixed left-0 right-0 top-0 z-50 bg-${notification.type === "success" ? "green" : "red"}-500 py-4 text-center text-white`}
        >
          {notification.message}
        </div>
      )}
    </>
  );
}
