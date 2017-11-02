import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

import './scss/style.scss';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container-fluid">
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
