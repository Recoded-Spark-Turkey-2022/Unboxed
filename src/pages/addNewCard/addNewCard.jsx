import { useTranslation } from 'react-i18next';
import CardForm from '../../components/addNewCardAndThankYouComponents/CardForm';
import CardPictures from '../../components/addNewCardAndThankYouComponents/CardPictures';
import Title from '../../components/addNewCardAndThankYouComponents/Title';

const AddNewCard = () => {
  const { t } = useTranslation();
  const titleText = t('addCradDetailsText');
  const titleTitle = t('addCradDetails');

  return (
    <div className="mx-28 mt-16 sm:mx-4 md:mx-8">
      <Title text={titleText} title={titleTitle} />
      <div className="flex sm:flex-col-reverse sm:mt-4 lg:flex-col-reverse ">
        <CardForm />
        <CardPictures />
      </div>
    </div>
  );
};
export default AddNewCard;
