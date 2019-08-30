const request = require('request-promise');
const express = require('express');
const cors = require('cors');

const TokenProvider = require('./TokenProvider');
const formatStage1Item = require('./format/formatStage1');

const app = express();
app.use(cors());

const port = 3000;

const { token } = new TokenProvider();

const options = {
  uri: 'https://graph.microsoft.com/v1.0'
    + '/sites/af292231-a65c-44ca-aa57-8f6748c3b6df' // iconnect
    + '/sites/f0935a86-256b-4a11-a29c-5fc1424d2d42' // PALS
    + '/lists/d6f1c2ac-f966-40c4-b5ab-571be0bc237f' // Stage1BA
    + '/items?expand=fields',
  headers: {
    authorization: `Bearer ${token}`,
  },
};

app.get('/', async (req, res, next) => {
  try {
    // TODO: get by id...
    const odata = await request(options);
    const item = JSON.parse(odata).value.find(x => x.id === '20').fields;

    // console.log('got item: ', item);
    const mappedItem = formatStage1Item(item);
    // console.log('sending item: ', mappedItem);
    return res.send(mappedItem);
  } catch (err) {
    return next(err);
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
