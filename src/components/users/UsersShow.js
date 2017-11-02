import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class CardsShow extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get('/api/profile', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
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

  render() {
    if(!this.state.user.cards) return false;
    console.log(this.state.user.cards[0]);

    const styles = {
      fontFamily: this.state.user.cards[0].fontStyle,
      color: this.state.user.cards[0].fontColour,
      backgroundColor: this.state.user.cards[0].cardColour
    };

    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="cardForm" style={styles}>
            <div id="fullName">{this.state.user.cards[0].fullName}</div>
            <div id="jobTitle">{this.state.user.cards[0].jobTitle}</div>
            <div id="business">{this.state.user.cards[0].business}</div>
            <div id="businessAddress">{this.state.user.cards[0].businessAddress}</div>
            <div id="email">{this.state.user.cards[0].email}</div>
            <div id="phoneNumber">{this.state.user.cards[0].phoneNumber}</div>
            <a href={`https://twitter.com/${this.state.user.cards[0].twitter}`} style={{color: this.state.user.cards[0].twitterColour}} target="_blank"><i className="fa fa-twitter" id="twitter" aria-hidden="true"></i></a>
            <a href={`https://www.linkedin.com/in/${this.state.user.cards[0].linkedIn}`} style={{color: this.state.user.cards[0].linkedInColour}}><i className="fa fa-linkedin" aria-hidden="true" target="_blank"></i></a>
          </div>
        </div>
        <div className="col-lg-6">
          <Link className="edit button" to={`/cards/${this.state.user.cards[0].id}/edit`}>
            <i className="fa fa-pencil" aria-hidden="true"></i> Edit Your Card
          </Link>
          <button className="main-button" onClick={this.deleteCard}>
            <i className="fa fa-trash" aria-hidden="true"></i> Delete Your Card
          </button>
          <Link className="button" to={`/cards/${this.state.user.cards[0].id}`}>
            Show
          </Link>
        </div>
      </div>
    );
  }
}

export default CardsShow;
