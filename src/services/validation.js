const validation = (valueField, size = 200) => {
  if (valueField === '') {
    return { isError: true, ErrorText: 'Поле не должно быть пустым' };
  }
  if (String(valueField).length < size) {
    return { isError: true, ErrorText: `В поле должно быть не меньше ${size} символов` };
  }

  return { isError: false, ErrorText: '' };
};
export default validation;
