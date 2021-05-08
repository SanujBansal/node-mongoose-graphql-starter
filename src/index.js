import schema from './schema';

const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

const { graphqlHTTP } = require('express-graphql');

app.use('/', graphqlHTTP( async (request,reponse, params) => ({
    schema: schema,
    graphiql: true
})));

app.listen(5000, () => {
    console.log('app is running on port 5000');
})