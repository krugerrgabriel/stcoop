import type {  NextApiResponse } from 'next';

const User = require('@/models/User.ts');

import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      const {
          query: { id },
          method
      } = req;

      switch(method){
          // MÉTODO GET
        case 'GET':
            try {
                const user = await User.findById(id);

                if(!user){
                    return res.status(400).json({ success: false, message: 'Usuário não encontrado!' });
                }

                res.status(200).json({ success: true, user });
            } catch (error) {
            res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO PUT
        case 'PUT':
            try {
                const user = await User.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!user){
                    return res.status(400).json({ success: false, message: 'Usuário não encontrado!' });
                }

                res.status(200).json({ success: true, user });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO DELETE
        case 'DELETE':
            try {
                const deletedUser = await User.deleteOne({ _id: id });

                if(!deletedUser){
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {}});
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }