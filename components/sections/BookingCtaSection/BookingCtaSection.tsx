import { BOOKING_CTA_MEDIA } from "@/data/media";
import ArrowIcon from "@/components/shared/ArrowIcon";
import MediaCover from "@/components/shared/MediaCover";

const BookingCtaSection = () => (
  <section className="cta" id="book">
    <div className="cta-media">
      <MediaCover {...BOOKING_CTA_MEDIA} sizes="100vw" />
    </div>
    <div className="cta-glow" />
    <div className="grain" />
    <h2 className="reveal">
      Ready to protect
      <br />
      <em>your investment?</em>
    </h2>
    <a href="tel:+12242880242" className="btn on-dark reveal">
      Book Your Appointment
      <ArrowIcon />
    </a>
  </section>
);

export default BookingCtaSection;
