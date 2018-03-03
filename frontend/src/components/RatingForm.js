import React from 'react'
import { Well } from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import {graphql} from 'react-apollo'
import gql from "graphql-tag"
import EmojiRater from "./EmojiRater"


const createRatingMutation = gql`
mutation BoltRating($bolt_id: ID!, $token: String!, $rating: Int, $picture: String){
  boltRating(bolt_id: $bolt_id, token: $token, rating: $rating, picture: $picture) {
    picture
    rating
  }
}`

class RatingForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      picture: props.picture,
      rating: props.rating
    };
  }

  async onUpload(picture) {
    this.setState({picture})

    let response = await this.props.mutate({
      variables: {
        bolt_id: this.props.bolt_id,
        token: this.props.token,
        rating: this.state.rating,
        picture: picture
      },
    })
  }

  async onRate(rating){
    this.setState({rating})

    let response = await this.props.mutate({
      variables: {
        bolt_id: this.props.bolt_id,
        token: this.props.token,
        rating: rating
      },
    })
  }

  render() {
    if(this.state.picture)
      debugger
    return (
      <div>
        <Well>
          <EmojiRater onRate={this.onRate.bind(this)} rating={this.state.rating ? this.state.rating : this.props.rating}/>
          <br/>
          <ImageUpload onUpload={this.onUpload.bind(this)} picture={this.state.picture ? this.state.picture : this.props.picture}/>
        </Well>
      </div>
    )
  }
}

export default graphql(createRatingMutation)(RatingForm)
