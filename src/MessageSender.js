import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React, { useState } from 'react';
import "./MessageSender.css"

function MessageSender() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setInput("");
            setImageUrl("");
        };

  return <div className='messagesender'>
  <div className='messagesender_top'>
    <Avatar />
    <form>
        <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            className='messagesender_input'
            placeholder={`What's on your mind?`} />
        <input 
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)} 
        placeholder='image URL {Optional' />
        <button onClick={handleSubmit} type="submit">
            Hidden Submit
        </button>
    </form>
  </div>

    <div className='messagesender_bottom'>
    <div className="messageSender_option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
        </div>
        </div>
  </div>;
}

export default MessageSender;
