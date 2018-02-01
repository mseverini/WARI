import React from 'react'
import Dropzone from 'react-dropzone'
import StarPicker from "./star-picker"
import { Button, Collapse, Well } from 'react-bootstrap';

class Bolt extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button className="c-button" onClick={() => this.setState({open: !this.state.open})}>
          Bolt {this.props.bolt.position}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <StarPicker title={"How did it look to you?"}/>
              <br/> <br/>
              <Dropzone > Add a picture! </Dropzone>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Bolt
