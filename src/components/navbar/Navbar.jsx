import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signoutHandler } from '../../features/user/userSlice';


const Navbar = () => {

  // Solution 3
  const user = useSelector(state => state.user)
  const {firestoreObject} = user
  console.log(user)
  const dispatch = useDispatch()

  const handleLogout = async () => {
   dispatch(signoutHandler())
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
        <p data-testid="currentUser"> Current User: {firestoreObject? firestoreObject.name : null}</p>
        <button className="bg-red-600" type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
