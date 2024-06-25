const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './cred.env' });

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); 
app.use(bodyParser.json());

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error al conectar con el servidor de correo:', error);
  } else {
    console.log('Servidor de correo conectado:', success);
  }
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { nombre, email, telefono, proyecto, maquinaria, tipo } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'asalvadormartinezc@gmail.com',
    subject: 'Nueva Cotización',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nDetalles del Proyecto: ${proyecto}\nMaquinaria Necesaria: ${maquinaria}\nTipo de Solicitud: ${tipo}`,
  };

 
  try {
   
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
