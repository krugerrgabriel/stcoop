import type {  NextApiResponse } from 'next';

const Locations = require('@/models/Locations.ts');

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
            const locations = await Locations.find();

            res.status(200).json({ success: true, data: locations });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        // MÉTODO POST
        case 'POST':
          try {

            const locations = await Locations.create(req.body);

            res.status(201).json({ success: true, data: locations });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }