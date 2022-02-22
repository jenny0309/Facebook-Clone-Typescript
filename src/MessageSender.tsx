import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './MessageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

const MessageSender = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [{ user }, dispatch] = useStateValue();

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault(); // prevent refresh after submitting the button

    // save input data on db
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageUrl,
      username: user.displayName,
    });

    // reset states
    setInput('');
    setImageUrl('');
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            className='messageSender__input'
            type='text'
            placeholder={`What's on your mind, ${user.displayName}?`}
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <input
            type='text'
            placeholder='image URL (Optional)'
            value={imageUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImageUrl(e.target.value)
            }
          />

          <button onClick={handleSubmit} type='submit'>
            Hidden Button
          </button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
