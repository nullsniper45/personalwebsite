import React from "react";
import "../css/Contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.565896590821!2d-122.39999!3d37.777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2a4f000001%3A0x7d00000000000000!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";
  
  // This link should point to the full Google Maps page for your location
  const viewLargerLink = "https://maps.google.com/maps?ll=37.777,-122.399&z=15&t=m&hl=en-US&gl=US&mapclient=embed";

  return (
    <div>
      <div class="main-header">
        <h1 class="page-title">Contact</h1>
        <span class="experience-badge">Get in Touch</span>
      </div>
      <div className="contact-container">
        <div className="map-wrapper">
          <iframe
            src={mapSrc}
            className="google-map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Contact Location Map"
          ></iframe>

          {/* The "View larger map" overlay seen in your image */}
          {/* <a
            href={viewLargerLink}
            target="_blank"
            rel="noreferrer"
            className="view-larger-btn"
          >
            View larger map
          </a> */}
        </div>

        <div className="contact-content">
          {/* Left Info Column */}
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-phone info-icon"></i>
              </div>
              <div className="info-text">
                <h3>415-832-2000</h3>
                <p>
                  Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                  dui.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i class="bi bi-geo-alt-fill info-icon"></i>
              </div>
              <div className="info-text">
                <h3>San Francisco</h3>
                <p>
                  Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                  dui.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i class="bi bi-envelope-at-fill info-icon"></i>
              </div>
              <div className="info-text">
                <h3>hello@example.com</h3>
                <p>
                  Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                  dui.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-section">
            <h2 className="form-title">How Can I Help You?</h2>

            <form className="contact-form">
              <div className="inputs-column">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="input-field"
                />
              </div>

              <div className="message-column">
                <textarea
                  placeholder="Message"
                  className="textarea-field"
                ></textarea>
              </div>

              <div className="form-actions">
                {/* <div className="captcha-box">
                  <input type="checkbox" id="captcha" />
                  <label htmlFor="captcha">I'm not a robot</label>
                </div> */}
                <button type="submit" className="submit-btn">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
