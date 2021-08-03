import { Avatar } from '@material-ui/core'
import React from 'react'
/* redux */
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
/* style */
import './slidebar.css'

function Slidebar() {

    const user = useSelector(selectUser);


    const recentItem = (topic) =>(
        <div className="slidebar__recentItem">
            <span className="slidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="slidebar">
            <div className="slidebar__top">
                <img src="https://i.pinimg.com/originals/4e/0d/ab/4e0dab0e2842d4c585dce028044c8f9b.jpg" alt="" />
                <Avatar className="slidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="slidebar__stats">
                <div className="slidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="slidebar__statNumber">2,345</p>
                </div>
                <div className="slidebar__stat">
                    <p>Views on post?</p>
                    <p className="slidebar__statNumber">345</p>
                </div>
                
            </div>

            <div className="slidebar__buttons">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengirering')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Slidebar
