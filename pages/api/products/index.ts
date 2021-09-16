import type {  NextApiResponse } from 'next';

const Product = require('@/models/Product.ts');

import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      const { method } = req;

      switch(method){
        // MÉTODO GET
        case 'GET':
          try {
            const products = await Product.find();

            res.status(200).json({ success: true, data: products });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        // MÉTODO POSTt
        case 'POST':
          try {
            const product = await Product.create(req.body);

            res.status(201).json({ success: true, data: product });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }