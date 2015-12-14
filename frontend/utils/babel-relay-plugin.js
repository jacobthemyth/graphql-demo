var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../data/schema.json');
var relayPlugin = getBabelRelayPlugin(schema.data);
module.exports = relayPlugin;
