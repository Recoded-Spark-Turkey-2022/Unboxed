import img from './SignupImage.svg';
import SignupForm from '../../components/signupForm/SignupForm';

const Signup = () => {
  return (
    <div className="flex w-full gap-x-20 my-10 mx-20 md:mx-0 md:flex-col-reverse">
      <img
        src={img}
        alt="signup"
        className="w-2/5 mt-20 pt-10 md:w-5/6 md:mx-auto"
      />
      <section className="w-2/5 md:w-5/6 md:mx-auto">
        <h1 className=" font-normal text-5xl">SIGNUP NOW</h1>
        <SignupForm />
      </section>
    </div>
  );
};
export default Signup;
