import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditProfileInputs from '../../components/profile/EditProfileInputs';
import img from '../Profile-Edit/user-profile.svg';
import { styles } from '../../components/profile/ProfileStyle';
import AccountButtons from '../../components/profile/AccountButtons';
import { editCounselerHandler } from '../../features/user/userSlice';

const CounselorEditInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const [editInfo, setEditInfo] = useState({
    name: '',
    bio: '',
    city: '',
    license: '',
    birthday: '',
    email: '',
    phone: '',
    password: '',
    oldPassword: '',
    confirmPassword: '',
    photo: img,
  });
  useEffect(() => {
    if (firestoreObject) {
      setEditInfo((prevUser) => ({
        ...prevUser,
        name: firestoreObject.name,
        email: firestoreObject.email,
      }));
      if (firestoreObject.bio) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          bio: firestoreObject.bio,
        }));
      }
      if (firestoreObject.city) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          city: firestoreObject.city,
        }));
      }
      if (firestoreObject.license) {
        setEditInfo((prevUser) => ({
          ...prevUser,
          license: firestoreObject.license,
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
        }));
      }
    }
  }, [firestoreObject]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const navigation = () => {
    navigate('/editPatientProfileThanks');
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editCounselerHandler({
        name: editInfo.name,
        bio: editInfo.bio,
        city: editInfo.city,
        license: editInfo.license,
        birthday: editInfo.birthday,
        email: editInfo.email,
        phone: editInfo.phone,
        password: editInfo.password,
        oldPassword: editInfo.oldPassword,
        photo: editInfo.photo,
        navigation,
      })
    );
  };
  return (
    <div className=" font-poppins">
      <div className={styles.container}>
        <div className="flex flex-col items-start">
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
          <h1 className={styles.h1Style}>View Info</h1>
          <EditProfileInputs
            textContent="Name"
            name="name"
            value={editInfo.name}
            handleChange={handleChange}
            validation
          />
          <EditProfileInputs
            textContent="Bio"
            name="bio"
            value={editInfo.bio}
            handleChange={handleChange}
          />
          <EditProfileInputs
            textContent="City"
            name="city"
            value={editInfo.city}
            handleChange={handleChange}
          />
          <EditProfileInputs
            textContent="License number"
            name="license"
            value={editInfo.license}
            handleChange={handleChange}
            validation
          />
          <EditProfileInputs
            textContent="BirthDate"
            name="birthday"
            value={editInfo.birthday}
            handleChange={handleChange}
          />
          <EditProfileInputs
            textContent="Email"
            name="email"
            value={editInfo.email}
            handleChange={handleChange}
            validation
          />
          <EditProfileInputs
            textContent="Phone Number"
            name="phone"
            value={editInfo.phone}
            handleChange={handleChange}
            validation
          />
          <h1 className={styles.h1Style}>Security</h1>
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
          <AccountButtons
            editInfo={editInfo}
            handleEdit={handleEdit}
            collection="counselors"
          />
        </form>
      </div>
    </div>
  );
};

export default CounselorEditInfo;
