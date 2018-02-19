import React from 'react'
import {graphql} from 'react-apollo'
import gql from "graphql-tag"

const createBoltsMutation = gql`
mutation CreateBolts($route_id: ID!, $bolts: [Int!]!, $pitches: Int!){
  createBolts(route_id:$route_id,bolts: $bolts, pitches:$pitches) {
    bolts{
      number
    }
  }
}`

class CreateBolts extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      pitches: []
    };
  }

  handlePitchChange(event) {
    const target = event.target;

    this.setState({
      [ target.name]: Array(parseInt(target.value)).fill(0)
    });
  }

  handleChange(event) {
    const target = event.target;

    this.state.pitches[target.id] = parseInt(target.value)
    this.setState({pitches: this.state.pitches})
  }

  async handleSubmit(e) {
    e.preventDefault()

    let response = await this.props.mutate({
      variables: {
        route_id: this.props.route_id,
        bolts: this.state.pitches,
        pitches: this.state.pitches.length
      },
    })

    window.location.reload()
  }

  render() {
    var pitches = this.state.pitches.map((_,i) => {
        return (
          <div key={i}>
            <label htmlFor={i}>How may bolts are there on pitch {i+1}</label>
            <input id={i} name="pitches" type="text" onChange={this.handleChange.bind(this)} />
          </div>
        );
      }
    )

    return(
      <div>
        <h2> No one has entered bolting information yet!</h2>
        <h3>Can you help?</h3>
        <label htmlFor="pitches">How may pitches are there?</label>
        <input id="pitches" name="pitches" type="text" onChange={this.handlePitchChange.bind(this)} />

        {pitches}
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default graphql(createBoltsMutation)(CreateBolts)
