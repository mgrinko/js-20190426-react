import React from 'react';

export default class Basket extends React.Component {
  render() {
    const { items, onDelete } = this.props;

    console.log(items);

    return (
      <section className="basket">
        <h4>Shopping Cart</h4>

        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}

                <button onClick={() => onDelete(index)}>
                  x
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items yet</p>
        )}
      </section>
    );
  }
}
