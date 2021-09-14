// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {  NextApiResponse } from 'next';

type Data = {
    body: {
        name: string;
        mail: string;
        phone: string;
        motivo: string;
        message: string;
    }
}

export default function handler(
  req: Data,
  res: NextApiResponse
) {
    let nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.kinghost.net",
        auth: {
          user: 'sender@stcoop.com.br',
          pass: process.env.MAIL_PASS,
        },
        secureConnection: false,
        tls: {
            ciphers:'SSLv3'
        }
    });

    const mailData = {
        from: 'sender@stcoop.com.br',
        to: 'gabriel.sa.kruger@gmail.com',
        subject: `[CONTATO] Landing Page`,
        text: req.body.message,
        html: `<div>
            <b>NOME: </b>${req.body.name}\n<br>
            <b>E-MAIL: </b>${req.body.mail}\n<br>
            <b>TELEFONE: </b>${req.body.phone}\n<br>
            <b>MOTIVO DO CONTATO: </b>${req.body.motivo}\n<br>
            <b>MENSAGEM: </b>${req.body.message}\n<br>
        </div>`
    }
    
    transporter.sendMail(mailData, function (err: string, info: string) {
        if(err){
            console.log(err);
        } else{
            console.log(info);
        }
    });

    res.status(200).send({ error: 'none' });
}
