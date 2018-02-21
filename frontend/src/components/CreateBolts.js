import React from 'react'
import {graphql} from 'react-apollo'
import gql from "graphql-tag"

const createBoltsMutation = gql`
mutation CreateBolts($route_id: ID!, $bolts: [Int!]!, $anchors: [Boolean!]!, $pitches: Int!){
  createBolts(route_id:$route_id,bolts: $bolts, anchors: $anchors, pitches:$pitches) {
    bolts{
      number
      pitch
    }
    anchors{
      pitch
    }
  }
}`

class CreateBolts extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      pitches: [],
      anchors: []
    };
  }

  handlePitchChange(event) {
    const target = event.target;

    this.setState({
      pitches: Array(parseInt(target.value)).fill(0),
      anchors: Array(parseInt(target.value)).fill(false)
    });
  }

  handleChange(event) {
    const target = event.target;

    this.state.pitches[target.id] = parseInt(target.value)
    this.setState({pitches: this.state.pitches})
  }

  handleAnchorChange(event){
    const target = event.target;

    this.state.anchors[target.id] = target.checked
    this.setState({anchors: this.state.anchors})
  }

  async handleSubmit(e) {
    e.preventDefault()

    let response = await this.props.mutate({
      variables: {
        route_id: this.props.route_id,
        bolts: this.state.pitches,
        pitches: this.state.pitches.length,
        anchors: this.state.anchors
      },
    })

    window.location.reload()
  }

  render() {
    var pitches = this.state.pitches.map((_,i) => {
        return (
          <div key={i}>
            <span>
              Does pitch {i+1} have bolted anchors?
              <input style={{margin: 20+"px"+ 0, width:40+'px'}} type="checkbox" id={i} onChange={this.handleAnchorChange.bind(this)}/>
            </span>
            <br/>
           <span>
             How may bolts are there on pitch {i+1}
             <input style={{width:40+'px'}} id={i} name="pitches" type="text" onChange={this.handleChange.bind(this)} />
           </span>
            <br/><br/>
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

        {pitches.length ?
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          : null
        }
      </div>
    )
  }
}

export default graphql(createBoltsMutation)(CreateBolts)
