import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import {  ExpandMoreOutlined, HouseOutlined } from '@material-ui/icons';
// import { render } from '@testing-library/react';

function Post ({ profilePic, image, username, timestamp, message, like, comment, share })  {
  
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>{ timestamp }</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__actionView">
        {/* <div className="post__leftSide"> */}
        <div className="post__likeView">
          <HouseOutlined />
          <p>{ like} Likes</p>
        </div>
        {/* </div> */}
        
        {/* <div className="rightSide"> */}
        <div className="post__commentView"> 
          <p>{ comment} Comments</p>
        </div>
        <div className="post__shareView">
          <p>{share} Shares</p>
        </div>
        {/* </div>  */}
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );

}

export default Post;
