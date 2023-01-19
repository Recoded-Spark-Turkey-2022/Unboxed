import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db, auth } from '../../firebaseFile';
import Button from './Button';
import Input from './Input';

const CardForm = () => {
  const [cardType, setCardType] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvvCode, setCvvCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [card, setCard] = useState({});

  const buttonTitle = 'Add Card';
  const navigate = useNavigate();

  const optionCountry = [
    {
      name: 'Turkey',
      id: 0,
      cities: [
        { name: 'Istanbul', id: 0 },
        { name: 'Izmir', id: 1 },
        { name: 'Ankara', id: 2 },
      ],
    },
    {
      name: 'Italy',
      id: 1,
      cities: [
        { name: 'Rome', id: 0 },
        { name: 'Milan', id: 1 },
        { name: 'Verona', id: 2 },
      ],
    },
    {
      name: 'France',
      id: 2,
      cities: [
        { name: 'Paris', id: 0 },
        { name: 'Nice', id: 1 },
        { name: 'Bordeaux', id: 2 },
      ],
    },
    {
      name: 'England',
      id: 3,
      cities: [
        { name: 'London', id: 0 },
        { name: 'Manchester', id: 1 },
        { name: 'Bristol', id: 2 },
      ],
    },
  ];
  useEffect(() => {
    const newCity = optionCountry?.find(
      (item) => item?.name === selectedItem
    )?.cities;
    setSelectedCities(newCity);
  }, [selectedItem]);

  const addCard = () => {
    const uid = auth?.currentUser.uid;
    const cardInfo = doc(db, 'patients', uid);
    updateDoc(cardInfo, {
      cards: arrayUnion(card),
    });
    navigate('/add-new-card-thank-you');
  };
  useEffect(() => {
    setCard((prev) => ({
      ...prev,
      expiryDate,
      cardType,
      cardNumber,
      city,
      cvvCode,
      zipCode,
      nameOnCard,
      address,
      selectedItem,
    }));
  }, [
    expiryDate,
    cardType,
    cardNumber,
    city,
    cvvCode,
    zipCode,
    nameOnCard,
    address,
    selectedItem,
  ]);
  return (
    <div
      data-testid="cardForm"
      className=" mt-10 grid grid-cols-2 w-2/3 sm:flex-col sm:flex sm:w-full sm:mt-4 lg:w-full"
    >
      <div className="text-2xl w-2/3 sm:w-full lg:w-4/5 sm:text-xl">
        <div className=" text-Clr94AFB6 ">Supported Card types</div>
        <div className="grid grid-cols-2 divide-Cyan divide-x border border-Cyan  text-Cyan text-center ">
          <button
            className={
              cardType === 'Visa' ? 'bg-orange-500 , text-white' : 'bg-white'
            }
            type="submit"
            value={cardType}
            onClick={() => {
              setCardType('Visa');
            }}
          >
            Visa
          </button>
          <button
            type="submit"
            className={
              cardType === 'MasterCard'
                ? 'bg-orange-500 , text-white'
                : 'bg-white'
            }
            value={cardType}
            onClick={() => {
              setCardType('MasterCard');
            }}
          >
            MasterCard
          </button>
        </div>
      </div>
      <div className="text-Clr94AFB6  w-2/3 sm:w-full lg:w-4/5">
        <label className="text-2xl flex flex-col" htmlFor="country">
          Country
          <select
            data-testid="selectInput"
            className="text-sm border border-Clr94AFB6 h-10"
            name="Country"
            id="country"
            onChange={(e) => {
              setSelectedItem(e.target.value);
            }}
          >
            <option value="">Please choose a country</option>
            {optionCountry?.map((item) => {
              return (
                <option key={item?.id} value={item?.name} name="Select">
                  {item?.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <Input
        labelText="Card Number"
        placeholder="Card Number"
        id="cardNumber"
        type="text"
        func={(e) => setCardNumber(e.target.value)}
      />
      <Input
        labelText="ZIP Code"
        placeholder="ZIP Code"
        id="zipCode"
        type="text"
        func={(e) => setZipCode(e.target.value)}
      />
      <div className="flex w-1/2 sm:flex-col sm:w-full">
        <Input
          labelText="Expiry Date"
          placeholder="MM / YY"
          id="expiryDate"
          type="text"
          func={(e) => setExpiryDate(e.target.value)}
        />
        <Input
          labelText="CVV Code"
          placeholder="***"
          id="cvvCode"
          type="text"
          func={(e) => setCvvCode(e.target.value)}
        />
      </div>
      <div className="text-Clr94AFB6  w-2/3 sm:w-full lg:w-4/5">
        <label className="text-2xl flex flex-col" htmlFor="city">
          City
          <select
            className="text-sm border border-Clr94AFB6 h-10"
            name="City"
            id="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option value="">Please choose a city</option>
            {selectedCities?.map((item) => {
              return (
                <option key={item?.id} value={item?.name} name="Select">
                  {item?.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <Input
        labelText="Name On Card"
        placeholder="Name On Card"
        id="name"
        type="text"
        func={(e) => setNameOnCard(e.target.value)}
      />
      <Input
        labelText="Address"
        placeholder="Address"
        id="address"
        type="text"
        func={(e) => setAddress(e.target.value)}
      />
      <Button text={buttonTitle} func={addCard} />
    </div>
  );
};
export default CardForm;
