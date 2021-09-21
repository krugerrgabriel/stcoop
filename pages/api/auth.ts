import type {  NextApiResponse } from 'next';

const User = require('@/models/User.ts');

import NextCors from 'nextjs-cors';

import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      await NextCors(req, res, {
          methods: ['GET', 'POST'],
          origin: '*',
          optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      });
      
      const { method } = req;
      const { email, password } = req.body;

      if(!email || !password){
        return res.status(400).json({ success: false, message: 'Os campos precisam ser preenchidos!' });
      } else{
          switch(method){
            // MÉTODO GET
            case 'POST':
              try {
                const user = await User.findOne({ email: email, password: password });
    
                if(!user){
                    return res.status(400).json({ success: false, message: 'Usuário não encontrado!' });
                }
    
                res.status(200).json({ success: true, data: user });
              } catch (error) {
                res.status(400).json({ success: false, error });
              }
            break;
    
            default:
              res.status(400).json({ success: false, error: 'Método não encontrado' });
            break;
          }
      }

  }