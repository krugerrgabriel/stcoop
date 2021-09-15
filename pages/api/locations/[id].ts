import type {  NextApiResponse } from 'next';

const Locations = require('@/models/Locations.ts');

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
                const location = await Locations.findById(id);

                if(!location){
                    return res.status(400).json({ success: false, message: 'Locação não encontrada!' });
                }

                res.status(200).json({ success: true, location });
            } catch (error) {
            res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO PUT
        case 'PUT':
            try {
                const location = await Locations.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!location){
                    return res.status(400).json({ success: false, message: 'Locação não encontrada!' });
                }

                res.status(200).json({ success: true, location });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO DELETE
        case 'DELETE':
            try {
                const deletedLocation = await Locations.deleteOne({ _id: id });

                if(!deletedLocation){
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