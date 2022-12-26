import img from './SignupImage.svg';
import SignupForm from '../../components/signupForm/SignupForm';
import StyledSignup from './StyledSignup';

const Signup = () => {
  return (
    <StyledSignup>
      <img src={img} alt="signup" />
      <section>
        <h1>Signup Now</h1>
        <SignupForm />
      </section>
    </StyledSignup>
  );
};
export default Signup;
