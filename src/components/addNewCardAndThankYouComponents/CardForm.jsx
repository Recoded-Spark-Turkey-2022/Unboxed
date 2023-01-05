import { useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../firebaseFile';
import Button from './Button';
import Input from './Input';

const CardForm = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvvCode, setCvvCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const buttonTitle = 'Add Card';
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
    const newCity = optionCountry.find(
      (item) => item.name === selectedItem
    )?.cities;
    setSelectedCities(newCity);
  }, [selectedItem]);
  const uid = auth?.currentUser?.uid;

  const cardInfo = doc(db, 'patients', uid);
  const addCard = () => {
    updateDoc(cardInfo, {
      cardNumber,
      expiryDate,
      cvvCode,
      nameOnCard,
      country: selectedItem,
      zipCode,
      city,
      address,
    });
  };

  return (
    <div className=" mt-10 grid grid-cols-2 w-2/3">
      <div className="text-2xl w-2/3">
        <div className=" text-Clr94AFB6 ">Supported Card types</div>
        <div className="grid grid-cols-2 divide-Cyan divide-x border border-Cyan  text-Cyan text-center">
          <div className="">Visa</div>
          <div className="">MasterCard</div>
        </div>
      </div>
      <div className="text-Clr94AFB6  w-2/3">
        <label className="text-2xl flex flex-col" htmlFor="country">
          Country
          <select
            className="text-sm border border-Clr94AFB6 h-10"
            name="Country"
            id="country"
            onChange={(e) => {
              setSelectedItem(e.target.value);
            }}
          >
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
        func={setCardNumber}
      />
      <Input
        labelText="ZIP Code"
        placeholder="ZIP Code"
        id="zipCode"
        type="text"
        func={setZipCode}
      />
      <div className="flex w-1/2">
        <Input
          labelText="Expiry Date"
          placeholder="MM / YY"
          id="expiryDate"
          type="text"
          func={setExpiryDate}
        />
        <Input
          labelText="CVV Code"
          placeholder="***"
          id="cvvCode"
          type="text"
          func={setCvvCode}
        />
      </div>
      <div className="text-Clr94AFB6  w-1/2">
        <label className="text-2xl flex flex-col" htmlFor="city">
          City
          <select
            className="text-sm border border-Clr94AFB6 h-10"
            name="City"
            id="city"
            onClick={(e) => {
              setCity(e.target.value);
            }}
          >
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
        func={setNameOnCard}
      />
      <Input
        labelText="Address"
        placeholder="Address"
        id="address"
        type="text"
        func={setAddress}
      />
      <Button text={buttonTitle} func={addCard} />
    </div>
  );
};
export default CardForm;
