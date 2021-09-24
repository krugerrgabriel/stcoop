import type {  NextApiResponse } from 'next';

import nextConnect from 'next-connect';
import multer from 'multer';
import NextCors from 'nextjs-cors';
import Cors from 'cors'
import initMiddleware from '../../utils/initMiddleware'

import dbConnect from "@/utils/dbConnect";

dbConnect();

const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only allow requests with GET, POST and OPTIONS
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  )

const upload = multer({
    storage: multer.diskStorage({
      destination: './public/uploads',
      filename: (req, file, cb) => cb(null, file.originalname),
    }),
  });

const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res: NextApiResponse) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

const uploadMiddleware = upload.array('theFiles');

apiRoute.use(uploadMiddleware);

apiRoute.post(async (req, res: NextApiResponse) => {
    await cors(req, res);
    // @ts-ignore
    await NextCors(req, res, {
        methods: ['GET', 'POST'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};