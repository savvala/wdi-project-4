import React from 'react';
import MessageForm from './MessageForm';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class Message extends React.Component {

  state = {
    details: {
      to: ''
    },
    error: null
  };

  handleChange = ({ target: { name, value } }) => {
    const details = Object.assign({}, this.state.details, { [name]: value });
    this.setState({ details });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/api/message', this.state.details, {
      headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
    })
      .then((res) => console.log(res.data))
      .catch(() => this.setState({ error: 'Invalid details' }));
  }

  render() {
    return (
      <MessageForm
        details={this.state.details}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default Message;
