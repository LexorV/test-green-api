const urlServ = 'https://api.green-api.com';
const checkResponse = (res) => (res.ok ? res.json() : res.json()
  .then((err) => Promise.reject(err)));

export const sendText = (indefectionData, numberTel, message) => fetch(`${urlServ}/waInstance${indefectionData.idInstans}/sendMessage/${indefectionData.token}`, {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify({
    chatId: `${numberTel}@c.us`,
    message,
  }),
});

export const receiveNotification = (indefectionData) => fetch(`${urlServ}/waInstance${indefectionData.idInstans}/receiveNotification/${indefectionData.token}`, {
  method: 'GET',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
})
  .then(checkResponse);

export const deleteNotification = (indefectionData, idNotification) => fetch(`${urlServ}/waInstance${indefectionData.idInstans}/deleteNotification/${indefectionData.token}/${idNotification}`, {
  method: 'DELETE',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
});

export const recevingChat = (indefectionData, numberTel, count) => fetch(`${urlServ}/waInstance${indefectionData.idInstans}/getChatHistory/${indefectionData.token}`, {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify({
    chatId: `${numberTel}@c.us`,
    count,
  }),
})
  .then(checkResponse);
