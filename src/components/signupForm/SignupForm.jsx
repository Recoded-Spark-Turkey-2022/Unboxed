import { useState } from 'react';
import moment from 'moment';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from './firebaseFile';
import StyledSignUpForm from './StyledSignUpForm';

const SignupForm = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userConfirmEmail, setUserConfirmEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userBirthDay, setUserBirthDay] = useState('');
  const [userBirthMonth, setUserBirthMonth] = useState('');
  const [userBirthYear, setUserBirthYear] = useState('');
  const handleState = (state) => (e) => {
    state(e.target.value);
  };
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      ).then(() => {
        return addDoc(collection(db, 'patients'), {
          name: userName,
          surname: userSurname,
          email: userEmail,
          password: userPassword,
          birthday: moment(userBirthDay, userBirthMonth, userBirthYear).format(
            'DD MM YYYY'
          ),
        });
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInFacebook = () => {
    try {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider).then((re) =>
        addDoc(collection(db, 'patients'), { email: re.user.email })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <StyledSignUpForm>
      <section className="twoInput">
        <input
          type="text"
          value={userName}
          onChange={handleState(setUserName)}
          placeholder="Name"
        />
        <input
          type="text"
          value={userSurname}
          onChange={handleState(setUserSurname)}
          placeholder="Surname"
        />
      </section>

      <input
        type="email"
        value={userEmail}
        onChange={handleState(setUserEmail)}
        placeholder="Email"
      />
      <input
        type="email"
        value={userConfirmEmail}
        onChange={handleState(setUserConfirmEmail)}
        placeholder="Confirm Email"
      />
      <section className="twoInput">
        <input
          type="password"
          value={userPassword}
          onChange={handleState(setUserPassword)}
          placeholder="Password"
        />
        <input
          type="password"
          value={userConfirmPassword}
          onChange={handleState(setUserConfirmPassword)}
          placeholder="Confirm Password"
        />
      </section>

      <div className="birthday">
        <p>Birth Date</p>
        <input
          type="text"
          value={userBirthDay}
          onChange={handleState(setUserBirthDay)}
          placeholder="DD"
        />
        <input
          type="text"
          value={userBirthMonth}
          onChange={handleState(setUserBirthMonth)}
          placeholder="MM"
        />
        <input
          type="text"
          value={userBirthYear}
          onChange={handleState(setUserBirthYear)}
          placeholder="YYYY"
        />
      </div>

      <button type="submit" onClick={register}>
        Login
      </button>
      <button type="submit">Signup</button>
    </StyledSignUpForm>
  );
};
export default SignupForm;
