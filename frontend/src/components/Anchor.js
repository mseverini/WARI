import React from 'react'
import Dropzone from 'react-dropzone'
import StarPicker from "./star-picker"
import { Button, Collapse, Well } from 'react-bootstrap';
import Collapsible from 'react-collapsible';

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
             Anchors on pitch {this.props.anchor.pitch + 1}
          </Button>
        )} >
          <div>
            <Well>
              <StarPicker title={"How did it look to you?"}/>
              <br/> <br/>
              <Dropzone > Add a picture! </Dropzone>
            </Well>
          </div>
        </Collapsible>
      </div>
    )
  }
}

export default Anchor
