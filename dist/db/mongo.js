"use strict";

const {
  MongoClient
} = require('mongodb');

exports.db = async () => {
  await MongoClient.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("connection to mongodb is successful");
    console.log(process.env.MONGODB_URL);
  });
};