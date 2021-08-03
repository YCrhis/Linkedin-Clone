import React, {forwardRef} from 'react'
/* styles */
import './post.css'
/* material ui */
import { Avatar } from '@material-ui/core'
/* icons */
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InputOptions from '../OptionsForm/InputOptions';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) =>{
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpIcon} title="Like" color="gray"/>
                <InputOptions Icon={ChatIcon} title="Comment" color="gray"/> 
                <InputOptions Icon={ShareIcon} title="Share" color="gray"/> 
                <InputOptions Icon={SendIcon} title="Share" color="gray"/>
            </div>
        </div>
    )
})

export default Post
