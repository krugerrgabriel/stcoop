import type {  NextApiResponse } from 'next';

const Advantage = require('@/models/Advantage.ts');

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
                const advantage = await Advantage.findById(id);

                if(!advantage){
                    return res.status(400).json({ success: false, message: 'Vantagem não encontrada!' });
                }

                res.status(200).json({ success: true, advantage });
            } catch (error) {
            res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO PUT
        case 'PUT':
            try {
                const advantage = await Advantage.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!advantage){
                    return res.status(400).json({ success: false, message: 'Vantagem não encontrada!' });
                }

                res.status(200).json({ success: true, advantage });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO DELETE
        case 'DELETE':
            try {
                const deletedAdvantage = await Advantage.deleteOne({ _id: id });

                if(!deletedAdvantage){
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