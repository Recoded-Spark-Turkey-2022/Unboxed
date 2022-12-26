import styled from 'styled-components';

const StyledSignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  background: #ffffff;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 46px 30px 53px 30px;

  input {
    background: #ffffff;
    border: 1px solid #d1dbe3;
    border-radius: 5px;
    margin-bottom: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.318182px;
    color: #9dafbd;
    height: 50px;
    padding-left: 15px;
  }
  .birthday {
    display: flex;
    flex-direction: row;
    gap: 27px;
  }
  .birthday p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    letter-spacing: -0.318182px;
    color: #9dafbd;
    display: flex;
    margin-top: -10px;
  }
  .birthday input {
    width: 5vw;
  }
  .twoInput {
    display: flex;
    flex-direction: row;
    gap: 29px;
  }
  .twoInput input {
    width: 100%;
  }
`;

export default StyledSignUpForm;
