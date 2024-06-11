const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './cred.env' });

const app = express();
const PORT = 3000;

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { nombre, email, telefono, proyecto, maquinaria } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'gsanchez@promarketconnect.com',
    subject: 'Nueva Cotización',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nDetalles del Proyecto: ${proyecto}\nMaquinaria Necesaria: ${maquinaria}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('\x1b[32m', 'Correo enviado:', info.messageId);
    res.status(200).send('Correo enviado con éxito'); 
  } catch (error) {
    console.error('\x1b[31m', 'Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo'); 
  }
});

app.listen(PORT, () => {
  console.log('\x1b[36m', `Servidor ejecutándose en el puerto ${PORT}`);
});
//hola hola