import React from 'react';

function MessageForm({ handleSubmit, handleChange, details }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="to"
          placeholder="Phone Number"
          onChange={handleChange}
          value={details.to}
          className="form-control"
        />
      </div>
    </form>
  );
}

export default MessageForm;
