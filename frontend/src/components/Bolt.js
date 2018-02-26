import React from 'react'
import { Button } from 'react-bootstrap'
import Collapsible from 'react-collapsible'
import { graphql } from 'react-apollo'

import gql from 'graphql-tag'
import RatingForm from "./RatingForm"

const displayRating = gql`query AreaQuery($bolt_id: ID!, $token: String!) {
  bolt_rating(token: $token, bolt_id: $bolt_id){
    picture
    rating
  }
}`

class Bolt extends React.Component {
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
            Bolt {this.props.bolt.number + 1}
          </Button>
        )} >
          <RatingForm
            bolt_id={this.props.bolt_id}
            token={this.props.token}
            picture={this.props.data.bolt_rating ? this.props.data.bolt_rating.picture : null}
            rating={this.props.data.bolt_rating ? this.props.data.bolt_rating.rating : null}
          />
        </Collapsible>
      </div>
    )
  }
}

export default graphql(displayRating)(Bolt)
