import React from 'react';

export default class Filter extends React.Component {
  handleSortChange = (event) => {
    this.props.onSortChange(event.target.value);
  };

  render() {
    return (
      <section>
        <p>
          Search:
          <input
            onChange={(event) => {
              this.props.onQueryChange(event.target.value);
            }}
          />
        </p>

        <p>
          Sort by:
          <select
            value={this.props.sortField}
            onChange={this.handleSortChange}
          >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </section>
    );
  }
}
