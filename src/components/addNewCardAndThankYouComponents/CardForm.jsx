import { useEffect, useState } from 'react';
import Input from './Input';

const CardForm = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);

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
      />
      <Input
        labelText="ZIP Code"
        placeholder="ZIP Code"
        id="zipCode"
        type="text"
      />
      <div className="flex w-1/2">
        <Input
          labelText="Expiry Date"
          placeholder="MM / YY"
          id="expiryDate"
          type="text"
        />
        <Input
          labelText="CVV Code"
          placeholder="***"
          id="cvvCode"
          type="text"
        />
      </div>
      <div className="text-Clr94AFB6  w-1/2">
        <label className="text-2xl flex flex-col" htmlFor="city">
          City
          <select
            className="text-sm border border-Clr94AFB6 h-10"
            name="City"
            id="city"
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
      />
      <Input
        labelText="Address"
        placeholder="Address"
        id="address"
        type="text"
      />
    </div>
  );
};
export default CardForm;
