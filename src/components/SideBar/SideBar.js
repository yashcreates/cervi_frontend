import { AppsOutlined, FileCopyOutlined, FindReplace, InfoOutlined, Logout, PersonOutline } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import '../../styles/SideBar.css'

export default function SideBar() {

    const {pathname} = useLocation()


    return (
        <Box className="sideBar">
            <List className="sideBarListWrapper">
                <ListItem disablePadding>
                    <NavLink exact to={'/'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton">
                        <AppsOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Home</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>


                <ListItem disablePadding>
                    <NavLink exact to={'/test'} isActive={()=>['/testSteps', '/test'].includes(pathname)}  activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <FindReplace className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Test</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>


                <ListItem disablePadding>
                    <NavLink exact to={'/reports'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <FileCopyOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Reports</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>

                <ListItem disablePadding>
                    <NavLink exact to={'/profile'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <PersonOutline className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Profile</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>



                <ListItem disablePadding>
                    <NavLink exact to={'/about'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <InfoOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">About</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>

                <ListItem disablePadding>
                    <div className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" onClick={()=>{
                        localStorage.removeItem('accessToken')
                        localStorage.removeItem('userType')
                        window.location.reload()
                    }}>
                        <Logout className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">LogOut</span>
                    </ListItemButton>
                    </div> 
                </ListItem>
            </List>
        </Box>
  );
}