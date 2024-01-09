var crypto = require('crypto');
const axios = require('axios');
const yargs = require('yargs');

const clientID = yargs.argv.clientID;
//const url = `https://integration-webm-q-diool.ea.holcim.net/DIOOL?clientID=${clientID}`;
const url = `https://integration-webm-q-diool.ea.holcim.net/DIOOL?clientID=${clientID}`;

console.log(clientID);

const headerValues = {
  RequestURI: `/DIOOL?clientID=${clientID}`,
  Timestamp: Math.floor(Date.now() / 1000),
  Nounce: "qgHLA0QW10l4njfavn9LP43c5OzvE3mD",
  Token1: "g5vWiKlO60RSKQ6iJBq1PhdI63oCiZBf",
  Token2: "3uwZ16W9sUxmKfyx509cfMrYU5ikCDlg",
}

const { RequestURI, Timestamp, Nounce, Token1, Token2 } = headerValues;

const PrivateKey = "aDqvYqLOFM@zJw#QVI3ngPb!NG4FCpTKQFz";
const stringToSign = `${PrivateKey}${Timestamp}a${RequestURI}b${Nounce}c${Token2}d`;

console.log('**************** Variables used for generating the Signature **************');
console.log(`PrivateKey: ${PrivateKey}`);
console.log(`Timestamp: ${Timestamp}, RequestURI: ${RequestURI}, Nounce: ${Nounce}, Token2: ${Token2}`);
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
  
const checkClientID = async () => {
  try {    
    const response = await axios.get(url, config);
    console.log(config);
    console.log(url);
    console.log(response.data);
    // console.log(response)
  } catch (error) {
    console.log('There was an error');
    console.log(error);
  }
}

checkClientID();
