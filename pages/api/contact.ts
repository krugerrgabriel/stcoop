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
          user: 'test@stcoop.com.br',
          pass: process.env.MAIL_PASS,
        },
        secureConnection: false,
        tls: {
            ciphers:'SSLv3'
        }
    });

    const mailData = {
        from: 'Landing Page STCOOP',
        to: 'gabriel.sa.kruger@gmail.com',
        subject: `[CONTATO] Landing Page`,
        text: req.body.message,
        html: `<div>
            <b>Nome: </b>${req.body.name}\n
            <b>E-mail: </b>${req.body.mail}\n
            <b>Telefone: </b>${req.body.phone}\n
            <b>Motivo do Contato: </b>${req.body.motivo}\n
            <b>Mensagem: </b>${req.body.message}\n
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
