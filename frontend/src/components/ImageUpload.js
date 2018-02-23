import React from 'react'
import Dropzone from 'react-dropzone'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = { preview: props.picture}
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop([{ preview }]) {
    this.setState({ preview })
    this.props.onUpload(preview)
  }

  render() {
    const { preview } = this.state
    return (
      <section>
        {preview ?
          <img src={preview} alt="image preview"/> :
          <Dropzone onDrop={this.handleDrop.bind(this)} accept="image/jpeg,image/jpg,image/tiff,image/gif" multiple={false}>
            Drag a file here or click to upload.
          </Dropzone>
        }
      </section>
    )
  }
}

export default ImageUpload
