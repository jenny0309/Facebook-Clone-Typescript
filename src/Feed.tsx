import React, { useState, useEffect } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';
import { PostProps } from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot: any) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map((post: { data: PostProps }) => (
        <Post
          id={post.data.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
