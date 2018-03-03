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
      pitches: target.value ? Array(parseInt(target.value)).fill(0) : [],
      anchors: target.value ? Array(parseInt(target.value)).fill(false) : []
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
          <div className='pitch-form' key={i}>
            <span style={{ display: 'flex', 'justify-content': 'center'}}><h3>pitch {i+1}</h3></span>
            <span style={{ display: 'flex', 'justify-content': 'center'}}>
              <input type="checkbox" style={{width:'25px', height:'25px'}} id={i} onChange={this.handleAnchorChange.bind(this)}/>
              pitch {i+1} has bolted anchors
            </span>
            <br/>
           <span>
             How many bolts are there on pitch {i+1} (this doesn't include anchors)
             <input style={{width:40+'px'}} id={i} name="pitches" type="text" onChange={this.handleChange.bind(this)} />
           </span>
            <br/><br/>
          </div>
        );
      }
    )

    return(
      <div>
        <h3> No one has entered bolting information yet!</h3>
        <h3>Can you help?</h3>
        <label htmlFor="pitches" style={{display:'inline'}}>How may pitches are there?</label>
        <input id="pitches" name="pitches" type="text" onChange={this.handlePitchChange.bind(this)} />

        {pitches}

        <div style={{fontSize:'1rem', 'text-align':'center'}}>Please enter this carefully (It is kind of a bummer if this gets put in wrong)</div>
        <span style={{ display: 'flex', 'justify-content': 'center'}}>
        {pitches.length ?
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          : null
        }
        </span>
      </div>
    )
  }
}

export default graphql(createBoltsMutation)(CreateBolts)
