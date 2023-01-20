import { React, useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import img from './user-profile.svg';
import icon from './Upload.png';

import { auth, db } from '../../firebaseFile';

const Edit = () => {
  // const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  // const [hobbies, setHobbies] = useState('');
  // const [family, setFamily] = useState('');
  // const [gender, setGender] = useState('');
  // const [age, setAge] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  // const [education, setEducation] = useState('');
  // const [photoUrl, setImage] = useState('');
  // const [DocUrl, setDocUrl] = useState('');

  // // const [confrimPassword, setConfrimPassword] = useState('');
  // // const [imagePreview, setImagePreview] = useState('');
  // // const [savechanges, setSavechanges] = useState('');
  // // const [deleteaccount, setDeleteaccount] = useState('');
  // // const [cancel, setCancel] = useState('');
  // // const [showcards, setShowcards] = useState('');
  // // const [buytickets, setBuytickets] = useState('');
  // // const [autosave, setAutosave] = useState('');
  // // const [editinfo, setEditinfo] = useState('');

  // // .then(function() {
  // //   console.log("Document successfully updated!");
  // // })
  // // .catch(function(error) {

  // const getData = () => {
  //   const uuid = auth.currentUser.uid;

  //   getDoc(get, () => {
  //     setDisplayName(displayName);
  //     setAge(age);
  //     setDocUrl(DocUrl);
  //     setEducation(education);
  //     setEmail(email);
  //     setFamily(family);
  //     setGender(gender);
  //     setPassword(password);
  //     setPhonenumber(phonenumber);
  //     setHobbies(hobbies);
  //     setImage(photoUrl);
  //   });
  // };

  // useEffect( () => {
  //    getData();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const id = auth.currentUser.uid;
  //     const get = doc(db, 'users', id);

  //     const docSnap = await getDoc(get);
  //     docSnap((data) => {
  //       setEmail(data);
  //     });
  //   })();
  // }, [auth]);

  // onAuthStateChanged(auth, (currentUser) => {
  //   const id = auth.currentUser.uid;
  //   const get = doc(db, 'users', id);
  //   updateDoc(get, setEmail(currentUser.email));
  // });

  // useEffect(() => {
  //   onAuthStateChanged(auth, () => {
  //     const emailNew = auth.currentUser.email;

  //     setEmail(emailNew);
  //   });
  // }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, () => {
  //     const id = auth.currentUser.uid;
  //     // const get = doc(db, 'users', id);

  //     // updateDoc(get, setEmail(currentUser.email));
  //   // });
  //   console.log(id);
  // }, []);

  // async function handleUpdate(e) {
  //   e.preventDefault();
  //   // update the auth user with the new email value
  //   // update the firestore document with the new email value

  //   try {
  //     const id = auth?.currentUser.uid;
  //     const get = doc(db, 'patients', id);
  //     await updateDoc(get, { email, password });
  //     console.log(get, 'p');

  //     signInWithEmailAndPassword(auth, auth?.currentUser?.email, get.password)
  //       .then(() => updateEmail(auth.currentUser, email))
  //       .then(() => updatePassword(auth.currentUser, password));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const id = auth?.currentUser.uid;
      const get = doc(db, 'patients', id);
      await signInWithEmailAndPassword(
        auth,
        auth?.currentUser?.email,
        currentPassword
      );
      await updateEmail(auth.currentUser, email);
      await updatePassword(auth.currentUser, password);
      await updateDoc(get, { email });

      await sendPasswordResetEmail(auth.currentUser);
      if (auth.currentUser.email === email) {
        console.log('email or password updated');
      } else {
        console.log('email or password not updated');
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      const emailNew = auth.currentUser.email;
      setEmail(emailNew);

      console.log(emailNew, 'newemail');
      console.log(email, 'email');
      console.log(password, 'password');
    });
  }, []);
  // async function handleUpdate(e) {
  //   e.preventDefault();
  //   // update the auth user with the new email value
  //   // update the firestore document with the new email value

  //   try {
  //     const id = auth?.currentUser.uid;
  //     const get = doc(db, 'patients', id);
  //     await updateDoc(get, { email });

  //     signInWithEmailAndPassword(auth, auth?.currentUser?.email).then(() =>
  //       updateEmail(auth.currentUser, email)
  //     );
  //     // .then(() => updatePassword(auth.currentUser, password));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // if (name === 'displayName') setDisplayName(value);
  // if (name === 'password') setPassword(value);
  // if (name === 'hobbies') setHobbies(value);
  // if (name === 'family') setFamily(value);
  // if (name === 'gender') setGender(value);
  // if (name === 'age') setAge(value);
  // if (name === 'phonenumber') setPhonenumber(value);
  // if (name === 'education') setEducation(value);
  // if (name === 'photoUrl') setImage(value);
  // if (name === 'DocUrl') setDocUrl(value);
  // };
  // const updateData = () => {
  //   const update = (db, 'users', uid);
  //   updateDoc(update, {
  //     displayName,
  //     email,
  //     password,
  //     hobbies,
  //     family,
  //     age,
  //     education,
  //     photoUrl,
  //     DocUrl,
  //     gender,
  //     phonenumber,
  //   });
  // };
  // const DeleteData = () => {
  //   const Delete = doc(db, 'users', uid);
  //   deleteDoc(Delete, {
  //     displayName,
  //     email,
  //     password,
  //     hobbies,
  //     family,
  //     age,
  //     education,
  //     photoUrl,
  //     DocUrl,
  //     gender,
  //     phonenumber,
  //   });
  // };

  return (
    <form className=" relative w-full " data-testid="Edit">
      <div className="flex flex-col lg:items-center  sm:items-start">
        <div className=" self-center mt-8 lg:text-xl md:text-base sm:text-sm text-[#FF0000] sm:ml-[20%]">
          Please fill all the fields with correct and valid details to complete
          your profile.
        </div>
        <div className="flex flex-row sm:flex-col ">
          <div className="flex  lg:ml-[10rm] xxl:ml-[15rm] self-start-4 ml-10 lg:self-start-3 sm:self-center  mt-[5%]  ">
            <img
              src={img}
              alt="user-profile"
              className="w-36 h-36 rounded-full"
            />
            <button
              type="button"
              className="w-12 h-12 ml-14 absolute translate-y-28"
            >
              {' '}
              <img src={icon} alt="Upload " />{' '}
            </button>
          </div>
          <div className="flex flex-col sm:ml-3 lg:ml-16 ml-15 xl:ml-25 mt-5">
            <div className="lg:ml-[10%] ml-[15%]  lg:mr-44 mb-15 ">
              <h1 className="text-5xl  lg:ml-0 ml-15 mb-10 sm:self-Center mt-10 ">
                <b>PROFILE INFO</b>
              </h1>
              <div />
              <div className=" flex flex-rows ">
                <div className="flex flex-col mt-4 lg:text-xl sm:text-sm gap-10 lg:ml-0">
                  <div className="text-2xl  ">Full Name</div>
                  <div className="text-2xl ">Education Level</div>
                  <div className="text-2xl ">Hobbies</div>
                  <div className="text-2xl ">Family Size</div>
                  <p className="text-2xl ">Member(s)</p>
                  <div className="text-2xl ">Gender</div>
                  <div className="text-2xl ">Birth Date</div>
                  <div className="text-2xl ">Phone Number</div>
                  <div className="text-2xl ">Upload ID</div>

                  <div className="text-2xl ">Email </div>
                </div>

                <div className="flex flex-col gap-7 lg:mt-1 mt-3 ml-6">
                  <div>
                    <input
                      type="text"
                      name="displayName"
                      className="  border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem] "
                      style={{ width: 475, height: 68, left: 257, top: 88 }}
                    />
                  </div>

                  <div>
                    <input
                      className="  border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 475, height: 68, left: 257, top: 170 }}
                    />{' '}
                  </div>
                  <div>
                    <input
                      className="  border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 475, height: 68, left: 257, top: 170 }}
                    />{' '}
                  </div>
                  <div>
                    <input
                      className=" border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block sm:w-[20] sm:h-[4.8rm] lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 475, height: 68, left: 257, top: 170 }}
                    />{' '}
                  </div>
                  <input
                    className="  border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[6em] lg:h-[6.8rm] xxl:w-[6rem] xxl:h-[6.8rm] w-[4em]  h-[6.8rem]"
                    style={{ left: 257, top: 334, height: 68 }}
                  />
                  <div>
                    <input
                      className=" border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 474.72, height: 68.35 }}
                    />
                    <image
                      className="flex-1 h-full rounded-lg"
                      src="https://via.placeholder.com/30x30"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="displayName"
                      className="border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 475, height: 68, left: 257, top: 88 }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="displayName"
                      className=" border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 475, height: 68, left: 257, top: 88 }}
                    />{' '}
                  </div>
                  <div>
                    <input
                      type={email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={email}
                      className=" border-black rounded-lg shadow border-opacity-10 bg-white border  text-gray-900 sm:text-sm ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[35em] lg:h-[6.8rm] xxl:w-[40rem] xxl:h-[6.8rem] w-[16em] h-[6.8rem]"
                      style={{ width: 474.72, height: 68.35 }}
                    />
                  </div>
                </div>
              </div>

              <div
                className=" "
                style={{ width: 733, height: 811, left: 564, top: 191 }}
              >
                <div className="flex flex-col gap-7 lg:mt-1 mt-3 ml-6">
                  <p className="text-5xl font-medium ">Security</p>
                  <div className="col-start-1  col-span-6">
                    <p className="text-2xl " style={{ left: 0, top: 596 }}>
                      Email{' '}
                    </p>
                    <input
                      type={email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={email}
                      className=" bg-white border border-black rounded-lg shadow border-opacity-10"
                      style={{ width: 474.72, height: 68.35 }}
                    />
                  </div>
                  <div className="">
                    <p
                      className="text-2xl w-28 h-9"
                      style={{ left: 1, top: 117 }}
                    >
                      Password
                    </p>
                    <input
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className=" sm:w-10 items-center justify-end pt-6 pb-5 pr-5 bg-white border border-black rounded-lg shadow pl-96 border-opacity-10"
                    />
                    <link
                      className="flex-1 h-full opacity-60"
                      src="https://via.placeholder.com/23.96725845336914x23.000001907348633"
                    />
                  </div>
                  <div className="">
                    <p
                      className="w-56 text-2xl h-9"
                      style={{ left: 1, top: 202 }}
                    >
                      Confirm Password
                    </p>
                    <input
                      className="flepx items-start justify-end t-4 pr-5 bg-white border border-black rounded-lg shadow pl-96 pb-7 border-opacity-10"
                      style={{ width: 474.35, height: 68 }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <link
                      className="flex-1 h-full opacity-60"
                      src="https://via.placeholder.com/23.96725845336914x23.000001907348633"
                    />
                  </div>
                </div>
              </div>

              <div
                className="  p-5 mt-20  space-x-4 "
                style={{ width: 732, height: 60 }}
              >
                <button
                  type="submit"
                  className="col-start-1 w-40 h-12 bg-[#2DD3E3]  rounded-md shadow"
                  onClick={handleUpdate}
                >
                  Save Changes
                </button>

                <button
                  type="submit"
                  className=" w-40 h-12 bg-[#2DD3E3] rounded-md shadow"
                >
                  DELETE ACCOUNT
                </button>
                <button
                  type="submit"
                  className=" w-40 h-12 bg-[#2DD3E3]   rounded-md shadow"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex flex-col g:ml-20 ml-[-10em] mt-16">
              <div className="lg:text-5xl text-2xl">
                <b>Payment Methods & Tickets</b>
              </div>
              <div className="flex flex-rows gap-10 mt-8 mb-16">
                <div className="flex flex-col ">
                  <div className="lg:text-lg text-sm mb-2">3 Cards Added</div>
                  <button
                    type="button"
                    className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
                  >
                    SHOW CARDS
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="lg:text-lg text-sm mb-2 ">
                    10 Tickets Remaining
                  </div>
                  <button
                    type="button"
                    className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
                  >
                    BUY TICKETS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Edit;
