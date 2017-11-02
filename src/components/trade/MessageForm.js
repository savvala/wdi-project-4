import React from 'react';

function MessageForm({ handleSubmit, handleChange, details }) {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <div className="non-card">
          <div className="form-group">
            <input
              type="text"
              name="to"
              placeholder="Phone Number"
              onChange={handleChange}
              value={details.to}
              className="form-control"
            />
            <button>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
