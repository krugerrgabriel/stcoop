import type {  NextApiResponse } from 'next';

const News = require('@/models/News.ts');

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
            const items = await News.find();

            res.status(200).json({ success: true, data: items });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        // MÉTODO POST
        case 'POST':
          try {

            const item = await News.create(req.body);

            res.status(201).json({ success: true, data: item });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }