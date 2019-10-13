import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../src/Component/Sidebar';
import Navbar from '../src/Component/Navbar';
import Form from '../src/Component/Form';
import Table from '../src/Component/Table';

class App extends Component {
  render() {
    return (
        <section id="admin">
            <Sidebar />
            <div class="content">
              <Navbar />
              <Route exact path="/" component={Table} />
              <Route path="/form" component={Form} />
            </div>
        </section>
    );
  }
}

export default App;
