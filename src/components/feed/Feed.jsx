import React, {useState, useEffect} from 'react'
/* style */
import './feed.css'
/* icons */
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from '../OptionsForm/InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

/* firebase */
import { db } from '../firebase/firebase'
import firebase from 'firebase'

/* components */
import Post from '../post/Post';
/* redux */
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

/* animation */

import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser); 

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))

    },[])

    const sendPost = e =>{
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* options */}
                    <InputOptions Icon={ImageIcon} title='Photo' color="#70b5f9"/>
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color="#e7a33e"/>
                    <InputOptions Icon={EventIcon} title='Event' color="#c0cbcd"/>
                    <InputOptions Icon={CalendarTodayIcon} title='Write Article' color="#7fc15e"/>
                </div>
            </div>

            {/* post */}
            <FlipMove>
                {posts.map(({id, data:{ name, description, message, photoUrl}})=>(
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>    
        </div>
    )
}

export default Feed
