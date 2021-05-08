"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlCompose = require("graphql-compose");

var _user = require("./user");

const schemaComposer = new _graphqlCompose.SchemaComposer();
schemaComposer.Query.addFields({ ..._user.UserQuery
});
schemaComposer.Mutation.addFields({ ..._user.UserMutation
});
exports.default = schemaComposer.buildSchema();