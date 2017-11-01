import React from 'react';


function CardsForm({ handleSubmit, handleChange, card, errors }) {
  const styles = {
    fontFamily: card.fontStyle,
    color: card.fontColour,
    backgroundColor: card.cardColour
  };
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form style={styles} onSubmit={handleSubmit} className="col-md-6">
        <div className={errors.fullName ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="fullName"></label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={card.fullName}
            onChange={handleChange}
            placeholder="Full Name"
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
          <label htmlFor="jobTitle"></label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            name="jobTitle"
            value={card.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
          />
          {errors.category && <small className="has-error">{errors.jobTitle}</small>}
        </div>
        <div className={errors.business ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="business"></label>
          <input
            type="text"
            className="form-control"
            id="business"
            name="business"
            value={card.business}
            onChange={handleChange}
            placeholder="Business"
          />
          {errors.category && <small className="has-error">{errors.business}</small>}
        </div>
        <div className={errors.businessAddress ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="businessAddress"></label>
          <input
            type="text"
            className="form-control"
            id="businessAddress"
            name="businessAddress"
            value={card.businessAddress}
            onChange={handleChange}
            placeholder="Business Address"
          />
          {errors.category && <small className="has-error">{errors.businessAddress}</small>}
        </div>
        <div className={errors.phoneNumber ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="phoneNumber"></label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={card.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"

          />
          {errors.category && <small className="has-error">{errors.phoneNumber}</small>}
        </div>
        <div className={errors.fontStyle ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="fontStyle">Choose your Font Style</label>
          <select
            className="form-control"
            id="fontStyle"
            name="fontStyle"
            value={card.fontStyle}
            onChange={handleChange}
          >
            <option>Libre Baskerville</option>
            <option>Quicksand</option>
            <option>Crimson Text</option>
          </select>
          {errors.category && <small className="has-error">{errors.phoneNumber}</small>}
        </div>
        <div className={errors.fontColour ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="fontColour">Choose your Font Colour</label>
          <input
            type="color"
            className="form-control"
            id="fontColour"
            name="fontColour"
            value={card.fontColour || '#000'}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.cardColour}</small>}
        </div>
        <div className={errors.cardColour ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="cardColour">Choose your Card Colour</label>
          <input
            type="color"
            className="form-control"
            id="cardColour"
            name="cardColour"
            default={card.cardColour || '#000'}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.cardColour}</small>}
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CardsForm;
