import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, credentials, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-md-6 offset-md-3">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={credentials.email}
          className="form-control"
        />
      </div>
      <div className="col-md-6 offset-md-3">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={credentials.password}
          className="form-control"
        />
        {error && <small className="has-error">{error}</small>}
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
