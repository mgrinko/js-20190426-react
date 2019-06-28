import React from 'react';

export default class PhoneViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPicture: this.props.phone.images[0],
    };
  }

  render() {
    const { phone } = this.props;
    const { currentPicture } = this.state;

    return (
      <div>
        <img className="phone" src={currentPicture} />

        <button onClick={this.props.onBack}>
          Back
        </button>

        <button onClick={this.props.onAdd}>
          Add to basket
        </button>

        <h1>{phone.name}</h1>
        <p>{phone.description}</p>

        <ul className="phone-thumbs">
          {phone.images.map(imageUrl => (
            <li
              onClick={() => this.setState({ currentPicture: imageUrl })}
              key={imageUrl}
            >
              <img src={imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
