// Vercel serverless function: ontvangt het contactformulier en mailt het door naar marinka@maepassion.nl.
// TODO: e-mailverzending nog aan te sluiten op een provider (bijv. Resend, of SMTP via TransIP).
// Benodigde env vars in Vercel-project instellen, bijv.:
//   EMAIL_TO=marinka@maepassion.nl
//   RESEND_API_KEY=... (of SMTP_HOST/SMTP_USER/SMTP_PASS)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Naam, e-mail en bericht zijn verplicht.' });
  }

  // Plaatshouder: hier komt de daadwerkelijke e-mailverzending.
  // Voorbeeld met Resend (npm i resend) zodra RESEND_API_KEY is ingesteld:
  //
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'MAE PASSION website <noreply@maepassion.nl>',
  //   to: process.env.EMAIL_TO,
  //   reply_to: email,
  //   subject: `Nieuw contactformulier van ${name}`,
  //   text: message,
  // });

  console.log('Contactformulier ontvangen:', { name, email, message });

  return res.status(200).json({ ok: true });
}
