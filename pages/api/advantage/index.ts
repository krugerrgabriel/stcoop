import type {  NextApiResponse } from 'next';

const Advantage = require('@/models/Advantage.ts');

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
            const advantage = await Advantage.find();

            res.status(200).json({ success: true, data: advantage });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        // MÉTODO POST
        case 'POST':
          try {

            const advantage = await Advantage.create(req.body);

            res.status(201).json({ success: true, data: advantage });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }