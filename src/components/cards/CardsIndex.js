import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class CardsIndex extends React.Component {
  state = {
    cards: []
  }

  componentWillMount() {
    Axios
      .get('/api/cards')
      .then(res => this.setState({ cards: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.cards.map(card => {
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
