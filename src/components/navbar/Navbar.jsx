import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { NavLink, useLocation } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import logoImg from './logo.svg';
import { auth } from '../../firebaseFile';

const Navbar = () => {
  const [user, setUser] = useState({});
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    act(() => setUser(currentUser));
  });

  const handleLogout = async () => {
    await signOut(auth);
  };

  const location = useLocation();
  useEffect(() => {}, [location]);

  const styles = {
    li: 'text-lg hover:text-amber-400 sm:text-sm',
    aboutLi: 'border-b-2 border-b-slate-300 hover:text-amber-400 ',
  };

  return (
    // <div className="flex justify-around">
    //   <ul className="flex gap-2">
    //     <li>
    //       {' '}
    //       <NavLink to="/">To Home</NavLink>
    //     </li>
    //     <li>
    //       {' '}
    //       <NavLink to="login">To login</NavLink>
    //     </li>
    //   </ul>
    //   <div>
    //     <p data-testid="currentUser"> Current User: {user?.email}</p>
    // <button className="bg-red-600" type="button" onClick={handleLogout}>
    //   Log out
    // </button>
    //   </div>
    // </div>
    <div>
      <nav
        data-testid="nav"
        className="flex justify-between font-poppins bg-[#EAF8F9] h-1/5 items-center pt-1 sm:flex-col pb-1 "
      >
        <div className="flex gap-2 ml-5 items-center">
          <img className="h-[2.5rem]" src={logoImg} alt="Logo" />
          <h1 className="text-2xl font-medium">Healing</h1>
        </div>
        <ul className="flex gap-6 items-center mr-2">
          <li
            className={`${styles.li} ${
              location.pathname === '/' ? 'text-amber-400' : null
            }`}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/blogs' ? 'text-amber-400' : null
            } `}
          >
            <NavLink to="blogs">Blogs</NavLink>
          </li>
          <li
            className="text-lg flex flex-col sm:text-sm"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="flex items-center">
              About <MdOutlineArrowDropDown />
            </div>

            <ul
              className={` absolute mt-6 bg-[#EAF8F9] transition-all ease-in-out ${
                aboutDropdown ? 'visible' : 'invisible'
              }`}
            >
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/overview'
                    ? 'text-amber-400'
                    : null
                } `}
              >
                <NavLink to="about/overview">Overview</NavLink>
              </li>
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/team' ? 'text-amber-400' : null
                } `}
              >
                <NavLink to="about/team">Meet the Team</NavLink>
              </li>
              <li
                className={`hover:text-amber-400 ${
                  location.pathname === '/about/careers'
                    ? 'text-amber-400'
                    : null
                }`}
              >
                <NavLink to="about/careers">Careers</NavLink>
              </li>
            </ul>

            {/* {aboutDropdown ?
            <ul className=' absolute mt-7 bg-[#EAF8F9]  transition-all '>
              <li className='border-b-2 border-b-slate-300'>Overview</li>
              <li className='border-b-2 border-b-slate-300'>Meet the Team</li>
              <li className=''>Careers Page</li>
            </ul>
            : null
          } */}

            {/* <select>
            <option>Overview</option>
            <option>Meet the Team</option>
            <option>Careers Page</option>
          </select> */}
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/contact' ? 'text-amber-400' : null
            }`}
          >
            <NavLink to="contact">Contact Us</NavLink>
          </li>
          {user ? (
            <li
              className="flex flex-col items-center text-lg gap-1 sm:text-sm"
              onMouseEnter={() => setuserDropdown(true)}
              onMouseLeave={() => setuserDropdown(false)}
            >
              {' '}
              <div className="flex">
                {user.email} <FaRegUserCircle />
              </div>
              <ul
                className={` absolute mt-6 bg-[#EAF8F9] ${
                  userDropdown ? 'visible' : 'invisible'
                }`}
              >
                <li>Booking Info</li>
                <li>Buy Tickets</li>
                <li>Profile Info</li>
                <li>
                  {' '}
                  <button
                    className=" hover:text-red-700"
                    type="button"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <li className="text-lg bg-cyan-400 py-1 px-3 rounded sm:text-sm">
              <NavLink to="login">Log in</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Navbar;
