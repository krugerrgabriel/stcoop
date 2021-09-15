import type {  NextApiResponse } from 'next';

import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      console.log(req.body);
      res.json({ req: req.body, success: true });
  }