import React from 'react'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = { picture: props.picture}
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(info) {
    let url = "https://s3.us-east-2.amazonaws.com/wari-development/user_uploads/"+info.file.name.replace(/\s/g,'')
    this.state.picture = url
    this.props.onUpload(url)
  }

  render() {
    const s3Url = 'http://wari-dev-east.amazonaws.com'

    return (
      <section>
        {this.state.picture || this.props.picture ?
          <img src={this.state.picture ? this.state.picture : this.props.picture} alt="image preview"/> :
          <DropzoneS3Uploader onFinish={this.handleDrop} s3Url={s3Url} upload={{uploadRequestHeaders:{}}} />
        }
      </section>
    )
  }
}

export default ImageUpload
