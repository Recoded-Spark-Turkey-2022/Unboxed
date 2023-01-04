import CardForm from '../../components/addNewCardAndThankYouComponents/CardForm';
import CardPictures from '../../components/addNewCardAndThankYouComponents/CardPictures';
import Title from '../../components/addNewCardAndThankYouComponents/Title';
import Button from '../../components/addNewCardAndThankYouComponents/Button';

const AddNewCard = () => {
  const titleText =
    'Please make sure all of the info you enter are the same as your card registration info.';
  const titleTitle = 'add card details';
  const buttonTitle = 'Add Card';

  return (
    <div className="mx-28 mt-16">
      <Title text={titleText} title={titleTitle} />
      <div className="flex mt-20">
        <CardForm />
        <CardPictures />
      </div>
      <Button text={buttonTitle} />
    </div>
  );
};
export default AddNewCard;
