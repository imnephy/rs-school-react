import { FC } from 'react';

import MyRadioButton from '../UI/radioButton/MyRadioButton';

interface GenderSwitcherProps {
  maleRef: React.Ref<HTMLInputElement>;
  femaleRef: React.Ref<HTMLInputElement>;
}

const GenderSwitcher: FC<GenderSwitcherProps> = ({ maleRef, femaleRef }) => {
  return (
    <div className="form-inputs__gender-switcher">
      <MyRadioButton name="gender" id="male-gender" defaultChecked text="male" ref={maleRef} />
      <MyRadioButton name="gender" id="female-gender" text="female" ref={femaleRef} />
    </div>
  );
};

export default GenderSwitcher;
