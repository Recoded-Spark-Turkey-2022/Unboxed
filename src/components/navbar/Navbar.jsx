import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { doc } from "firebase/firestore";
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebaseFile';


const Navbar = () => {
  const [user, setUser] = useState({});
   onAuthStateChanged(auth, (currentUser) => {
    if (currentUser){
      // const userInfo = doc(db, 'patients', currentUser.uid);
      setUser(currentUser);
    }
  });
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null)
  };
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
        <p data-testid="currentUser"> Current User: {user?.email}</p>
        <button className="bg-red-600" type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
