import React from 'react';
import { Button } from 'semantic-ui-react'
import { Route, Switch } from "react-router-dom";


import './App.css';

import Basket from './components/Basket';
import Filter from './components/Filter';

import PhonesCatalog from './components/PhonesCatalog';
import PhoneViewer from './components/PhoneViewer';
import { getAll, getById } from './api/phone.js';

class PhonesPage extends React.Component {
  constructor(props) {
    super(props);

    const initialItem = localStorage.getItem('basketItems')
      ? localStorage.getItem('basketItems').split(',')
      : [];

    this.state = {
      basketItems: initialItem,
      query: 'Moto',
      sortField: 'name',
    };

    this.addBasketItem = (phoneId) => {
      this.setState({
        basketItems: [
          ...this.state.basketItems,
          phoneId
        ],
      });

      localStorage.setItem('basketItems', this.state.basketItems.join(','))
    };
    this.deleteBasketItem = (index) => {
      const items = this.state.basketItems;

      this.setState({
        basketItems: [
          ...items.slice(0, index),
          ...items.slice(index + 1)
        ],
      });

      localStorage.setItem('basketItems', this.state.basketItems.join(','))
    };

    this.showPhone = (phoneId) => {

    };
    this.hidePhone = () => {
      this.setState({
        selectedPhone: null,
      });
    };

    this.setQuery = (query) => {
      this.setState({ query });
      this.loadPhones();
    };

    this.setSortField = (sortField) => {
      this.setState({ sortField });
      this.loadPhones();
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <div>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
          </div>

          <Filter
            query={this.state.query}
            sortField={this.state.sortField}
            onQueryChange={this.setQuery}
            onSortChange={this.setSortField}
          />

          <Basket
            items={this.state.basketItems}
            onDelete={this.deleteBasketItem}
          />
        </div>

        <div className="col-md-10">
          <Switch>
            <Route path="/phones/:phoneId" component={PhoneViewer} />
            <Route path="/phones" component={PhonesCatalog} />
          </Switch>

          <router-outlet></router-outlet>
          <router-view></router-view>
        </div>
      </div>
    );
  }
}

export default PhonesPage;
