import type {  NextApiResponse } from 'next';

import NextCors from 'nextjs-cors';

const Product = require('@/models/Product.ts');

import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      const { method } = req;

      await NextCors(req, res, {
        methods: ['GET', 'POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

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

        // MÉTODO POST
        case 'POST':
          try {
            const product = await Product.create(req.body);

            res.status(201).json({ success: true, data: product });
          } catch (error) {
            res.json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }