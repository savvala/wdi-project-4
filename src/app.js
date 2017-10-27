import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

import './scss/style.scss';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <h1>TR-AID</h1>
          <Navbar/>
          <main>
            <Routes/>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
