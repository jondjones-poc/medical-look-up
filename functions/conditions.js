const fs = require("fs").promises;
const path = require("path");
const products = require('./data/conditions.json');
const headers = {
    'content-type': 'application/json' ,
    'Access-Control-Allow-Origin': "*"
};

exports.handler = async () => {
  try {
    return {
        body: JSON.stringify(products),
        headers: headers,
        statusCode: 200,
    };
  } catch (e) {
      console.log(e);
      return {
        statusCode: 500,
        body: 'error'
      };
  }
};