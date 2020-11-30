import React, { Component } from 'react';
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   const classes = useStyles();

//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   orange: {
//     color: theme.palette.getContrastText(deepOrange[500]),
//     backgroundColor: deepOrange[500],
//   },
//   purple: {
//     color: theme.palette.getContrastText(deepPurple[500]),
//     backgroundColor: deepPurple[500],
//   },
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));



class Header extends Component {
  
    render() {

        return ( 
            <div className="header">
            <div className="header__left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                alt=""
              />
              <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text" />
              </div>
            </div>
            <div className="header__center">
              <div className="header__option header__option--active">
                <HomeIcon fontSize="large" />
              </div>
              <div className="header__option">
                <FlagIcon fontSize="large" />
              </div>
              <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="large" />
              </div>
              <div className="header__option">
                <StorefrontOutlinedIcon fontSize="large" />
              </div>
              <div className="header__option">
                <SupervisedUserCirceIcon fontSize="large" />
              </div>
            </div>
            <div className="header__right">
              <div className="header__info">
                        {/* <Avatar src={user.photoURL}/> */}
                    <Avatar src="">I</Avatar>
                    <h4>Ikubanni Paul</h4>
                {/* <h4>{user.displayName}</h4> */}
              </div>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <ForumIcon />
              </IconButton>
              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </div>


        );
    }
}

export default Header;