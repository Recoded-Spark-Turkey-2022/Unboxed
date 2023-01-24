import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { signoutHandler } from '../../features/user/userSlice';
import logoImg from './logo.svg';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigation = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    dispatch(signoutHandler({navigation}));
  };

  const location = useLocation();
  useEffect(() => {}, [location]);

  // const onAboutChange = (e)=>{
  //   e.preventDefault();

  // }

  const styles = {
    li: 'text-lg hover:text-blue-300 sm:text-sm',
    aboutLi: 'border-b-2 border-b-slate-300 hover:text-blue-300 ',
  };

  return (
    <div>
      <nav
        data-testid="currentUser"
        className=" fixed w-full flex justify-between font-poppins bg-[#EAF8F9] items-center pt-1 sm:flex-col pb-1 shadow "
      >
        <div className="flex gap-2 ml-5 items-center">
          <img className="h-[2.5rem]" src={logoImg} alt="Logo" />
          <h1 className="text-2xl font-medium">Healing</h1>
        </div>
        <ul className="flex gap-6 items-center mr-2">
          <li
            className={`${styles.li} ${
              location.pathname === '/' ? 'text-blue-300' : null
            }`}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/blogs' ? ' text-blue-300' : null
            } `}
          >
            <NavLink to="blogs/1">Blogs</NavLink>
          </li>
          <li
            className="text-lg flex flex-col sm:text-sm "
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="flex items-center">
              About <MdOutlineArrowDropDown />
            </div>

            <ul
              className={` absolute mt-6 bg-[#EAF8F9] px-2 text-center shadow transition-all ease-in-out ${
                aboutDropdown ? 'visible' : 'invisible'
              }`}
            >
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/overview'
                    ? 'text-blue-300'
                    : null
                } `}
              >
                <NavLink to="about/overview">Overview</NavLink>
              </li>
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/team' ? 'text-blue-300' : null
                } `}
              >
                <NavLink to="about/team">Meet the Team</NavLink>
              </li>
              <li
                className={`hover:text-blue-300 ${
                  location.pathname === '/about/careers'
                    ? 'text-blue-300'
                    : null
                }`}
              >
                <NavLink to="about/careers">Careers</NavLink>
              </li>
            </ul>
          </li>

          {/* <li className="text-lg sm:text-sm">
            <select>
              <option
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/overview'
                    ? 'text-blue-300'
                    : null
                } `}
              >
                <NavLink to="about/overview">Overview</NavLink>
              </option>
              <option
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/team' ? 'text-blue-300' : null
                } `}
              >
                <NavLink to="about/team">Meet the Team</NavLink>
              </option>
              <option
                className={`hover:text-indigo-400${
                  location.pathname === '/about/careers'
                    ? 'text-blue-300'
                    : null
                }`}
              >
                <NavLink to="about/careers">Careers</NavLink>
              </option>
            </select>
          </li> */}
          <li
            className={`${styles.li} ${
              location.pathname === '/contact' ? 'text-blue-300' : null
            }`}
          >
            <NavLink to="contact">Contact Us</NavLink>
          </li>
          {firestoreObject ? (
            <li
              className="flex flex-col items-center text-lg gap-1 sm:text-sm"
              onMouseEnter={() => setuserDropdown(true)}
              onMouseLeave={() => setuserDropdown(false)}
            >
              {' '}
              <div className="flex items-center gap-2">
                {firestoreObject.name} <FaRegUserCircle />
              </div>
              <ul
                className={` absolute mt-6 bg-[#EAF8F9] px-2 text-center shadow ${
                  userDropdown ? 'visible' : 'invisible'
                }`}
              >
                <li className={styles.aboutLi}>Booking Info</li>
                <li className={styles.aboutLi}>Buy Tickets</li>
                <li className={styles.aboutLi}>{firestoreObject.license?<NavLink to="CounselorEditInfo">View Info</NavLink>:<NavLink to="editPatientProfile">Profile Info</NavLink> }</li>
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
