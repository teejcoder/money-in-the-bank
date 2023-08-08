const axios = require("axios");

// CREATE AUTH TOKEN
exports.authToken = (req,res) => {
  const options = {
    method: 'POST',
    url: 'https://au-api.basiq.io/token',
    headers: {
      accept: 'application/json',
      scope: 'client',
      'basiq-version': '3.0',
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: process.env.API_KEY
    }
  };
  axios
    .request(options)
    .then(function (response) {
      Authorization = 'Bearer ' + response.data.access_token;
      console.log(response)
    })
    .catch(function (error) {
      console.error(error);
    });
}

// CREATE BASIQ USER
exports.createBasiqUser = (req, res) => {

  const options = {
    method: 'POST',
    url: 'https://au-api.basiq.io/users',
    headers: {
      accept: 'application/json',
      'basiq-version': '3.0',
      'content-type': 'application/json',
      Authorization: `${Authorization}`,
    },
    data: {
      email: user.email,
      mobile: user.phoneNumber,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      userId = response.data.id;
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// CREATE AUTH LINK
exports.createAuthLink =  (req, res) => {
  const options = {
    method: 'POST',
    url: `https://au-api.basiq.io/users/${userId}/auth_link`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `${Authorization}`,
    },
    data: {mobile: User.phoneNumber}
  };
  axios
    .request(options)
    .then(function (response) {
      bankAuthLink = response.data.links.public
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};


// GET BASIQ USER
exports.getBasiqUser = (req,res) => {
  const options = {
    method: 'GET',
    url: `https://au-api.basiq.io/users/${userId}`,
    headers: {
      accept: 'application/json',
      authorization: `${Authorization}`
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
  });

}

// GET USER ACCOUNTS
exports.getAccounts = (req,res) => {

  const options = {
    method: 'GET',
    url: `https://au-api.basiq.io/users/${userId}/accounts`,
    // params: {filter: 'account.id.eq(AU00002)'},
    headers: {
      'basiq-version': '3.0', 
      accept: 'application/json',
      authorization: `${Authorization}`
    }
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
  });

};


// GET TRANSACTIONS
exports.getTransactions = (req, res) => {
  const options = {
    method: 'GET',
    url: `https://au-api.basiq.io/users/${userId}/transactions`,
    params: {limit: '500'},
    headers: {
      accept: 'application/json',
      authorization: `${Authorization}`
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

};