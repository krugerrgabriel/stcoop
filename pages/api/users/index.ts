import type {  NextApiResponse } from 'next';

const User = require('@/models/User.ts');

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
            const users = await User.find();

            res.status(200).json({ success: true, data: users });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        // MÉTODO POST
        case 'POST':
          try {
            const user = await User.create(req.body);

            res.status(201).json({ success: true, data: user });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
        break;

        default:
          res.status(400).json({ success: false, error: 'Método não encontrado' });
        break;
      }
  }