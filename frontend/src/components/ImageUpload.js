import React from 'react'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = { preview: props.picture}
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(info) {
    let url = "https://s3.us-east-2.amazonaws.com/wari-development/user_uploads/"+info.file.name
    this.setState({preview: url})
    this.props.onUpload(url)
  }

  render() {
    const { preview } = this.state
    const s3Url = 'http://wari-dev-east.amazonaws.com'

    return (
      <section>
        {preview || this.props.picture ?
          <img src={preview ? preview : this.props.picture} alt="image preview"/> :
          <DropzoneS3Uploader onFinish={this.handleDrop} s3Url={s3Url} upload={{uploadRequestHeaders:{}}} />
        }
      </section>
    )
  }
}

export default ImageUpload
