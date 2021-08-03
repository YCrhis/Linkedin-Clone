import React from 'react'
/* style */
import './header.css'
/* icons */
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
/* components */
import HeaderOptions from './HeaderOptions';
/* redux */
import {useDispatch, useSelector} from 'react-redux'
import {logout, selectUser} from '../../features/userSlice'
/* firebase */
import {auth} from '../firebase/firebase'

function Header() {

    const user = useSelector(selectUser);


    const dispatch = useDispatch()
    const logoutApp = () =>{
        dispatch(logout())
        auth.signOut();
    }
    
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions title='Home' Icon={HomeIcon}/>
                <HeaderOptions title='My Network'Icon={SupervisorAccountIcon} />
                <HeaderOptions title='Jobs'Icon={BusinessCenterIcon} />
                <HeaderOptions title='Messaging'Icon={ChatIcon} />
                <HeaderOptions title='Notifications'Icon={NotificationsIcon} />
                <HeaderOptions title="me" onClick={logoutApp} avatar={true} />
            </div>
        </div>
    )
}

export default Header
