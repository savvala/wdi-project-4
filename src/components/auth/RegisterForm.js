import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={errors.email ? 'form-group has-error' : 'form-group'}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
        {errors.email && <small className="has-error">{errors.email}</small>}
      </div>
      <div className={errors.password ? 'form-group has-error' : 'form-group'}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
        {errors.password && <small className="has-error">{errors.password}</small>}
      </div>
      <div className={errors.passwordConfirmation ? 'form-group has-error' : 'form-group'}>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
        {errors.passwordConfirmation && <small className="has-error">{errors.passwordConfirmation}</small>}
      </div>

      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default RegisterForm;
