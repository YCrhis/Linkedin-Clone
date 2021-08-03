import React, {useEffect} from 'react';
/* redux */
import { useSelector } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice'
/* style */
import './App.css';
/* components */
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Slidebar from './components/sliderbar/Slidebar';
import Login from './components/login/Login';
import Widgets from './components/Widgets/Widgets' 
/* firebase */
import {auth} from './components/firebase/firebase'
/* redux */
import { useDispatch } from 'react-redux'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />):(
        <div className="app__body">
          <Slidebar />

          <Feed />
          
          <Widgets /> 
        </div>
        )
      }



    </div>
  );
}

export default App;
