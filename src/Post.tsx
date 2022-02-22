import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

export interface PostProps {
  id: string
  profilePic: string;
  image?: string;
  username: string;
  timestamp?: any;
  message: string;
}

const Post = ({
  profilePic,
  image,
  username,
  timestamp,
  message,
}: PostProps) => {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar className='post__avatar' src={profilePic} />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp).toDateString()}</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      <div className='post__image'>
        <img src={image} alt='' />
      </div>

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
