const React = require('react');
require('../style/ShowImages.css');
const ImageCard = require('./ImageCard');

class ShowImages extends React.Component {
  renderImages(){
    return this.props.imageList.map((image) => {
      return <ImageCard key={image.id} image={image} />
    }); 
  }

  render() {
    return (
    <div className="show-images">{this.renderImages()}</div>
    );
  }
}

module.exports = ShowImages;