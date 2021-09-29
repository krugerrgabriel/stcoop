import type {  NextApiResponse, NextApiRequest } from 'next';

import nextConnect from 'next-connect';
import multer from 'multer';
import NextCors from 'nextjs-cors';

import dbConnect from "@/utils/dbConnect";

dbConnect();

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

apiRoute.use(async (req: NextApiRequest, res, next) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      });
      next();
});

apiRoute.post((req, res: NextApiResponse) => {
    res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};