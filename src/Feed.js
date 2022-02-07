import React from 'react';
import "./Feed.css"
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

function Feed() {
  return <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post profilePic="https://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
          message="Wow, great work!"
          timestamp="THis is the timestamp"
          username="Mark Zuckerberg"
          image="https://i.insider.com/617c58bf23745d00182449de?width=1200&format=jpeg"
        />
         <Post profilePic="https://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
          message="Wow, great work!"
          timestamp="THis is the timestamp"
          username="Mark Zuckerberg"
          image="https://i.insider.com/617c58bf23745d00182449de?width=1200&format=jpeg"
        />
        <Post />
  </div>;
}

export default Feed;
 

