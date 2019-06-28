import React from 'react';
import { Link } from "react-router-dom";
import { getAll } from '../api/phone';

export default class PhonesCatalog extends React.Component {
  state = {
    phones: [],
    query: '',
    sortField: 'age',
  };

  componentDidMount() {
    this.loadPhones();
  }

  loadPhones() {
    getAll({
      query: this.state.query,
      sortField: this.state.sortField,
    })
      .then(phones => {
        this.setState({ phones });
      });
  }

  render() {
    return (
      <ul className="phones">
        {this.state.phones.map(phone => (
          <li className="thumbnail" key={phone.id}>
            <Link to={'/phones/' + phone.id} className="thumb">
              <img alt={phone.name} src={phone.imageUrl} />
            </Link>

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

            <Link to={'/phones/' + phone.id}>
              {phone.name}
            </Link>

            <p>{phone.snippet}</p>
          </li>
        ))}
      </ul>
    );
  }
}
