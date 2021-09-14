import type {  NextApiResponse } from 'next';

const User = require('@/models/User.ts');

import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      const { method } = req;
      const { email, password } = req.body;

      if(!email || !password){
        return res.status(400).json({ success: true, message: 'Os campos precisam ser preenchidos!' });
      } else{
          switch(method){
            // MÉTODO GET
            case 'GET':
              try {
                const user = await User.find({ email: email, password: password });
    
                if(!user){
                    return res.status(400).json({ success: true, message: 'Usuário não encontrado!' });
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