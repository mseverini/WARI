import React from 'react'
import Collapsible from 'react-collapsible'
import { Button } from 'react-bootstrap'


class Pitch extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      open: false,
    }
  }

  render() {
    return (
      <div>
        <Collapsible key={'pitch'+this.props.pitch} trigger={(
          <Button className="c-button" onClick={() => this.setState({open: !this.state.open})}>
            pitch {this.props.pitch+1}
          </Button>
        )} >
          <span> Remember: bolt 1 is closest to the ground </span>
          {this.props.bolts}
        </Collapsible>
      </div>
    )
  }
}

export default Pitch
