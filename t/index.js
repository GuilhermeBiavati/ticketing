process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');

const cookie =
  'express:sess=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall3TWpabVpUVTBNMk0wTlRJNE1EQXhZVEU0WkRaaFlTSXNJbVZ0WVdsc0lqb2laM1ZwYkdobGNtMWxZbWxoZG1GMGFVQm5iV0ZwYkM1amIyMGlMQ0pwWVhRaU9qRTJNVE14TmpneU1USjkuY3d0X1pRZ0RTcnY5QUIwWURDNk1hdmVpXzVDQW1ScUNWM1FDM3owSmpFQSJ9';

const doRequest = async () => {
  const { data } = await axios.post(
    `https://ticketing.com.br/api/tickets`,
    { title: 'ticket', price: 5 },
    {
      headers: { cookie },
    }
  );

  await axios.put(
    `https://ticketing.com.br/api/tickets/${data.id}`,
    { title: 'ticket', price: 10 },
    {
      headers: { cookie },
    }
  );

  axios.put(
    `https://ticketing.com.br/api/tickets/${data.id}`,
    { title: 'ticket', price: 15 },
    {
      headers: { cookie },
    }
  );
};

(async () => {
  var start = new Date().getTime();

  for (let i = 0; i < 200; i++) {
    await doRequest();
  }

  var end = new Date().getTime();
  var time = end - start;
  console.log('Execution time: ' + time);
})();


Meus ultimos trabalhos, feitos inteiramente por mim, consistiam em sites institucionais, lojas virtuais e sistemas administrativos gerais, em sua mairia estruturados com laravel https://mocelin.ind.br/home, https://netwi.net.br/home, http://clinicaharmonydv.com.br/. Estou cursando engenharia da computação, meu trabalho estava ficando muito monóto "eterno fazedor de crud" como Wesley diz, achei que não estava sendo valorizado suficientemente e o ambiente de trabalho estava insuportável, portanto acabei largando-o, eu estava sofrendo muito com questões de performance pois não conhecia nada mais além de estrututar layouts e fazer cruds no laravel, até que comecei estudar microservices pois eu queria entender como as "aplicações de gente grande" funcionavam, projeto ticketing no github reuni o que compreendo disso tudo até agora, até que cheguei na imerção full cycle e simplemente me apaixonei pela ideia, coisa q sempre pensei q fosse inimagianvel até q descobri q era possivel e fiquei extremamente empolgado.