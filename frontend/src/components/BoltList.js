import React from 'react'
import Bolt from './Bolt'
import Anchor from './Anchor'
import Collapsible from 'react-collapsible'
import CreateBolts from "./CreateBolts"
import Pitch from './Pitch'
import { Button } from 'react-bootstrap'

class BoltList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    };
    this.displayPitches.bind(this)
  }

  displayPitches() {
    let pitches = this.props.data.route.pitches
    let boltNumber = this.props.data.route.bolts.length-1
    let anchorIndex = this.props.data.route.anchors.length-1

    this.state.open = Array(pitches).fill(false)
    let pitchElements = []


    for(let i= this.props.data.route.pitches-1; i >= 0; i --){
      let pitchBolts= []
      if (anchorIndex >= 0 && this.props.data.route.anchors[anchorIndex].pitch == i ){
        pitchBolts.push(<Anchor  key={'anchor'+anchorIndex} anchor={this.props.data.route.anchors[anchorIndex]} anchor_id={this.props.data.route.anchors[anchorIndex].id} token={global.sessionStorage.getItem('token')}/>)
        anchorIndex --
      }
      while(boltNumber >= 0 && this.props.data.route.bolts[boltNumber].pitch == i){
        pitchBolts.push(<Bolt key={'bolt'+boltNumber} bolt={this.props.data.route.bolts[boltNumber]} bolt_id={this.props.data.route.bolts[boltNumber].id} token={global.sessionStorage.getItem('token')}/>)
        boltNumber --
      }
      pitchElements.push(<Pitch pitch={i} bolts={pitchBolts}/>)
    }

    return pitchElements

    // for(let j=)
    //
    // routeElements = routeElements.map((el, index) =>
    //
    //   <Collapsible key={'pitch'+(routeElements.length - index)} trigger={(
    //     <Button className="c-button" onClick={() => this.setState({open: !this.state.open[(routeElements.length - index)]})}>
    //       pitch {routeElements.length - index}
    //     </Button>
    //   )} >
    //     <span> Remember: bolt 1 is closest to the ground </span>
    //     {el}
    //   </Collapsible>
    // )
    // return (
    //   <div>
    //     {routeElements}
    //   </div>
    // )
  }

  render() {
    if(this.props.data.loading === false) {
      return (
        <div>
          <h2>{this.props.data.route.name} </h2>
          {
            this.props.data.route.bolts == 0 && this.props.data.route.anchors == 0  ?
              <CreateBolts {...this.props}/> :
              this.displayPitches()
          }
        </div>
      )
    }
    return <h2>...Loading</h2>
  }
}

export default BoltList
