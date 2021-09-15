import type {  NextApiResponse } from 'next';

const News = require('@/models/News.ts');

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
                const item = await News.findById(id);

                if(!item){
                    return res.status(400).json({ success: false, message: 'Notícia não encontrada!' });
                }

                res.status(200).json({ success: true, item });
            } catch (error) {
            res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO PUT
        case 'PUT':
            try {
                const item = await News.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!item){
                    return res.status(400).json({ success: false, message: 'Notícia não encontrada!' });
                }

                res.status(200).json({ success: true, item });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO DELETE
        case 'DELETE':
            try {
                const deletedItem = await News.deleteOne({ _id: id });

                if(!deletedItem){
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