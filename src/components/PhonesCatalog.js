import React from 'react';

export default class PhonesCatalog extends React.Component {
  render() {
    return (
      <ul className="phones">
        {this.props.phones.map(phone => (
          <li className="thumbnail" key={phone.id}>
            <a
              href={'#' + phone.id}
              className="thumb"
              onClick={() => {
                this.props.onPhoneSelected(phone.id);
              }}
            >
              <img alt={phone.name} src={phone.imageUrl} />
            </a>

            <div className="phones__btn-buy-wrapper">
              <a
                className="btn btn-success"
                onClick={() => {
                  this.props.onAdd(phone.id)
                }}
              >
                Add
              </a>
            </div>

            <a
              href={'#' + phone.id}
              onClick={() => {
                this.props.onPhoneSelected(phone.id);
              }}
            >
              {phone.name}
            </a>

            <p>{phone.snippet}</p>
          </li>
        ))}
      </ul>
    );
  }
}
