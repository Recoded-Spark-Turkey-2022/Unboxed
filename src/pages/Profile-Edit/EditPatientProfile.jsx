import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountButtons from '../../components/profile/AccountButtons';
import { editProfileHandler } from '../../features/user/userSlice';
import EditProfileInputs from '../../components/profile/EditProfileInputs';
import { styles } from '../../components/profile/ProfileStyle';
import img from './user-profile.svg';


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
    photo: img,
    oldPhoto: img,
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
      if (firestoreObject.photo) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          photo: firestoreObject.photo,
          oldPhoto:firestoreObject.photo
        }));
      }
      if (firestoreObject.tickets) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          tickets: firestoreObject.tickets
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
        photo: editInfo.photo,
        oldPhoto: editInfo.oldPhoto,
        navigation,
      })
    );
  };

  return (
    <div className="font-poppins">
      <h1 className="text-[#FF0000] text-center text-xl">
        {' '}
        Please fill all the fields with correct and valid details to complete
        your profile.
      </h1>
      <div className={styles.container}>
        <div className=" flex flex-col items-start">
          <img
            src={editInfo.photo}
            alt="user-profile"
            className="w-36 h-36 rounded-full"
          />
          <input
            className="w-36"
            type="file"
            name="photo"
            onChange={(e) => {
              setEditInfo((prevUser) => ({
                ...prevUser,
                photo: e.target.files[0],
              }));
            }}
          />
        </div>
        <form className={styles.form}>
          <h1 className={styles.h1Style}>Profile Info</h1>
          <div className="mb-7 w-10/12 sm:w-full ">
            <EditProfileInputs
              textContent="Name"
              name="name"
              value={editInfo.name}
              handleChange={handleChange}
              validation
            />
            <EditProfileInputs
              textContent="Surname"
              name="surname"
              value={editInfo.surname}
              handleChange={handleChange}
              validation
            />
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
            <EditProfileInputs
              textContent="Hobbies"
              name="hobbies"
              value={editInfo.hobbies}
              handleChange={handleChange}
            />
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
                <p className="text-xl xsm:text-base ">Member(s)</p>
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
            <EditProfileInputs
              textContent="Birth Date"
              name="birthday"
              value={editInfo.birthday}
              handleChange={handleChange}
              validation
            />
            {editInfo.password ? (
              <EditProfileInputs
                textContent="Email"
                name="email"
                value={editInfo.email}
                handleChange={handleChange}
                validation
              />
            ) : null}
            <EditProfileInputs
              textContent="Phone Number"
              name="phone"
              value={editInfo.phone}
              handleChange={handleChange}
            />
            <EditProfileInputs
              textContent="ID"
              name="ID"
              value={editInfo.ID}
              handleChange={handleChange}
            />
          </div>
          <h1 className={styles.h1Style}>Security</h1>
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
          <AccountButtons
            editInfo={editInfo}
            handleEdit={handleEdit}
            collection="patients"
          />
          <h1 className={styles.h1Style}>Payment Methods & Tickets</h1>
          <div className="flex gap-6">
            <div>
              <p>{editInfo.cards} Cards Added</p>
              <button className={styles.button} onClick={()=> navigate("/payment-methods")} type="button">
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
