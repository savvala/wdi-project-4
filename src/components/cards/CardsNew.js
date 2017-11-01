import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import CardsForm from './CardsForm';

class CardsNew extends React.Component {
  state = {
    card: {
      fullName: '',
      jobTitle: '',
      business: '',
      businessAddress: '',
      phoneNumber: '',
      fontStyle: '',
      fontColour: '',
      cardColour: ''
    },
    errors: {}
  };

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  handleChange = ({ target: { name, value } }) => {
    const card = Object.assign({}, this.state.card, { [name]: value });
    this.setState({ card });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/cards', this.state.card, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/cards'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

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

export default CardsNew;
