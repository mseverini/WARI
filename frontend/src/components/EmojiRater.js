import React from 'react'
import Emoji from 'react-emoji-render';

class EmojiRater  extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <span className="rating">
          <Emoji className={"emoji-rating " + (this.props.rating == 0 ? 'selected' : '')} text={':('} onClick={() => this.props.onRate(0)}/>
          <Emoji className={"emoji-rating " + (this.props.rating == 1 ? 'selected' :'')} text={':/'} onClick={() => this.props.onRate(1)}/>
          <Emoji className={"emoji-rating " + (this.props.rating == 2 ? 'selected' : '')} text={':)'} onClick={() => this.props.onRate(2)}/>
        </span>
      </div>
    );
  }
}

export default EmojiRater
