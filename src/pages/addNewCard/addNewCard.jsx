import CardForm from '../../components/addNewCardAndThankYouComponents/CardForm';
import CardPictures from '../../components/addNewCardAndThankYouComponents/CardPictures';
import Title from '../../components/addNewCardAndThankYouComponents/Title';

const AddNewCard = () => {
  const titleText =
    'Please make sure all of the info you enter are the same as your card registration info.';
  const titleTitle = 'add card details';

  return (
    <div className="font-poppins pl-20 pr-20 w-full flex flex-col justify-between pb-24 lg:pl-4 lg:pr-4 max:h-middle pt-8 sm:pt-12">
      <Title text={titleText} title={titleTitle} />
      <div className="flex sm:flex-col-reverse sm:mt-4 lg:flex-col-reverse ">
        <CardForm />
        <CardPictures />
      </div>
    </div>
  );
};
export default AddNewCard;
