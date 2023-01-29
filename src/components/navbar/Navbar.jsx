import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { signoutHandler } from '../../features/user/userSlice';
import logoImg from './logo.svg';
import i18n from '../../translation/i18n';

const Navbar = ({ lang, setLang }) => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  // eslint-disable-next-line no-unused-vars
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);
  const [burgerDropdown, setburgerDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigation = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    dispatch(signoutHandler({ navigation }));
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const location = useLocation();
  useEffect(() => {}, [location]);

  function handleLanChange(event) {
    setLang(event.target.value);
  }
  const styles = {
    li: 'text-lg hover:text-blue-300 sm:text-base',
    aboutLi: 'border-b-2 border-b-slate-300 hover:text-blue-300 sm:border-0 ',
    burger: 'text-2xl cursor-pointer mr-6 hidden sm:block',
    dropdownStyle:
      'absolute mt-6 bg-[#EAF8F9] px-2 text-center shadow  sm:px-0 sm:mt-0 sm:static sm:visible sm:shadow-none sm:text-start sm:ml-4',
  };
  return (
    <div className="768:h-eight">
      <nav
        data-testid="currentUser"
        className=" fixed w-full flex justify-between font-poppins bg-[#EAF8F9] items-center pt-1 sm:flex-col sm:items-start pb-1 shadow 768:h-eight z-10"
      >
        <div className="sm:w-full sm:justify-between sm:flex sm:items-center">
          {' '}
          <div className="flex gap-2 ml-5 items-center">
            <img className="h-[2.5rem]" src={logoImg} alt="Logo" />
            <h1 className="text-2xl font-medium">{t('healing')}</h1>
          </div>
          {!burgerDropdown ? (
            <GiHamburgerMenu
              onClick={() => setburgerDropdown(!burgerDropdown)}
              className={styles.burger}
            />
          ) : (
            <RxCross2
              onClick={() => setburgerDropdown(!burgerDropdown)}
              className={styles.burger}
            />
          )}
        </div>

        <ul
          className={`flex gap-6 items-center mr-8 transition-all duration-500 ease-in  ${
            burgerDropdown
              ? 'sm:flex-col sm:mr-0 sm:gap-1 sm:ml-7 sm:items-start '
              : 'sm:hidden'
          } `}
        >
          <li
            className={`${styles.li} ${
              location.pathname === '/' ? 'text-blue-300' : null
            }`}
          >
            <NavLink to="/">{t('home')}</NavLink>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/blogs' ? ' text-blue-300' : null
            } `}
          >
            <NavLink to="blogs/:1">{t('blogs')}</NavLink>
          </li>
          <li
            className="text-lg flex flex-col sm:text-sm "
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="flex items-center">
              {t('about')} <MdOutlineArrowDropDown />
            </div>

            <ul
              className={` absolute mt-6 bg-[#EAF8F9] px-2 text-center shadow  sm:px-0 sm:mt-0 sm:static sm:visible sm:shadow-none sm:text-start sm:ml-4  ${
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
                <NavLink to="about/overview">{t('Overview')}</NavLink>
              </li>
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/team' ? 'text-blue-300' : null
                } `}
              >
                <NavLink to="about/team">{t('meat')}</NavLink>
              </li>
              <li
                className={`hover:text-blue-300 ${
                  location.pathname === '/about/careers'
                    ? 'text-blue-300'
                    : null
                }`}
              >
                <NavLink to="about/careers">{t('Careers')}</NavLink>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/contact' ? 'text-blue-300' : null
            }`}
          >
            <NavLink to="contact">{t('contact')}</NavLink>
          </li>
          <li className={styles.li}>
            <select className="bg-[#EAF8F9]" onChange={handleLanChange}>
              <option value="En">En</option>
              <option value="Tr">Tr</option>
              <option value="Ar">Ar</option>
            </select>
          </li>
          {firestoreObject ? (
            <li
              className="flex flex-col items-center text-lg gap-1 sm:text-base sm:items-start"
              onMouseEnter={() => setuserDropdown(true)}
              onMouseLeave={() => setuserDropdown(false)}
            >
              {' '}
              <div className="flex items-center gap-2">
                {firestoreObject.name} <FaRegUserCircle />
              </div>
              <ul
                className={` absolute mt-6 bg-[#EAF8F9] px-2 text-center shadow sm:px-0 sm:mt-0 sm:static sm:visible sm:shadow-none sm:text-start sm:ml-4  ${
                  userDropdown ? 'visible' : 'invisible'
                }`}
              >
                <li className={styles.aboutLi}>
                  <NavLink to="Booking">{t('Booking Info')}</NavLink>
                </li>

                <li className={styles.aboutLi}>{t('BUY TICKETS')}</li>
                <li className={styles.aboutLi}>
                  {firestoreObject.license ? (
                    <NavLink to="CounselorEditInfo">{t('View Info')}</NavLink>
                  ) : (
                    <NavLink to="editPatientProfile">{t('editInfo')}</NavLink>
                  )}
                </li>
                <li>
                  {' '}
                  <button
                    className=" hover:text-red-700"
                    type="button"
                    onClick={handleLogout}
                  >
                    {t('logout')}
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <li className="text-lg bg-cyan-400 py-1 px-3 rounded sm:text-base">
              <NavLink to="login">{t('login')}</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Navbar;
