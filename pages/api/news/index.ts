import type {  NextApiResponse } from 'next';

const News = require('@/models/News.ts');

import NextCors from 'nextjs-cors';

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
            const items = await News.find();

            res.status(200).json({ success: true, data: items });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        // MÉTODO POST
        case 'POST':
          try {

            const item = await News.create(req.body.data);

            res.status(201).json({ success: true, data: item });
          } catch (error) {
            res.json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }