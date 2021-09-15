import type {  NextApiResponse } from 'next';

const Faq = require('@/models/Faq.ts');

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
                const faq = await Faq.findById(id);

                if(!faq){
                    return res.status(400).json({ success: false, message: 'Faq não encontrada!' });
                }

                res.status(200).json({ success: true, faq });
            } catch (error) {
            res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO PUT
        case 'PUT':
            try {
                const faq = await Faq.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!faq){
                    return res.status(400).json({ success: false, message: 'Faq não encontrada!' });
                }

                res.status(200).json({ success: true, faq });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO DELETE
        case 'DELETE':
            try {
                const deletedFaq = await Faq.deleteOne({ _id: id });

                if(!deletedFaq){
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