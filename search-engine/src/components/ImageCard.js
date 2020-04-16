const React = require('react');

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans= () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10 + 1);
    this.setState({spans});
  }

  render() {
    const {desscreption, urls} = this.props.image;
    return(
      <div>
        <img ref={this.imageRef} alt={desscreption} src={urls.regular} />
      </div>
    );
  }
}

module.exports = ImageCard