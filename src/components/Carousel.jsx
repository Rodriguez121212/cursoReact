import { Component } from 'react';

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    console.log('images', images);

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // slint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? 'active' : ''}
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
