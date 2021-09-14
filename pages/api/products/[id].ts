import type {  NextApiResponse } from 'next';

const Product = require('@/models/Product.ts');

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
                const product = await Product.findById(id);

                if(!product){
                    return res.status(400).json({ success: true, message: 'Produto não encontrado!' });
                }

                res.status(200).json({ success: true, product });
            } catch (error) {
            res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO PUT
        case 'PUT':
            try {
                const product = await Product.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!product){
                    return res.status(400).json({ success: true, message: 'Produto não encontrado!' });
                }

                res.status(200).json({ success: true, product });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
        break;

        // MÉTODO DELETE
        case 'DELETE':
            try {
                const deletedProduct = await Product.deleteOne({ _id: id });

                if(!deletedProduct){
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