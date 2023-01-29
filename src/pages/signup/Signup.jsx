import img from './SignupImage.svg';
import SignupForm from '../../components/signupForm/SignupForm';

const Signup = () => {
  return (
    <div className="flex w-full justify-evenly tablet2:flex-col-reverse tablet2:items-center max:h-middle sm:pt-16 pb-6 pt-6">
      <img src={img} alt="signup" className="w-2/5 pt-20 tablet2:w-4/5" />
      <section className="w-2/5 tablet2:w-4/5">
        <h1 className=" font-normal text-5xl">SIGNUP NOW</h1>
        <SignupForm />
      </section>
    </div>
  );
};
export default Signup;
