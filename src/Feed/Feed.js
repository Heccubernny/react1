import React, { Component } from 'react';
import StoryReel from './StoryReel/StoryReel';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

class Feed extends Component {
  render() {
    return(
      <div className="feed ">
        <StoryReel />
        <MessageSender />
        <Post
          // key={id}
          // profilePic={profilePic}
          // message={message}
          // timestamp={timestamp}
          // username={username}
          // image={image}
          profilePic='https://cdn.britannica.com/s:300x300/34/212134-050-A7289400/Lionel-Messi-2018.jpg'
          message='Hello Jose Mourinho'
          timestamp='12th Oct 2020'
          username='J.Mourinho'
          image='https://s.france24.com/media/display/fc38b2bc-b26c-11ea-b7b5-005056a964fe/w:980/p:16x9/2020-06-19T122447Z_1857599552_RC2CCH9IL1BR_RTRMADP_3_SOCCER-SPAIN-FCB-NEYMAR.webp'
          like="255"
          comment='1200'
          share="100"
        />

        <Post
          profilePic='https://cdn.britannica.com/s:300x300/34/212134-050-A7289400/Lionel-Messi-2018.jpg'
          message='Hello Jose Mourinho'
          timestamp='12th Oct 2020'
          username='J.Mourinho'
        />
      </div>
    );
  }
}

export default Feed;
