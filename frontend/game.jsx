var $ = require('jquery');
var React = require('react');
var Relay = require('react-relay');
var ReactDOM = require('react-dom');
var Game = require('./components/game');
var GameHomeRoute = require('./routes/game-home-route');

$(document).ready(function() {
  ReactDOM.render(
    <Relay.RootContainer
        Component={Game}
        route={new GameHomeRoute()}
    />,
    document.querySelector('[data-component-container=game]')
  );
});
