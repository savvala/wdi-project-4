import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import CardsForm from './CardsForm';

class CardsEdit extends React.Component {
  state = {
    card: {
      fullName: '',
      jobTitle: '',
      business: '',
      businessAddress: '',
      phoneNumber: ''
    },
    errors: {}
  };

  componentDidMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const card = Object.assign({}, this.state.card, { [name]: value });
    this.setState({ card });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/cards/${this.props.match.params.id}`, this.state.card, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.props.history.push(`/cards/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  const Customize = () => {
  const Font1 = {

  };

  render() {
    return (
      <CardsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        card={this.state.card}
        errors={this.state.errors}
      />
    );
  }
}

export default CardsEdit;
