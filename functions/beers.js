const axios = require("axios")

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

exports.handler = async (event) => {
let response
  try {
    response = await axios.get(API_ENDPOINT).then(res => res.data)
  } catch (error) {
    console.log(error);
    return {
        statusCode: err.statusCode || 500,
            body: JSON.stringify({
              error: err.message
            })
    };
  }
  return {
      statusCode: 200,
      body: JSON.stringify(response)
  }
};
          