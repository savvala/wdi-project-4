import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class CardsShow extends React.Component {
  state = {
    card: {},
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }))
      .catch(err => {
        if(err.response.status === 404) this.props.history.replace('/404');
        console.log(err);
      });

    Axios
      .get('/api/profile', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  deleteCard = () => {
    Axios
      .delete(`/api/cards/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/cards'))
      .catch(err => console.log(err));
  }

  tradeCard = () => {
    Axios
      .get(`/api/cards/${this.props.match.params.id}/trade`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      // here we update this.state.user to be the response from our API (has the newly collected card inside the collected array)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  removeCard = () => {
    Axios
      .delete(`/api/cards/${this.props.match.params.id}/trade`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  inCollection = () => {
    // return true if the currently logged in user's array of collected cards have that card id in it
    return this.state.user.collected && this.state.user.collected.find(card => card.id === this.state.card.id);
  }

  render() {
    const { card } = this.state;

    const styles = {
      fontFamily: card.fontStyle,
      color: card.fontColour,
      backgroundColor: card.cardColour
    };

    return (
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={styles}>
            <h2>{card.fullName}</h2>
            <h2>{card.jobTitle}</h2>
            <h3>{card.business}</h3>
            <h4>{card.businessAdress} {card.phoneNumber}</h4>
          </div>
          {' '}
          {Auth.isAuthenticated() && Auth.ownedByUser(card) && <Link to={`/cards/${card.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit Your Card
          </Link>}
          {Auth.isAuthenticated() && Auth.ownedByUser(card) && <button className="main-button" onClick={this.deleteCard}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete Your Card
          </button>}
          {Auth.isAuthenticated() && !Auth.ownedByUser(card) && !this.inCollection() && <button className="main-button" onClick={this.tradeCard}>
            <i className="fa fa-trash" aria-hidden="true"></i>Trade Cards
          </button>}
          {Auth.isAuthenticated() && !Auth.ownedByUser(card) && this.inCollection() && <button className="main-button" onClick={this.removeCard}>
            <i className="fa fa-trash" aria-hidden="true"></i>Remove Card
          </button>}
        </div>
      </div>
    );
  }
}

export default CardsShow;
