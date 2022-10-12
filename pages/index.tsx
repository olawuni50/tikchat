import axios from 'axios'
import type { NextPage } from 'next'
import React from 'react'
import Layout from "../components/Layout"
import NoResults from '../components/NoResults';
import VideoCard from '../components/VideoCard';
import {Video} from '../types'
import { BASE_URL } from '../utils';

interface IProps {
  videos: Video[];
}

const Home: NextPage<IProps> = ({ videos }) => {
  console.log(videos)
  
  return (
    <div>
    <Layout title="TikTok" />
    <div className='flex flex-col gap-10 videos h-full overflow-scroll'>
      {videos.length
        ? videos?.map((video: Video) => (
          <VideoCard post={video}  key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};

export default Home
