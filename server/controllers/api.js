const axios = require("axios");
const user = require('../models/User')

let Authorization;
let userId;

// CREATE AUTH TOKEN
exports.authToken = async (req, res) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://au-api.basiq.io/token',
      headers: {
        accept: 'application/json',
        scope: 'client',
        'basiq-version': '3.0',
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: process.env.API_KEY,
      },
    };

    const response = await axios.request(options);
    const authToken = 'Bearer ' + response.data.access_token;

    console.log(response);

    res.status(200).json({ authToken }); // Return the token to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching auth token' });
  }
};

// CREATE BASIQ USER
exports.createBasiqUser = async (req, res) => {
  try {
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
        email: 'gavin@hooli.com',
        mobile: '+61412460636',
        firstName: 'Gavin',
        lastName: 'Belson'
      },
    };

    console.log(options.data);
    
    const response = await axios.request(options);
    userId = response.data.id;

    console.log(response.data);
    
    res.status(200).json({ message: 'Basiq user created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating Basiq user' });
  }
};

// GET BASIQ USER
exports.getBasiqUser = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `https://au-api.basiq.io/users/${userId}`,
      headers: {
        accept: 'application/json',
        authorization: `${Authorization}`
      }
    };
    
    const response = await axios.request(options);
    
    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching Basiq user' });
  }
};

// CREATE AUTH LINK
exports.createAuthLink = async (req, res) => {
  try {
    const options = {
      method: 'POST',
      url: `https://au-api.basiq.io/users/${userId}/auth_link`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `${Authorization}`,
      },
      data: { mobile: user.phoneNumber }
    };
    
    const response = await axios.request(options);
    const bankAuthLink = response.data.links.public;

    console.log(response.data);

    res.status(200).json({ bankAuthLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating auth link' });
  }
};

// GET TRANSACTIONS
exports.getTransactions = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `https://au-api.basiq.io/users/${userId}/transactions`,
      params: { limit: '500' },
      headers: {
        accept: 'application/json',
        authorization: `${Authorization}`
      }
    };

    const response = await axios.request(options);
    
    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};