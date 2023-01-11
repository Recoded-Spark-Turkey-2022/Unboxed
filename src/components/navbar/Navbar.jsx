import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { auth } from '../../firebaseFile';

const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    act(() => setUser(currentUser));
  });

  const handleLogout = async () => {
    await signOut(auth);
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
          <NavLink to="signup">To sign up</NavLink>
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
