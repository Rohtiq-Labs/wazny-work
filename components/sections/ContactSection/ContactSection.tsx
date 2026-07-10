const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="reveal">
      <h2>Visit the studio.</h2>
      <div className="contact-block">
        <span className="eyebrow">Address</span>
        <a
          className="val"
          href="https://maps.google.com/?q=1261+Humbracht+Cir+Ste+K,+Bartlett,+IL+60103"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        src="https://www.google.com/maps?q=1261+Humbracht+Cir+Ste+K,+Bartlett,+IL+60103&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Wazny Works location"
      />
    </div>
  </section>
);

export default ContactSection;
