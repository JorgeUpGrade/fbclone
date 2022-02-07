import React from 'react';
import "./StoryReel.css"
import Story from './Story';

function StoryReel() {
  return <div className='storyReel'>
                <Story image="https://cdn140.picsart.com/327464379069201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256"
            title="Andrea Tabares" />

            <Story image="https://api.time.com/wp-content/uploads/2015/02/will-smith1.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/800px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg"
            title="Will Smith" />

            <Story image="https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/315934060092201.jpg?type=webp&to=crop&r=256"
            title="Bruno Isla" />

            <Story image="https://cdn131.picsart.com/325488229053201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn141.picsart.com/325429489094201.jpg?type=webp&to=crop&r=256"
            title="Photoshop Queen" />
            
              <Story image="https://static3.abc.es/media/deportes/2022/01/31/nadal-kMgB--620x349@abc.jpg"
            profileSrc="https://cope-cdnmed.agilecontent.com/resources/jpg/1/0/1603465773101.jpg"
            title="Rafa Nadal" />
            

  </div>;
}

export default StoryReel;
