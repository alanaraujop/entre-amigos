import React, { useEffect } from 'react';
import './Contact.scss';
import { MapLocation, ContactForm } from '../../components';
import { locationURL, time, phoneNumbers } from '../../info';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div id="Contact">
      <div className="container contact-container">

        <ContactForm />

        <div className="info-container">
          <MapLocation location={locationURL} />

          <div className="opens container">
            <div className="date-time">
              <span>{time}</span>
              <span>{phoneNumbers[0]}</span>
              <span>{phoneNumbers[1]}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
