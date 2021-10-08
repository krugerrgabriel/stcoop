import type {  NextApiResponse } from 'next';

import NextCors from 'nextjs-cors';

export default async function handler(
    req,
    res: NextApiResponse
  ) {
      await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      });
      
      res.json({ data: 'vai se fuder seu gibbão!' });

  }