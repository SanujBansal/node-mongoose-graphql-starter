"use strict";

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

require('dotenv').config();

require('./db/mongo').db();

const app = express();
app.use(express.json());

const {
  graphqlHTTP
} = require('express-graphql');

app.use('/', graphqlHTTP(async (request, reponse, params) => ({
  schema: _schema2.default,
  graphiql: true
})));
app.listen(5000, () => {
  console.log('app is running on port 5000');
});