const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local instead of using dotenv
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length === 2) {
        process.env[parts[0].trim()] = parts[1].trim();
      }
    });
  }
}

loadEnv();

async function testEmail() {
  console.log('--- DIAGNÓSTICO DE CORREO (BREVO) ---');
  console.log('Host:', process.env.SMTP_HOST);
  console.log('Port:', process.env.SMTP_PORT);
  console.log('User:', process.env.SMTP_USER);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });

  const mailOptions = {
    from: '"Prueba Técnica" <pcomunicaciones@agricolas.co>',
    to: 'pcomunicaciones@agricolas.co',
    subject: 'PRUEBA DE DIAGNÓSTICO - Riopaila',
    text: 'Si recibes este correo, el sistema de envío está funcionando correctamente.',
    html: '<b>Si recibes este correo, el sistema de envío está funcionando correctamente.</b>'
  };

  try {
    console.log('\nEnviando correo de prueba...');
    const info = await transporter.sendMail(mailOptions);
    console.log('\n¡ÉXITO!');
    console.log('ID del mensaje:', info.messageId);
    console.log('Respuesta del servidor:', info.response);
  } catch (error) {
    console.error('\n¡ERROR DETECTADO!');
    console.error('Mensaje:', error.message);
    console.error('Código:', error.code);
    console.error('Respuesta SMTP:', error.response);
  }
}

testEmail();
