import { Button, Modal } from "flowbite-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function ButtonCTA() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nombreInputRef = useRef<HTMLInputElement>(null);
  const telefonoInputRef = useRef<HTMLInputElement>(null);
  const proyectoInputRef = useRef<HTMLTextAreaElement>(null);
  const maquinariaInputRef = useRef<HTMLSelectElement>(null);
  const tipoInputRef = useRef<HTMLSelectElement>(null);

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newErrors: { [key: string]: string } = {};
    if (!nombreInputRef.current?.value) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    if (!emailInputRef.current?.value) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputRef.current.value)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!telefonoInputRef.current?.value) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(telefonoInputRef.current.value)) {
      newErrors.telefono = "El teléfono solo debe contener números";
    }
    if (!proyectoInputRef.current?.value) {
      newErrors.proyecto = "Los detalles del proyecto son obligatorios";
    }
    if (!maquinariaInputRef.current?.value) {
      newErrors.maquinaria = "El tipo de maquinaria es obligatorio";
    }
    if (!tipoInputRef.current?.value) {
      newErrors.tipo = "El tipo de solicitud es obligatorio";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gsanchez@promarketconnect.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
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
      <motion.div
        whileHover={{ x: 10 }} // Mueve el botón a la derecha 10px al hacer hover
        whileTap={{ scale: 0.9 }}
      >
        <Button
          className="transition duration-500 font-bold bg-[#0f4bad]"
          onClick={() => setOpenModal(true)}
        >
          COTIZA AHORA
        </Button>
      </motion.div>
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
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center text-4xl font-bold text-gray-800"
            >
              Solicita una Cotización
            </motion.h1>
            <form
              className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
              onSubmit={handleSubmit}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="nombre"
                >
                  Nombre Completo
                </label>
                <input
                  ref={nombreInputRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre Completo"
                />
                {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  ref={emailInputRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Correo Electrónico"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  ref={telefonoInputRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Teléfono"
                />
                {errors.telefono && <p className="text-red-500 text-xs">{errors.telefono}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="proyecto"
                >
                  Detalles del Proyecto
                </label>
                <textarea
                  ref={proyectoInputRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="proyecto"
                  name="proyecto"
                  rows={4}
                  placeholder="Describe tu proyecto y necesidades"
                ></textarea>
                {errors.proyecto && <p className="text-red-500 text-xs">{errors.proyecto}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="maquinaria"
                >
                  Tipo de Maquinaria Necesaria
                </label>
                <select
                  ref={maquinariaInputRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="maquinaria"
                  name="maquinaria"
                >
                  <option value="">Seleccione una opción</option>
                  <option>Excavadora</option>
                  <option>Grúa</option>
                  <option>Montacargas</option>
                  <option>Tractor</option>
                  <option>Otro</option>
                </select>
                {errors.maquinaria && <p className="text-red-500 text-xs">{errors.maquinaria}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="tipo"
                >
                  Tipo de Solicitud
                </label>
                <select
                  ref={tipoInputRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="tipo"
                  name="tipo"
                >
                  <option value="">Seleccione una opción</option>
                  <option>Renta</option>
                  <option>Compra</option>
                </select>
                {errors.tipo && <p className="text-red-500 text-xs">{errors.tipo}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between"
              >
                <button
                  className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  type="submit"
                >
                  Enviar Cotización
                </button>
              </motion.div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed left-0 right-0 top-0 z-50 bg-${
            notification.type === "success" ? "green" : "red"
          }-500 py-4 text-center text-white`}
        >
          {notification.message}
        </motion.div>
      )}
    </>
  );
}
