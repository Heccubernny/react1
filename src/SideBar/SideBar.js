import React, { Component } from 'react';
import './SideBar.css';
import SidebarRow from './SidebarRow/SidebarRow';  
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import { useStateValue } from '../StateProvider';

import { ExpandMoreOutlined } from '@material-ui/icons';
class SideBar extends Component {


    render() {
        // const [{user} , dispatch] = useStateValue();
        return (
            <div className = "sidebar" >
            <SidebarRow
               src = "https:upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
               title = 'Ikubanni Paul'
            // src={user.photoURL}
            // title={user.displayName}
            />
            
             <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
            

            </div>
        );
    }
}

export default SideBar;