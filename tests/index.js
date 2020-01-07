var Ajv = require('ajv');

var data = require('../data');
var schema = require('../schema/data-schema');
var groups = require('../schema/groups-schema');
var match = require('../schema/match-schema');
var stadium = require('../schema/stadium-schema');
var teams = require('../schema/teams-schema');
var tvchannels = require('../schema/tvchannels-schema');

var ajv = new Ajv({
    schemas: [schema, groups, match, stadium, teams, tvchannels]
});

var validate = ajv.compile(schema);
var valid = validate(data);
if (!valid) {
    console.log(validate.errors);
    throw new Error('Validation failed');
}
