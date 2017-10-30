import Axios from 'axios';
import React from 'react';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';


class CardsIndex extends React.Component {
  state = {
    allCards: [],
    collectedCards: []
  }

  componentWillMount() {
    Axios
      .get('/api/cards', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ allCards: res.data }))
      .catch(err => console.log(err));

    Axios
      .get('/api/profile', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ collectedCards: res.data.collected }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>All Cards (to be hidden later)</h1>
        <div className="row">
          {this.state.allCards.map(card => {
            return(
              <div key={card.id} className="col-md-4 col-sm-6 col-xs-12">
                <Link to={`/cards/${card.id}`}>
                  <h2>{card.fullName}</h2>
                  <h3>{card.jobTitle}</h3>
                </Link>
              </div>
            );
          })}
        </div>

        <h1>Collected Cards</h1>
        <div className="row">
          {this.state.collectedCards.map(card => {
            return(
              <div key={card.id} className="col-md-4 col-sm-6 col-xs-12">
                <Link to={`/cards/${card.id}`}>
                  <h2>{card.fullName}</h2>
                  <h3>{card.jobTitle}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardsIndex;
