const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuración del servicio SMTP de Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'CotizacionM@outlook.com', // Tu dirección de correo electrónico de Outlook
    pass: 'marketconnect123', // Tu contraseña de Outlook
  },
});


app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { nombre, email, telefono, proyecto, maquinaria } = req.body;

  // Contenido del correo electrónico
  const mailOptions = {
    from: 'CotizacionM@outlook.com', // Remitente
    to: 'asalvadormartinezc@gmail.com', // Destinatario
    subject: 'Nueva Cotización',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nDetalles del Proyecto: ${proyecto}\nMaquinaria Necesaria: ${maquinaria}`,
  };

  try {
    // Envío del correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
