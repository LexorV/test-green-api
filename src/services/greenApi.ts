const urlServ = 'https://api.green-api.com/';

export const sendText = (indefectionData, numberTel, message) => fetch(`${urlServ}}/waInstance${indefectionData.idInstans}/sendMessage/${indefectionData.token}`, {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify({
    chatId: `${numberTel}@c.us`,
    message,
  }),
});

export const receiveNotification = (indefectionData) => fetch(`${urlServ}}/waInstance${indefectionData.idInstans}/receiveNotification/${indefectionData.token}`, {
  method: 'GET',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
});
