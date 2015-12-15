import React from 'react';
import Relay from 'react-relay';
import Score from './score';

class Game extends React.Component {
  _handleCountChange = (e) => {
    this.props.relay.setVariables({
      numToShow: e.target.value
        ? parseInt(e.target.value, 10)
        : 0,
    });
  }
  _handleSortChange = (e) => {
    this.props.relay.setVariables({
      sortDirection: e.target.value,
    });
  }
  render() {
    var {scores} = this.props.game;
    var {
      numToShow,
      sortDirection,
    } = this.props.relay.variables;
    return (
      <div>
        <h1>High Scores</h1>
        <select
          defaultValue={sortDirection}
          onChange={this._handleSortChange}>
          <option value="asc">Bottom</option>
          <option value="desc">Top</option>
        </select>{' '}
        <input
          onChange={this._handleCountChange}
          min="0"
          style={{width: 44}}
          type="number"
          value={numToShow}
        />
        <ul>
          {scores.map(
            score => <Score score={score} />
          )}
        </ul>
      </div>
    );
  }
}
Game = Relay.createContainer(Game, {
  initialVariables: {
    numToShow: 10,
    sortDirection: 'desc',
  },
  fragments: {
    game: () => Relay.QL`
      fragment on Game {
        scores(
          numToShow: $numToShow,
          sortDirection: $sortDirection
        ) {
          ${Score.getFragment('score')},
        },
      }
    `,
  },
});

export default Game;
