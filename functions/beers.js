const axios = require("axios")

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    console.log(response)
    return response
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
          