// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import {singleUserQuery,userLikedPostsQuery,userCreatedPostsQuery} from '../../../utils/queries';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const {id}:any = req.query

    const query = singleUserQuery(id);
    const userVideoQuery = userCreatedPostsQuery(id);
    const userLikedVideosQuery = userLikedPostsQuery(id);

    const user = await client.fetch(query);
    const userVideos = await client.fetch(userVideoQuery);
    const userLikedVideos = await client.fetch(userLikedVideosQuery)

    res.status(200).json({user: user[0], userVideos, userLikedVideos})
    

    }
}
