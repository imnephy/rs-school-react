import { FC } from 'react';

interface PersonalProps {
  isInvalidCheck: boolean;
  checkboxRef: React.Ref<HTMLInputElement>;
}

const Personal: FC<PersonalProps> = ({ isInvalidCheck, checkboxRef }) => {
  return (
    <>
      <label htmlFor="checkPersonal">
        <input type="checkbox" name="checkPersonal" id="checkPersonal" ref={checkboxRef} />I consent
        to my personal data
      </label>
      {isInvalidCheck && <span>You should check</span>}
    </>
  );
};

export default Personal;
