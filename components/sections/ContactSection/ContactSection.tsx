const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.0730474372763!2d-88.21904239999999!3d41.9772414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa19d18549d2c0cb5%3A0x45b27df1d14c017d!2sWazny%20Works%20Automotive%20Films%20and%20Coatings!5e0!3m2!1sen!2s!4v1783726302230!5m2!1sen!2s";

const MAP_LINK_URL =
  "https://www.google.com/maps/place/Wazny+Works+Automotive+Films+and+Coatings/@41.9772414,-88.2164675,17z";

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="reveal">
      <h2>Visit the studio.</h2>
      <div className="contact-block">
        <span className="eyebrow">Address</span>
        <a
          className="val"
          href={MAP_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wazny Works Automotive Films and Coatings
          <br />
          1261 Humbracht Cir Ste K
          <br />
          Bartlett, IL 60103
          <br />
          United States
        </a>
      </div>
      <div className="contact-block">
        <span className="eyebrow">Phone</span>
        <a className="val" href="tel:+12242880242">
          +1 224-288-0242
        </a>
      </div>
      <div className="contact-block">
        <span className="eyebrow">Hours</span>
        <div className="val">
          Friday — Thursday
          <br />
          8:00 AM – 5:00 PM
        </div>
      </div>
    </div>
    <div className="map-wrap reveal">
      <iframe
        src={MAP_EMBED_URL}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title="Wazny Works Automotive Films and Coatings"
      />
    </div>
  </section>
);

export default ContactSection;
