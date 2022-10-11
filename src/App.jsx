import React, { Component } from 'react';
import UIShell from './content/UIShell/UIShell';
import './App.scss';
import { StockItemService } from "./services/stock-item.service";
import { FormService } from "./services/form.service";
class App extends Component {
  constructor(props) {
    super(props);

    this.stockService = props.stockService || new StockItemService();
    this.formService = props.formService || new FormService();
  }

  render() {
    return (
      <div className="app">
        <UIShell stockService={this.stockService} formService={this.formService} />
      </div>
    );
  }
}

export default App;
