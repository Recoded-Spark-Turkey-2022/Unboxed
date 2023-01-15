import { React, useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

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
      await updateDoc(get, { email, password });
      await sendPasswordResetEmail(auth.currentUser);
    } catch (err) {
      console.log(err);
      throw new Error('Invalid current password or unexpected error occurred.');
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      const emailNew = auth.currentUser.email;
      setEmail(emailNew);

      console.log(emailNew, 'email');
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
    <form className="relative h-full bg-white">
      <div
        className="absolute relative left-top"
        style={{ width: 293, height: 337, left: 143, top: 191 }}
      >
        <div
          className="absolute relative top-0 left-0"
          style={{ width: 293, height: 316.32 }}
        >
          <div className="container flex flex-col items-center px-5 py-24 mx-auto bg-gray-300 rounded-full w-72 h-80 md:flex-row" />
          <image
            className="absolute top-0 left-0 w-80 h-80"
            src="https://via.placeholder.com/315x315"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 w-20 h-16 mx-auto bg-white border-2 border-black rounded-full" />
        <image
          className="absolute h-12 w-14"
          style={{ left: 119, top: 273 }}
          src="https://via.placeholder.com/54x52"
        />
      </div>
      <div
        className="absolute relative"
        style={{ width: 733, height: 811, left: 564, top: 191 }}
      >
        <p className="absolute top-0 left-0 text-5xl font-medium">
          PROFILE INFO
        </p>
        <p className="absolute text-2xl" style={{ left: 1, top: 104 }}>
          Full Name
        </p>
        <input
          type="text"
          name="displayName"
          className="absolute bg-white border border-black rounded-lg shadow border-opacity-10"
          style={{ width: 475, height: 68, left: 257, top: 88 }}
        />
        <p className="absolute text-2xl" style={{ left: 0, top: 186 }}>
          Education Level
        </p>
        <input
          className="absolute inline-flex items-center justify-end py-5 pr-5 bg-white border border-black rounded-lg shadow pl-96 border-opacity-10"
          style={{ width: 475, height: 68, left: 257, top: 170 }}
        />

        <p className="absolute text-2xl" style={{ left: 0, top: 268 }}>
          Hobbies
        </p>
        <input
          className="absolute bg-white border border-black rounded-lg shadow border-opacity-10"
          style={{ width: 475, height: 68, left: 257, top: 252 }}
        />
        <p className="absolute text-2xl" style={{ left: 0, top: 350 }}>
          Family Size
        </p>
        <input
          className="absolute w-16 h-16 bg-white border border-black rounded-lg shadow border-opacity-10"
          style={{ left: 257, top: 334 }}
        />
        <p className="absolute text-2xl" style={{ left: 359, top: 350 }}>
          Member(s)
        </p>
        <p className="absolute text-2xl" style={{ left: 0, top: 432 }}>
          Gender
        </p>
        <input
          className="absolute inline-flex items-center justify-end py-5 pr-5 bg-white border border-black rounded-lg shadow pl-96 border-opacity-10"
          style={{ width: 475, height: 68, left: 257, top: 417 }}
        />
        <image
          className="flex-1 h-full rounded-lg"
          src="https://via.placeholder.com/30x30"
        />
        <p className="absolute text-2xl" style={{ left: 0, top: 514 }}>
          Birth Date
        </p>
        <div
          className="absolute"
          style={{ width: 474.72, height: 68.35, left: 257, top: 498 }}
        >
          <input
            className="flex items-center justify-end pt-5 pb-6 pr-6 bg-white border border-black rounded-lg shadow pl-96 border-opacity-10"
            style={{ width: 474.72, height: 68.35 }}
          />
        </div>
        <p className="absolute text-2xl" style={{ left: 0, top: 596 }}>
          Email{' '}
        </p>
        <input
          type={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={email}
          className="absolute bg-white border border-black rounded-lg shadow border-opacity-10"
          style={{ width: 475, height: 68, left: 257, top: 580 }}
        />
        <p className="absolute text-2xl" style={{ left: 0, top: 678 }}>
          Phone Number
        </p>
        <link
          className="absolute bg-white border border-black rounded-lg shadow border-opacity-10"
          style={{ width: 475, height: 68, left: 257, top: 662 }}
        />
        <p className="absolute text-2xl" style={{ left: 1, top: 759 }}>
          Upload ID
        </p>

        <div
          className="absolute bottom-0 right-0 inline-flex items-center justify-end py-4 pr-5 bg-white border border-black rounded-lg shadow pl-96 border-opacity-10"
          style={{ width: 475, height: 68 }}
        >
          <image
            className="flex-1 h-full rounded-lg"
            src="https://via.placeholder.com/35x35"
          />
        </div>
      </div>
      <div
        className="relative mt-20 "
        style={{ width: 733, height: 811, left: 564, top: 191 }}
      >
        <p className="absolute top-0 left-0 text-5xl font-medium">Security</p>

        <div
          className="absolute"
          style={{ width: 474.35, height: 68, left: 257.65, top: 100 }}
        >
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="flex items-center justify-end pt-6 pb-5 pr-5 bg-white border border-black rounded-lg shadow pl-96 border-opacity-10"
            style={{ width: 474.35, height: 68 }}
          />
          <link
            className="flex-1 h-full opacity-60"
            src="https://via.placeholder.com/23.96725845336914x23.000001907348633"
          />

          <input
            className="flex items-start justify-end pt-4 pr-5 bg-white border border-black rounded-lg shadow pl-96 pb-7 border-opacity-10"
            style={{ width: 474.35, height: 68 }}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <link
            className="flex-1 h-full opacity-60"
            src="https://via.placeholder.com/23.96725845336914x23.000001907348633"
          />
        </div>
        <p className="absolute text-2xl w-28 h-9" style={{ left: 1, top: 117 }}>
          Password
        </p>
        <p className="absolute w-56 text-2xl h-9" style={{ left: 1, top: 202 }}>
          Confirm Password
        </p>
      </div>

      <div
        className="relative inline-flex items-center justify-end mt-20 space-x-8"
        style={{ width: 732, height: 60 }}
      >
        <button
          type="submit"
          className="w-56 h-full bg-blue-400 rounded-md shadow"
          onClick={handleUpdate}
        >
          Save Changes
        </button>

        <p className="flex-1 h-full text-2xl text-center">SAVE CHANGES</p>

        <div className="w-56 h-full bg-blue-400 rounded-md shadow">
          <p className="flex-1 h-full text-2xl text-center">DELETE ACCOUNT</p>
        </div>
        <div className="w-56 h-full bg-blue-400 rounded-md shadow">
          <p className="flex-1 h-full text-2xl text-center">CANCEL </p>
        </div>
      </div>
      <div className="relative" style={{ width: 732, height: 227 }}>
        <p
          className="absolute top-0 left-0 text-5xl font-medium"
          style={{ width: 732, height: 73 }}
        >
          Payment Methods & Tickets
        </p>
        <p className="absolute w-64 text-2xl h-9" style={{ left: 0, top: 117 }}>
          3 Cards Added
        </p>
        <div className="absolute bottom-0 left-0 w-64 h-16 bg-blue-400 rounded-md shadow">
          <p className="flex-1 h-full text-2xl text-center">SHOW CARDS</p>
        </div>
        <p
          className="absolute w-64 text-2xl h-9"
          style={{ left: 280, top: 117 }}
        >
          10 Tickets Remaining
        </p>
        <div
          className="absolute w-64 h-16 bg-blue-400 rounded-md shadow"
          style={{ left: 280, top: 167 }}
        >
          <p className="flex-1 h-full text-2xl text-center">BUY TICKETS</p>
        </div>
      </div>
    </form>
  );
};

export default Edit;
