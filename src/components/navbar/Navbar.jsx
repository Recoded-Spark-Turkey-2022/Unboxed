import React, {useState,useEffect } from 'react';
import {  signOut } from 'firebase/auth';
// import { doc } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebaseFile';
import { loginState } from '../../features/user/userSlice';


const Navbar = () => {
  // Solution 1
  // const {isLoggedIn,authObject} = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setCurrentUser(user);
  //     } else {
  //       setCurrentUser(null);
  //       dispatch(loginState());
  //     }
  //   });
  //   return () => unsubscribe();
  // }, [dispatch]);

  // const handleLogout = async () => {
  //   await signOut(auth)
  // };

  // Solution 2
  // const {isLoggedIn,authObject} = useSelector(state => state.user)
  // const user = useSelector(state => state.user)
  // const dispatch = useDispatch()

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     if(!auth.currentUser){
  //       dispatch(loginState())
  //   }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Solution 3
  const {isLoggedIn,authObject} = useSelector(state => state.user)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth)
  //       dispatch(loginState())
  //       console.log(auth.currentUser)
     
  //   } catch (error) {
  //     console.log(error);
  // };
  // }

  const handleLogout = async () => {
    try {
      await signOut(auth)
        if(!auth.currentUser){
          dispatch(loginState())
        }
        console.log(auth.currentUser)
    } catch (error) {
      console.log(error);
      console.log(auth.currentUser)
  };
  }

  return (
    <div className="flex justify-around">
      <ul className="flex gap-2">
        <li>
          {' '}
          <NavLink to="/">To Home</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="login">To login</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="signup">To signup</NavLink>
        </li>
      </ul>
      <div>
        <p data-testid="currentUser"> Current User: {isLoggedIn? authObject.email : null}</p>
        <button className="bg-red-600" type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
