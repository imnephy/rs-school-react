import { FC } from 'react';

import MyInput from '../UI/input/MyInput';
import GenderSwitcher from './GenderSwitcher';

import { COUNTRIES } from '@/utils/variables';

interface UserInfoProps {
  nameRef: React.Ref<HTMLInputElement>;
  countryRef: React.Ref<HTMLSelectElement>;
  dateRef: React.Ref<HTMLInputElement>;
  maleRef: React.Ref<HTMLInputElement>;
  femaleRef: React.Ref<HTMLInputElement>;
  isInvalidName: boolean;
  isInvalidCountry: boolean;
  isInvalidDate: boolean;
}

const UserInfo: FC<UserInfoProps> = ({
  nameRef,
  dateRef,
  countryRef,
  maleRef,
  femaleRef,
  isInvalidName,
  isInvalidCountry,
  isInvalidDate,
}) => {
  return (
    <>
      <MyInput type="text" placeholder="Your Name" ref={nameRef} />
      {isInvalidName && <span>name length should be {'>'} 3, latin characters</span>}
      <div className="form-inputs__short">
        <MyInput role="date" type="date" ref={dateRef} />
        {isInvalidDate && <span>invalid date</span>}
        <select data-testid="country-select" defaultValue="1" ref={countryRef}>
          <option value="1" disabled>
            Country
          </option>
          {COUNTRIES.map((country, i) => (
            <option key={i + 2} value={country}>
              {country}
            </option>
          ))}
        </select>
        {isInvalidCountry && <span>Choose country</span>}
      </div>
      <GenderSwitcher maleRef={maleRef} femaleRef={femaleRef} />
    </>
  );
};

export default UserInfo;
