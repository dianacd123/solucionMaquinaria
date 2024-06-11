import React from 'react';
import Card from '../components/S_card';
import imagen2 from '../assets/Imagen2.jpg';
import imagen3 from '../assets/Imagen3.jpg';
import imagen4 from '../assets/Imagen4.jpg';

// Definición del tipo para el estilo
const estiloH1: React.CSSProperties = {
    border: '2px solid #fde502',
    padding: '15px',
    backgroundColor: '#fde502', // Fondo amarillo claro
};

const ServicesP: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-[#0B0A09] p-20 sm:flex-row sm:h-auto">
            <section className="portafolio">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-black text-center md:text-5xl" style={estiloH1}>
                        Nuestros Servicios
                    </h2>
                    <br />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card
                            title="Alquiler de Maquinaria"
                            imageSrc={imagen2}
                            description1="Ponemos a disposición de nuestros clientes una extensa flota de maquinaria, incluyendo excavadoras, grúas, montacargas, tractores, y más, para cumplir con sus requerimientos específicos de construcción y operaciones industriales."
                        />
                        <Card
                            title="Asesoramiento Profesional"
                            imageSrc={imagen3}
                            description1="Nuestro equipo de expertos está disponible para asesorar a nuestros clientes en la selección de la maquinaria más adecuada para sus proyectos, teniendo en cuenta sus necesidades técnicas, presupuesto y plazos de entrega."
                        />
                        <Card
                            title="Mantenimiento y Soporte Técnico"
                            imageSrc={imagen4}
                            description1="Mantenemos nuestras máquinas en óptimas condiciones a través de un riguroso programa de mantenimiento preventivo, y nuestro equipo de técnicos especializados está disponible para brindar soporte técnico en caso de cualquier eventualidad durante el período de alquiler."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesP;

