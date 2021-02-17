// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');

const cookie =
  'express:sess=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall3TWpabVpUVTBNMk0wTlRJNE1EQXhZVEU0WkRaaFlTSXNJbVZ0WVdsc0lqb2laM1ZwYkdobGNtMWxZbWxoZG1GMGFVQm5iV0ZwYkM1amIyMGlMQ0pwWVhRaU9qRTJNVE14TmpneU1USjkuY3d0X1pRZ0RTcnY5QUIwWURDNk1hdmVpXzVDQW1ScUNWM1FDM3owSmpFQSJ9';

const doRequest = async () => {
  const { data } = await axios.post(
    `http://ticketing.com.br/api/tickets`,
    { title: 'ticket', price: 5 },
    {
      headers: { cookie },
    }
  );

  await axios.put(
    `http://ticketing.com.br/api/tickets/${data.id}`,
    { title: 'ticket', price: 10 },
    {
      headers: { cookie },
    }
  );

  axios.put(
    `http://ticketing.com.br/api/tickets/${data.id}`,
    { title: 'ticket', price: 15 },
    {
      headers: { cookie },
    }
  );
};

(async () => {
  const start = new Date().getTime();

  for (let i = 0; i < 400; i++) {
    await doRequest();
  }

  const end = new Date().getTime();
  const time = end - start;
  console.log('Execution time: ' + time);
})();
