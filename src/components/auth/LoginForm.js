import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, credentials, error }) => {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <div className="non-card">
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={credentials.email}
              className="form-control"
            />
          </div>
          <div>
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
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
