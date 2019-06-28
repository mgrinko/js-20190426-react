import React from 'react';
import { getById } from '../api/phone'
import { Link } from "react-router-dom";


export default class PhoneViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: null,
      currentPicture: null,
    };
  }

  componentDidMount() {
    console.log(this.props);

    getById(this.props.match.params.phoneId)
      .then(phoneDetails => {
        this.setState({
          phone: phoneDetails,
          currentPicture: phoneDetails.images[0],
        });
      });
  }

  render() {
    const { currentPicture, phone } = this.state;

    if (!phone) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img className="phone" src={'/' + currentPicture} />

        <Link to="/phones">
          Back
        </Link>

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
              <img src={'/' + imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
