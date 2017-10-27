import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class CardsShow extends React.Component {
  state = {
    card: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }))
      .catch(err => {
        if(err.response.status === 404) this.props.history.replace('/404');
        console.log(err);
      });
  }

  deleteCard = () => {
    Axios
      .delete(`/api/cards/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>{this.state.card.fullName}</h2>
          <h2>{this.state.card.jobTitle}</h2>
          <h3>{this.state.card.business}</h3>
          <h4>{this.state.card.businessAdress} {this.state.card.phoneNumber}</h4>
          {Auth.isAuthenticated() && <Link to={`/cards/${this.state.card.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          {Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteCard}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>}
        </div>
      </div>
    );
  }
}

export default CardsShow;
