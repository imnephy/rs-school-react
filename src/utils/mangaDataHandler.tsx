const getStrFromArray = (arr: { name: string }[]) => {
  const arrCopy = [...arr];
  arrCopy.length = arr.length > 3 ? 3 : arr.length;
  return arrCopy.map((elem) => elem.name).join(', ');
};

export default getStrFromArray;

export const getCorrectLength = (str: string) => {
  return str.length > 40 ? `${str.slice(0, 40)}...` : str;
};
