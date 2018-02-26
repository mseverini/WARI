import React from 'react'
import { Button } from 'react-bootstrap'
import Collapsible from 'react-collapsible'
import { graphql } from 'react-apollo'

import gql from 'graphql-tag'
import AnchorRatingForm from "./AnchorRatingForm"

const displayRating = gql`query AreaQuery($anchor_id: ID!, $token: String!) {
  anchor_rating(token: $token, anchor_id: $anchor_id){
    picture
    rating
  }
}`

class Anchor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Collapsible trigger={(
          <Button className="c-button" onClick={() => this.setState({open: !this.state.open})}>
            Anchors
          </Button>
        )} >
          <AnchorRatingForm
            anchor_id={this.props.anchor_id}
            token={this.props.token}
            picture={this.props.data.anchor_rating ? this.props.data.anchor_rating.picture : null}
            rating={this.props.data.anchor_rating ? this.props.data.anchor_rating.rating : null}
          />
        </Collapsible>
      </div>
    )
  }
}

export default graphql(displayRating)(Anchor)

