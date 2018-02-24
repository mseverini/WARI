import React from 'react'
import Dropzone from 'react-dropzone'
import StarPicker from "./star-picker"
import { Button, Collapse, Well } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import RatingForm from "./RatingForm"

class Anchor extends React.Component {
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
             Anchors
          </Button>
        )} >
          <RatingForm/>
        </Collapsible>
      </div>
    )
  }
}

export default Anchor
