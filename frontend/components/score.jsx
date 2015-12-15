import React from 'react';
import Relay from 'react-relay';

class Score extends React.Component {
  render() {
    var {initials, score} = this.props.score;
    return (
      <li key={initials}>
        <strong>{initials}</strong> {score}
      </li>
    );
  }
}
Score = Relay.createContainer(Score, {
  fragments: {
    score: () => Relay.QL`
      fragment on Score {
        initials,
        score,
      }
    `,
  },
});

export default Score;
