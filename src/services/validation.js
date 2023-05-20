export const validation = (valueField, size = 200) => {
  if (valueField === '') {
    return { isError: true, ErrorText: 'Поле не должно быть пустым' };
  }
  if (String(valueField).length < size) {
    return { isError: true, ErrorText: `В поле должно быть не меньше ${size} символов` };
  }

  return { isError: false, ErrorText: '' };
};
export const validationTel = (tel, size) => {
  if (tel === '') {
    return { isError: true, ErrorText: 'Поле не должно быть пустым' };
  }
  if (String(tel).length < size) {
    return { isError: true, ErrorText: 'Некорректный формат телефона' };
  }
  return { isError: false, ErrorText: '' };
};
export const exceptionPlus = (tel) => String(tel).split('').filter((el) => el !== '+').join('');
