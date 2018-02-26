import React from 'react'
import StarPicker from "./star-picker"
import { Well } from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import {graphql} from 'react-apollo'
import gql from "graphql-tag"
import Dropzone from 'react-dropzone'


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
      picture: props.picture
    };
  }

  async onUpload(picture) {
    this.setState({picture})

    let response = await this.props.mutate({
      variables: {
        anchor_id: this.props.anchor_id,
        token: this.props.token,
        rating: this.state.rating,
        picture: picture
      },
    })
  }

  render() {
    if(this.state.picture)
      debugger
    return (
      <div>
        <Well>
          <StarPicker title={"How did it look to you?"}/>
          <br/>
          <ImageUpload onUpload={this.onUpload.bind(this)} picture={this.state.picture ? this.state.picture : this.props.picture}/>
        </Well>
      </div>
    )
  }
}

export default graphql(createRatingMutation)(AnchorRatingForm)
