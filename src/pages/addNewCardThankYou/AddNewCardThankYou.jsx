import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Title from '../../components/addNewCardAndThankYouComponents/Title';
import Button from '../../components/addNewCardAndThankYouComponents/Button';

const AddNewCardThankYou = () => {
  const titleTitle = 'thank you';
  const textTitle =
    'Your new payment method is under review, you will receive an email soon when your card is confirmed.Otherwise you will get a notification telling you what went wrong and how to add a new card.';
  const titleButton = 'back to home';
  const [navigate, setNavigate] = useState(false);
  const navHome = () => {
    setNavigate(true);
  };
  return (
    <div
      data-testid="addNewCardThankYou"
      className="mx-28 mt-16 flex flex-col gap-6"
    >
      <Title title={titleTitle} text={textTitle} />
      <Button text={titleButton} func={navHome} />
      {navigate && <Navigate to="/" />}
    </div>
  );
};
export default AddNewCardThankYou;
