import React from 'react';


function CardsForm({ handleSubmit, handleChange, card, errors }) {
  const styles = {
    fontFamily: card.fontStyle,
    color: card.fontColour,
    backgroundColor: card.cardColour
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-lg-6">
          <div style={styles} className="cardForm">
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
                style={styles}
              />
              {errors.fullName && <small className="has-error">{errors.fullName}</small>}
            </div>
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
                style={styles}

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
                style={styles}

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
                style={styles}

              />
              {errors.category && <small className="has-error">{errors.email}</small>}
            </div>
            <div className={errors.email ? 'form-group has-error' : 'form-group'}>
              <label htmlFor="email"></label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={card.email}
                onChange={handleChange}
                placeholder="email"
                style={styles}

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
                style={styles}


              />
              {errors.category && <small className="has-error">{errors.phoneNumber}</small>}
            </div>
            <i className="fa fa-twitter" id="twitter" aria-hidden="true" style={{color: card.twitterColour}}></i>
            <i className="fa fa-linkedin" aria-hidden="true" style={{color: card.linkedInColour}}></i>
          </div>
        </div>
        <div className="col-lg-6 non-card">
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
              <option>Lobster</option>
              <option>Hind</option>
              <option>Contrail One</option>
              <option>Anton</option>
              <option>Playfair Display SC</option>
              <option>Luckiest Guy</option>
              <option>Share</option>
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
              value={card.cardColour || '#000'}
              onChange={handleChange}
            />
            {errors.category && <small className="has-error">{errors.twitter}</small>}
            <div className={errors.twitter ? 'form-group has-error' : 'form-group'}>
              <label htmlFor="twitter">Twitter Username</label>
              <input
                type="text"
                className="form-control"
                id="twitter"
                name="twitter"
                value={card.twitter}
                onChange={handleChange}
              />
            </div>
            <div className={errors.linkedIn ? 'form-group has-error' : 'form-group'}>
              <label htmlFor="linkedIn">LinkedIn Username</label>
              <input
                type="text"
                className="form-control"
                id="linkedIn"
                name="linkedIn"
                value={card.linkedIn}
                onChange={handleChange}
              />
            </div>
            <div className={errors.twitterColour ? 'form-group has-error' : 'form-group'}>
              <label htmlFor="twitterColour">Choose your Twitter Colour</label>
              <input
                type="color"
                className="form-control"
                id="twitterColour"
                name="twitterColour"
                value={card.twitterColour || '#000'}
                onChange={handleChange}
              />
            </div>
            <div className={errors.linkedInColour ? 'form-group has-error' : 'form-group'}>
              <label htmlFor="linkedInColour">Choose your LinkedIn Colour</label>
              <input
                type="color"
                className="form-control"
                id="linkedInColour"
                name="linkedInColour"
                value={card.linkedInColour || '#000'}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button className="save-button">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CardsForm;
