import React from 'react';


function CardsForm({ handleSubmit, handleChange, card, errors }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className={errors.fullName ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={card.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <small className="has-error">{errors.fullName}</small>}
        </div>
        {/* <div className={errors.image ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={card.image}
            onChange={handleChange}
          />
          {errors.image && <small className="has-error">{errors.image}</small>}
        </div> */}
        <div className={errors.jobTitle ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            name="jobTitle"
            value={card.jobTitle}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.jobTitle}</small>}
        </div>
        <div className={errors.business ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="business">Business</label>
          <input
            type="text"
            className="form-control"
            id="business"
            name="business"
            value={card.business}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.business}</small>}
        </div>
        <div className={errors.businessAddress ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="businessAddress">Business Address</label>
          <input
            type="text"
            className="form-control"
            id="businessAddress"
            name="businessAddress"
            value={card.businessAddress}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.businessAddress}</small>}
        </div>
        <div className={errors.phoneNumber ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={card.phoneNumber}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.phoneNumber}</small>}
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CardsForm;
