import { useState } from 'react';
import moment from 'moment';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import {  NavLink } from 'react-router-dom';
import { auth, db } from '../../firebaseFile';
import LoginButtons from '../google&facebook/LoginButtons';

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
  const [newError, setNewError] = useState();
  // eslint-disable-next-line no-unused-vars
  // const [navigate, setNavigate] = useState(false);

  // Register function
  const register = async (e) => {
    e.preventDefault();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    return setDoc(doc(db, 'patients', user.uid), {
      name: userName,
      surname: userSurname,
      email: userEmail,
      password: userPassword,
      birthday: moment(userBirthDay, userBirthMonth, userBirthYear).format(
        'DD MM YYYY'
      ),  
    }).catch((error) => setNewError(error.message));
  };

  // This would only work with onSubmit
  // const handleEmailValidation =(e)=>{
  //   if(userEmail != userConfirmEmail) {
  //     e.setCustomValidity("Emails Don't Match");
  //   } else {
  //     e.setCustomValidity('');
  //   }
  // }
  return (
    <form data-testid="signup">
      <div className="flex flex-col mt-20 px-10 py-5 rounded-md shadow-[0px_10px_16px_rgba(0,0,0,0.1)]">
        <section className="flex gap-5">
          <input
            type="text"
            value={userName}
            onChange={handleState(setUserName)}
            placeholder="Name"
            className="rounded-md w-1/2 mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
          />
          <input
            type="text"
            value={userSurname}
            onChange={handleState(setUserSurname)}
            placeholder="Surname"
            pattern="^[a-zA-Z0-9]{1,30}$"
            required
            title="Surname shouldn't include any special character!"
            className="rounded-md w-1/2 mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
          />
        </section>

        <input
          type="email"
          value={userEmail}
          onChange={handleState(setUserEmail)}
          placeholder="Email"
          required
          className="rounded-md mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
        />
        <input
          type="email"
          value={userConfirmEmail}
          onChange={handleState(setUserConfirmEmail)}
          placeholder="Confirm Email"
          pattern={userEmail}
          title="Emails don't match"
          className="rounded-md mb-3 h-12 pl-2 border border-solid border-[#D1DBE3]"
        />
        <section className="flex gap-5 425:flex-col 425:gap-0">
          <input
            type="password"
            value={userPassword}
            onChange={handleState(setUserPassword)}
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
            title="Password should include minimum 8 characters, at least one letter and one number"
            className="rounded-md mb-3 h-12 w-1/2 425:w-full pl-2 border border-solid border-[#D1DBE3]"
          />
          <input
            type="password"
            value={userConfirmPassword}
            onChange={handleState(setUserConfirmPassword)}
            placeholder="Confirm Password"
            pattern={userPassword}
            title="Passwords don't match"
            required
            className="rounded-md mb-3 h-12 w-1/2 425:w-full pl-2 border border-solid border-[#D1DBE3]"
          />
          {userPassword !== userConfirmPassword ? (
            <p>Passwords dont match</p>
          ) : (
            ''
          )}
        </section>

        <div className="flex gap-5">
          <p className="rounded-md mb-3 h-12 w-2/5 text-center flex justify-center items-center	">
            Birth Date
          </p>
          <input
            type="text"
            value={userBirthDay}
            onChange={handleState(setUserBirthDay)}
            placeholder="DD"
            className="rounded-md mb-3 h-12 w-1/5 pl-2 425:text-center 425:pl-0 border border-solid border-[#D1DBE3]"
          />
          <input
            type="text"
            value={userBirthMonth}
            onChange={handleState(setUserBirthMonth)}
            placeholder="MM"
            className="rounded-md mb-3 h-12 w-1/5 pl-2 425:text-center 425:pl-0 border border-solid border-[#D1DBE3]"
          />
          <input
            type="text"
            value={userBirthYear}
            onChange={handleState(setUserBirthYear)}
            placeholder="YYYY"
            className="rounded-md mb-3 h-12 w-2/5 pl-2 425:text-center 425:pl-0  border border-solid border-[#D1DBE3]"
          />
        </div>
        <section className="flex justify-center gap-10 font-medium mt-5">
          <button
            type="submit"
            className="h-16 w-1/3	rounded-md border border-solid border-[#2DD3E3] text-2xl text-[#2DD3E3] 425:text-xl"
          >
            <NavLink to="login">To login</NavLink>
          </button>
          <button
            type="submit"
            className="h-16	w-1/3	rounded-md bg-[#2DD3E3] text-2xl text-black shadow-[0px_7px_20px_rgba(0,0,0,0.2)] 425:text-xl"
            onClick={
              userPassword === userConfirmPassword &&
              userEmail === userConfirmEmail
                ? register
                : null
            }
          >
            Signup
          </button>
        </section>
      </div>
      {newError && <div>{newError}</div>}
      <LoginButtons setNewError={setNewError} />
      {/* {navigate && <Navigate to="/signup-thanks" />} */}
    </form>
  );
};
export default SignupForm;
