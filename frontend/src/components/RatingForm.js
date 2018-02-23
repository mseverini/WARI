import React from 'react'
import StarPicker from "./star-picker"
import { Well } from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import {graphql} from 'react-apollo'
import gql from "graphql-tag"
import Dropzone from 'react-dropzone'


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
      picture: this.props.picture
    };
  }

  async onUpload(picture) {
    this.state.picture = picture

    let response = await this.props.mutate({
      variables: {
        bolt_id: this.props.bolt_id,
        token: this.props.token,
        rating: this.state.rating,
        picture: this.state.picture
      },
    })
  }

  render() {
    return (
      <div>
        <Well>
          <StarPicker title={"How did it look to you?"}/>
          <br/>
          <ImageUpload onUpload={this.onUpload.bind(this)} />
        </Well>
      </div>
    )
  }
}

export default graphql(createRatingMutation)(RatingForm)
