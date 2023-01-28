import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/addNewCardAndThankYouComponents/Button';
import Title from '../../components/addNewCardAndThankYouComponents/Title';

const BuyTicketThankYou = () => {
  const titleTitle = 'thank you';
  const textTitle =
    'You purchase has been submitted, you should receive an email with the receipt soon.';
  const titleButton = 'back to home';
  const [navigate, setNavigate] = useState(false);
  const navHome = () => {
    setNavigate(true);
  };
  return (
    <div
      data-testid="buyTicketThankYou"
      className="px-28 pt-16 flex flex-col gap-16 h-middle"
    >
      <Title title={titleTitle} text={textTitle} />
      <Button text={titleButton} func={navHome} />
      {navigate && <Navigate to="/" />}
    </div>
  );
};
export default BuyTicketThankYou;