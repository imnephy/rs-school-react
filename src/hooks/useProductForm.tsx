import { useEffect, useRef, useState } from 'react';

import { setFormCardsValue } from '@/features/form/formCardSlice';
import { useAppDispatch } from './redux';

import { IProductCard } from '@/pages/Forms';

import defaultPic from '@/assets/default.png';

const useProductForm = () => {
  const dispatch = useAppDispatch();
  const inputName: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputDate: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputCountry: React.MutableRefObject<HTMLSelectElement | null> = useRef(null);
  const inputGenderMale: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputGenderFemale: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputFileRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputCheckbox: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const defaultFile = import.meta.env.SSR
    ? null
    : new File([defaultPic], 'default.png', { type: 'image/png' });
  const defaultURL = defaultPic;

  const [validInputs, setValidInputs] = useState({
    invalidName: false,
    invalidDate: false,
    invalidCountry: false,
    invalidCheck: false,
    imageFile: defaultFile as File | null,
    imageUrl: null as string | null,
  });

  const onAddCard = (newProduct: IProductCard) => {
    dispatch(setFormCardsValue(newProduct));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputName.current?.value as string;
    const date = inputDate.current?.value as string;
    const country = inputCountry.current?.value as string;
    const gender = inputGenderMale.current?.checked ? 'male' : 'female';

    const image = validInputs.imageUrl ?? defaultURL;

    const check = inputCheckbox.current?.checked as boolean;
    const card: IProductCard = { name, date, country, gender, image, check };
    if (checkValidation(card)) {
      return;
    }
    onAddCard(card);
    resetForm();
  };
  const resetForm = () => {
    setValidInputs({
      invalidName: false,
      invalidDate: false,
      invalidCountry: false,
      invalidCheck: false,
      imageFile: defaultFile,
      imageUrl: null,
    });
    (inputName.current as HTMLInputElement).value = '';
    (inputDate.current as HTMLInputElement).value = '';
    (inputCountry.current as HTMLSelectElement).selectedIndex = 0;
    (inputGenderMale.current as HTMLInputElement).checked = true;
    (inputCheckbox.current as HTMLInputElement).checked = false;
  };
  const checkValidation = (card: IProductCard) => {
    const { name, date, country, check } = card;
    let invalidName = false;
    let invalidDate = false;
    let invalidCountry = false;
    let invalidCheck = false;
    if (!name || !name.match(/^[a-zA-Z]{4,}$/)) {
      invalidName = true;
    }

    if (!date) {
      invalidDate = true;
    }
    if (!country || Number(country) === 1) {
      invalidCountry = true;
    }
    if (!check) {
      invalidCheck = true;
    }
    setValidInputs({
      ...validInputs,
      invalidName,
      invalidDate,
      invalidCountry,
      invalidCheck,
    });

    if (invalidName || invalidDate || invalidCountry || invalidCheck) {
      return true;
    }
  };

  const handleImageInput = () => {
    const imageFile = inputFileRef.current?.files && inputFileRef.current.files[0];
    if (imageFile !== undefined) {
      setValidInputs({
        ...validInputs,
        imageUrl: URL.createObjectURL?.(imageFile as File),
        imageFile,
      });
    }
  };

  const { imageFile, imageUrl, invalidName, invalidDate, invalidCountry, invalidCheck } =
    validInputs;
  return {
    imageFile,
    imageUrl,
    invalidName,
    invalidDate,
    invalidCountry,
    invalidCheck,
    handleImageInput,
    handleSubmit,
    inputGenderMale,
    inputGenderFemale,
    inputFileRef,
    inputDate,
    inputCountry,
    inputName,
    inputCheckbox,
    domLoaded,
  };
};

export default useProductForm;
