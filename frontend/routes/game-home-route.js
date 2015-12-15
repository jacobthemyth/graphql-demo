var Relay = require('react-relay');

class GameHomeRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    game: (Component) => Relay.QL`
      query GameQuery {
        game { ${Component.getFragment('game')} },
      }
    `,
  };
}

export default GameHomeRoute;
