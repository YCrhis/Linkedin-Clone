import React, {useState} from 'react'
/* style */
import './login.css'
/* firebase */
import {auth} from '../firebase/firebase'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch();

    const register = () =>{
        if (!name){
            return alert('The name is necessary')
        } 
        
        auth.createUserWithEmailAndPassword(email, password)
         .then((userAuth)=>{
             userAuth.user.updateProfile({
                 displayName:name,
                 photoURL: profilePic,
             })
              .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                })
               )
              })
         }).catch(error => alert(error))
        
    }
    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
         .then(userAuth =>{
             dispatch(login({
                 email:userAuth.user.email,
                 uid:userAuth.user.uid,
                 displayName:userAuth.user.displayName,
                 profileUrl:userAuth.user.photoUrl, 
             }))
         }).catch (error=> alert(error))
    }
    return (
        <div className="login">
            <img src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo.png" alt="" />

            <form>
                <input 
                    placeholder="full name" 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}    
                />
                <input 
                    placeholder="profile url"  
                    type="text" 
                    value={profilePic}
                    onChange={e=>setProfilePic(e.target.value)}
                />
                <input 
                    placeholder="Email" 
                    type="text" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
