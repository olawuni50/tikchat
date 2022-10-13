import React, {useState, useEffect, useRef}  from 'react'
import {Video} from '../types';
import { NextPage } from 'next';
import moment from 'moment'
import Image from 'next/image';
import Link from 'next/link';
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi';
import {BsPlay, BsFillPlayFill, BsFillPauseFill} from "react-icons/bs"
import {GoVerified} from 'react-icons/go';
import {FaComment} from 'react-icons/fa';
import {MdFavorite} from 'react-icons/md';
import Comments from './Comments';
import useAuthStore from '../store/authStore';
import axios from 'axios';
import { BASE_URL } from '../utils';
import FrontComment from './FrontComment';


interface IProps {
    post: Video;
    // postDetails: Video
}


const VideoCard: NextPage<IProps> = ({ post }) => {
        // const [posts, setPost] = useState(postDetails);
        const [isHover, setisHover] = useState(false)
        const [playing, setPlaying] = useState(false)
        const [isVideoMuted, setIsVideoMuted] = useState(false)
        const videoRef = useRef<HTMLVideoElement>(null);

        const [showComment, setShowComment] = useState(false)
        const [comment, setComment] = useState("");
        const [isPostingComment, setIsPostingComment] = useState(false);
        const {userProfile}: any = useAuthStore();


        const onVideoPress = () => {
            if(playing) {
                videoRef?.current?.pause();
                setPlaying(false)
            }else{
                videoRef?.current?.play();
                setPlaying(true)
            }
        }

        useEffect(() => {
            if(videoRef?.current){
                videoRef.current.muted = isVideoMuted;
            }
        }, [isVideoMuted])


        // const addComment = async (e:any) => {
        //     e.preventDefault();
    
        //     if(userProfile && comment) { 
        //         setIsPostingComment(true);
    
        //         // PUT is used whenever you want to add something to the request
        //         const {data} = await axios.put(`${BASE_URL}/api/post/${post._id}`, {
        //             userId: userProfile._id,
        //             comment
        //         })
        //         setPost({...posts, comments:data.comments})
        //         setComment('');
        //         setIsPostingComment(false);
        //     }
        // }
   
    return(
        <div>
        <div className="flex  border-gray-200 pb-6">
            <div className="flex">
                <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
                    <div  className="md:w-16 md:h-16 w-10 h-10 cursor-pointer">
                    
                        <Link href={`/profile/${post.postedBy._id}`}>
                            <>
                            <Image width={62} height={62} className="rounded-full"
                            src={post.postedBy.image} alt="profile photo" layout="responsive" />
                            </>
                            </Link>
                    </div>

                    </div>

                    <Link href={`/profile/${post.postedBy._id}`} className="cursor-pointer">
                    <div className="flex-col items-center gap-2 border-b-2 border-gray-200">
                        <p className="flex gap-2 items-center md:text-md
                        font-bold text-primary cursor-pointer">{post.postedBy.userName} {''}
                        <GoVerified className="text-blue-400 text-md" />
                        </p>
                        <p className="capitalize font-medium text-xs text-gray-500
                        hidden md:block">{post.postedBy.userName} {''}</p>

                        <p className="mt-3">{post.caption}</p>
                        <p className="mt-5">{post.createdAt}</p>
                       
                    </div>
                    
                    </Link>
                    </div>  
                                                         
        </div>             
                                            

    

        <div className="lg:ml-20 flex gap-4 relative pb-6 border-b-2 w-full">
            <div className="rounded-3xl" onMouseEnter={() => setisHover(true)}
            onMouseLeave={()=> setisHover(false)}>
                <Link href={`/detail/${post._id}`}>
                    <video loop src={post.video.asset.url} className="lg:w-[600px]
                    h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl 
                    cursor-pointer bg-gray-100" ref={videoRef}> 

                        </video>

                    </Link>

                    {isHover && (
                        <div className="absolute bottom-6 cursor-pointer left-8
                        md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] 
                        md:w-[50px] p-3"> 
                            {playing ? (
                                <button onClick={onVideoPress}>
                                 <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
                                </button>
                            ): (
                                <button onClick={onVideoPress}>
                                    <BsFillPlayFill  className="text-black text-2xl lg:text-4xl"/>
                                    </button>
                            )}
                            {isVideoMuted ? (
                                <button onClick={()=>setIsVideoMuted(false)}>
                                 <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
                                </button>
                            ): (
                                <button onClick={()=>setIsVideoMuted(true)}>
                                    <HiVolumeUp  className="text-black text-2xl lg:text-4xl"/>
                                    </button>
                            )}
                        </div>
                    )}
                    {/* <div className="flex flex-col justify-between text-gray-600 text-2xl">

                        <div onClick = {() =>setShowComment((prev) =>!prev)} className="cursor-pointer mb-3">
                        {showComment ? "Comments" : <FaComment />}
                        </div>                 
                   
                    {showComment && (
                       <FrontComment comment={comment} comments={post.comments} setComment={setComment} addComment={addComment} 
                       isPostingComment={isPostingComment} />
                    )} */}

                    {/* <MdFavorite /> */}
                {/* </div> */}
                </div>
                

        </div>


        
        </div>
    )
}

// export const getServerSideProps = async({params: {id}}: {params: {id: string}}) => {

//     const {data} = await axios.get(`${BASE_URL}/api/post/${id}`)

//     return {
//         props: {postDetails: data}
//     }
// }

export default VideoCard