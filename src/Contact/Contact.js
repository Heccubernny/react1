import React, { Component } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Contact.css';
import ContactRow from './ContactRow/ContactRow';

class Contact extends Component {
  render() {
    return (
      <div className="contact__section">
        <div className="contact__head">
          <div className="contact__option">
            <p>Contacts</p>
          </div>
          <div className="contact__option">
            <IconButton>
              <VideoCallIcon />  
            </IconButton>
          </div>
          <div className="contact__option">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <div className="contact__option">
            <IconButton>
              <MoreHorizIcon /> 
            </IconButton>
          </div>
        </div>
        <ContactRow />
      </div>

    );
  }
}

export default Contact;
