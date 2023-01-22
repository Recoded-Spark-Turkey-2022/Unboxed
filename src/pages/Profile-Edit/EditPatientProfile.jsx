import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProfileHandler } from '../../features/user/userSlice';
import img from './user-profile.svg';
// import icon from './Upload.png';

const EditPatientProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const [editInfo, setEditInfo] = useState({
    name: '',
    surname: '',
    educationLevel: '',
    hobbies: '',
    familySize: '',
    gender: '',
    birthday: '',
    email: '',
    phone: '',
    ID: '',
    password: '',
    oldPassword: '',
    confirmPassword: '',
    photo: '',
    tickets: 0,
    cards: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (firestoreObject) {
      setEditInfo((prevUser) => ({
        ...prevUser,
        name: firestoreObject.name,
        surname: firestoreObject.surname,
        email: firestoreObject.email,
      }));
      if (firestoreObject.educationLevel) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          educationLevel: firestoreObject.educationLevel,
        }));
      }
      if (firestoreObject.hobbies) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          hobbies: firestoreObject.hobbies,
        }));
      }
      if (firestoreObject.familySize) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          familySize: firestoreObject.familySize,
        }));
      }
      if (firestoreObject.gender) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          gender: firestoreObject.gender,
        }));
      }
      if (firestoreObject.birthday) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          birthday: firestoreObject.birthday,
        }));
      }
      if (firestoreObject.phone) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          phone: firestoreObject.phone,
        }));
      }
      if (firestoreObject.ID) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          ID: firestoreObject.ID,
        }));
      }
      if (firestoreObject.tickets) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          tickets: firestoreObject.tickets,
        }));
      }
      if (firestoreObject.cards) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          cards: firestoreObject.cards.length,
        }));
      }
      if (firestoreObject.password) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          password: firestoreObject.password,
          oldPassword: firestoreObject.password,
        }));
      }
    }
  }, [firestoreObject]);

  const navigation = () => {
    navigate('/editPatientProfileThanks');
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editProfileHandler({
        name: editInfo.name,
        surname: editInfo.surname,
        educationLevel: editInfo.educationLevel,
        hobbies: editInfo.hobbies,
        familySize: editInfo.familySize,
        gender: editInfo.gender,
        birthday: editInfo.birthday,
        email: editInfo.email,
        phone: editInfo.phone,
        ID: editInfo.ID,
        password: editInfo.password,
        oldPassword: editInfo.oldPassword,
        navigation,
      })
    );
  };

  const styles = {
    inputs: 'border-2 border-gray-200 rounded min-w-[60%] text-xl',
    inputRows: 'flex justify-between mb-3',
    inputLabel: 'text-xl',
    button:
      'rounded text-xl px-7 py-2 mb-3 relative sm:text-base font-medium shadow-md bg-cyan-400',
  };

  return (
    <div className="font-poppins">
      <h1 className="text-[#FF0000] text-center text-xl">
        {' '}
        Please fill all the fields with correct and valid details to complete
        your profile.
      </h1>
      <div className="flex items-start justify-center mt-6 sm:flex-col sm:items-center">
        <div className="">
          <img
            src={img}
            alt="user-profile"
            className="w-36 h-36 rounded-full"
          />
          {/* <button
            type="button"
            className="w-12 h-12 ml-14 absolute translate-y-28"
          >
            {' '}
            <img src={icon} alt="Upload " />{' '}
          </button> */}
        </div>
        <form className="flex flex-col w-3/5 lg:w-3/4 tablet2:pl-12 sm:pl-0  pl-44 ">
          <h1 className="text-4xl font-semibold mb-5">Profile Info</h1>
          <div className="mb-7 w-10/12 sm:w-full ">
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Name</p>
              <input
                className={styles.inputs}
                type="text"
                name="name"
                required
                value={editInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Surname</p>
              <input
                className={styles.inputs}
                type="text"
                name="surname"
                required
                value={editInfo.surname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Education Level</p>
              <select
                className={styles.inputs}
                name="educationLevel"
                value={editInfo.educationLevel}
                onChange={handleChange}
              >
                <option value="none">Select an Option</option>
                <option value="High School">High School</option>
                <option value="Associate's Degree">Associate Degree</option>
                <option value="Bacheclor's Degree">Bacheclor Degree</option>
                <option value="Master's Degree">Master Degree</option>
                <option value="PHD">PHD</option>
              </select>
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Hobbies</p>
              <input
                className={styles.inputs}
                type="text"
                name="hobbies"
                value={editInfo.hobbies}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Family Size</p>
              <div className="flex min-w-[60%] gap-5">
                <input
                  className="border-2 border-gray-200 rounded w-12 text-xl"
                  type="text"
                  name="familySize"
                  value={editInfo.familySize}
                  onChange={handleChange}
                />
                <p className="text-xl ">Member(s)</p>
              </div>
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Gender</p>
              <select
                className={styles.inputs}
                name="gender"
                value={editInfo.gender}
                onChange={handleChange}
              >
                <option value="none">Select an Option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Birth Date</p>
              <input
                className={styles.inputs}
                type="text"
                name="birthday"
                value={editInfo.birthday}
                onChange={handleChange}
              />
            </div>
            {editInfo.password ? (
              <div className={styles.inputRows}>
                {' '}
                <p className={styles.inputLabel}>Email</p>
                <input
                  className={styles.inputs}
                  type="text"
                  name="email"
                  required
                  value={editInfo.email}
                  onChange={handleChange}
                />
              </div>
            ) : null}
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Phone Number</p>
              <input
                className={styles.inputs}
                type="text"
                name="phone"
                required
                value={editInfo.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>ID</p>
              <input
                className={styles.inputs}
                type="text"
                name="ID"
                required
                value={editInfo.ID}
                onChange={handleChange}
              />
            </div>
          </div>
          <h1 className="text-4xl font-semibold mb-5">Security</h1>
          {editInfo.password ? (
            <div>
              <div className="mb-7 w-10/12 sm:w-full ">
                <div className={styles.inputRows}>
                  {' '}
                  <p className={styles.inputLabel}>Password</p>
                  <input
                    className={styles.inputs}
                    type="password"
                    name="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    required
                    title="Password should include minimum 8 characters, at least one letter and one number"
                    value={editInfo.password}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputRows}>
                  {' '}
                  <p className={styles.inputLabel}>Confirm Password</p>
                  <input
                    className={styles.inputs}
                    type="password"
                    name="confirmPassword"
                    pattern={editInfo.password}
                    title="Passwords don't match"
                    required
                    value={editInfo.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex gap-6">
            <button
              className={styles.button}
              type="submit"
              onClick={
                editInfo.password === editInfo.confirmPassword
                  ? handleEdit
                  : null
              }
            >
              SAVE CHANGES
            </button>
            <button className={styles.button} type="button">
              DELETE ACCOUNT
            </button>
            <button className={styles.button} type="button">
              CANCEL
            </button>
          </div>
          {/* <h1 className="text-4xl font-semibold mb-5">Security</h1>
          <div className="mb-7 w-10/12 sm:w-full ">
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Password</p>
              <input
                className={styles.inputs}
                type="password"
                name="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
                title="Password should include minimum 8 characters, at least one letter and one number"
                value={editInfo.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRows}>
              {' '}
              <p className={styles.inputLabel}>Confirm Password</p>
              <input
                className={styles.inputs}
                type="password"
                name="confirmPassword"
                pattern={editInfo.password}
                title="Passwords don't match"
                required
                value={editInfo.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-6">
            <button
              className={styles.button}
              type="submit"
              onClick={
                editInfo.password === editInfo.confirmPassword
                  ? handleEdit
                  : null
              }
            >
              SAVE CHANGES
            </button>
            <button className={styles.button} type="button">
              DELETE ACCOUNT
            </button>
            <button className={styles.button} type="button">
              CANCEL
            </button>
          </div> */}
          <h1 className="text-4xl font-semibold mb-5">
            Payment Methods & Tickets
          </h1>
          <div className="flex gap-6">
            <div>
              <p>{editInfo.cards} Cards Added</p>
              <button className={styles.button} type="button">
                SHOW CARDS
              </button>
            </div>
            <div>
              <p>{editInfo.tickets} Tickets Remaining</p>
              <button className={styles.button} type="button">
                BUY TICKETS
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPatientProfile;
