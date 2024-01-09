const crypto = require('crypto');
const axios = require('axios');
const yargs = require('yargs');

const uniqueReference = yargs.argv.uniqueReference;
const url =  `https://integration-webm-q-diool.ea.holcim.net/DIOOL?uniqueReference=${uniqueReference}`;

const headerValues = {
  RequestURI: `/DIOOL?uniqueReference=${uniqueReference}`,
  Timestamp: Math.floor(Date.now() / 1000),
  Nounce: "5IWd7AM1rcU6RJYAujeqFl83vj20uOxt",
  Token1: "JtaUx2lCn0XA7gM5unK2DaOL314uHAp1",
  Token2: "3g7Vw2Z87ipfhjS0U6xva7UTHEokMrvZf",
}

const { RequestURI, Timestamp, Nounce, Token1, Token2 } = headerValues;

const PrivateKey = "aDqvYqLOFM@zJw#QVI3ngPb!NG4FCpTKQFz";
const stringToSign = `${PrivateKey}${Timestamp}a${RequestURI}b${Nounce}c${Token1}d`;

console.log('**************** Variables used for generating the Signature **************');
console.log(`PrivateKey: ${PrivateKey}`);
console.log(`Timestamp: ${Timestamp}, RequestURI: ${RequestURI}, Nounce: ${Nounce}, Token1: ${Token1}`);
console.log(`stringToSign: ${stringToSign}`);

const Authorization = crypto.createHash('sha256').update(stringToSign).digest('base64');
console.log("Authorization : " + Authorization);

const config = {
    headers: {
      Authorization,
      RequestURI,
      Timestamp,
      Nounce,
      Token1,
      Token2,
    }
  };
 
const checkStatus = async () => {
  try {    
    const response = await axios.get(url, config);
    console.log(config)
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

checkStatus();
  
