import React from 'react'

class StarPicker  extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      raiting: 0
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <span className="rating">
          <span className="star" href="#">☆</span>
          <span className="star" href="#">☆</span>
          <span className="star" href="#">☆</span>
          <span className="star" href="#">☆</span>
        </span>
      </div>
    );
  }
}

export default StarPicker
