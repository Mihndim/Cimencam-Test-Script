# CIMENCAM DIOOL INTEGRATION POC
 These are Node Scripts that sends requests to Cimencam ERP as a POC in Cimencam / Integration. 

## Built With

- Node JS

## Getting Started

To get a local copy up and running follow these simple example steps.
- Open your terminal
- Clone the repository: `git clone git@github.com:Mihndim/Cimencam-Test-Script.git`
- Cd into 
- Run npm install to install dependencies
- Run `node checkClientId.js --clientID="{clientId}" ` to check the clientID and status.
- Run `node notifyPayment.js ` to notify a payment after modifying the notifyPayment.js file with amount, clientID, payment references.
- Run `node checkStatus.js --uniqueReference="{uniqueReference} ` to check the status of a payment passing the Diool uniqueReference of the transaction. 

### Prerequisites
- Node v18.18.2 or above
- 
## Author

👤 **Mih Julius**

- Github: [@Mihndim2020](https://github.com/Mihndim)
- Linkedin: [Mih Julius](https://www.linkedin.com/mih-julius)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Mihndim/Cimencam-Test-Script/issues).


## Acknowledgments

- Diool Cameroon SAS. 
