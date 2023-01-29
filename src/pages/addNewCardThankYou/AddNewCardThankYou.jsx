import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import Title from '../../components/addNewCardAndThankYouComponents/Title';
import Button from '../../components/addNewCardAndThankYouComponents/Button';

const AddNewCardThankYou = () => {
  const { t } = useTranslation();
  const titleTitle = t('thankyou');
  const textTitle = t('cardThanks');
  const titleButton = t('backToHome');
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
