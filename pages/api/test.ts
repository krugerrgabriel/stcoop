// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { useFetch } from './lib/fetcher';

type Data = {
  name: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    const test = process.env.MONGODB_DB || '';

    const response = await fetch('https://api.github.com/users/krugerrgabriel');
    const data = await response.json();

    res.status(200).json({ data });
}

export default handler;
