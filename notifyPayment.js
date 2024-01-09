var crypto = require('crypto');
const axios = require('axios');
const yargs = require('yargs');
// const { twelveHourFormat, twentyFourFormat } = require("./utils/formatDate.js"); 
 
const url =  "https://integration-webm-q-diool.ea.holcim.net/DIOOL";

const body = {
  uniqueReference: "UNJHGKMJ",
  customerReceiptNumber: "DIOOL229356",
  lineNo: "1",
  paymentProviderReference: "DIOOL.UNJHGKMJ",
  clientID: "105803",
  date: "20/12/2023 18:50:34",
  amount : "184000.00",
  paymentSource: "DIOOL",
  remark: "DIOOL through Diool",
  company: "06361",
  currency : "XAF"
  }

const { clientID, date, amount, uniqueReference, paymentProviderReference, paymentSource } = body;

const RequestURI = "/DIOOL";
const contentSize = JSON.stringify(body).length;
const PrivateKey = "aDqvYqLOFM@zJw#QVI3ngPb!NG4FCpTKQFz";
const stringToSign = `${PrivateKey}${amount}a${RequestURI}b${date}c${contentSize}d${clientID}e${uniqueReference}f`;

console.log('**************** Variables used for generating the Signature **************');
console.log(`PrivateKey: ${PrivateKey}`);
console.log(`amount: ${amount}, RequestURI: ${RequestURI}, date: ${date}, contentSize: ${contentSize} clientID: ${clientID} uniqueReference: ${uniqueReference}`);
console.log(`stringToSign: ${stringToSign}`);

const Authorization = crypto.createHash('sha256').update(stringToSign).digest('base64');
console.log("Authorization : " + Authorization);

const config = {
    headers: {
      Authorization,
      "Content-Type" : "application/json",
      contentSize,
      RequestURI,
    }
  };

 
const notifyPayment = async () => {
  try {    
    const response = await axios.post(url, body, config);
    if (response.data.fault) {
      console.log(response.data.fault.reasons);
    } else {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}

notifyPayment();
