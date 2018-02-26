import React from 'react'
import EmojiRater from "./EmojiRater"
import { Well } from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import {graphql} from 'react-apollo'
import gql from "graphql-tag"


const createRatingMutation = gql`
mutation AnchorRating($anchor_id: ID!, $token: String!, $rating: Int, $picture: String){
  anchorRating(anchor_id: $anchor_id, token: $token, rating: $rating, picture: $picture) {
    picture
    rating
  }
}`

class AnchorRatingForm extends React.Component {
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
        anchor_id: this.props.anchor_id,
        token: this.props.token,
        picture: picture
      },
    })
  }

  async onRate(rating){
    this.setState({rating})

    let response = await this.props.mutate({
      variables: {
        anchor_id: this.props.anchor_id,
        token: this.props.token,
        rating: rating
      },
    })
  }

  render() {
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

export default graphql(createRatingMutation)(AnchorRatingForm)
