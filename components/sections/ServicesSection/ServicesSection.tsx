import { SERVICES_FEATURE_MEDIA } from "@/data/media";
import MediaCover from "@/components/shared/MediaCover";

const SERVICES = [
  { idx: "02", name: "Window Tinting", tag: "Precision Cut" },
  { idx: "03", name: "Detailing Packages", tag: "Concours Level" },
  { idx: "04", name: "Automotive Films", tag: "Paint Protection" },
  { idx: "05", name: "Automotive Protection", tag: "Full Coverage" },
  { idx: "06", name: "Aircraft Protection", tag: "Airframe Coatings" },
  { idx: "07", name: "Boat Protection", tag: "Marine Grade" },
];

const ServicesSection = () => (
  <section className="services" id="services">
    <div className="services-head reveal">
      <h2>Every surface treated&nbsp;as if it were the only one.</h2>
      <p>
        Seven disciplines, one standard. From daily drivers to aircraft skin,
        the approach never changes.
      </p>
    </div>

    <div className="services-grid">
      <div className="service-feature reveal">
        <div className="num">01</div>
        <div className="service-feature-inner">
          <div className="panel">
            <MediaCover
              {...SERVICES_FEATURE_MEDIA}
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </div>
          <h3>Ceramic Coating</h3>
          <p>
            A permanent, glass-hard layer that holds a mirror finish through
            years of exposure — engineered chemistry, hand-applied.
          </p>
        </div>
      </div>

      <div className="service-list reveal">
        {SERVICES.map((service) => (
          <div className="service-row" key={service.idx}>
            <span className="idx">{service.idx}</span>
            <span className="name">{service.name}</span>
            <span className="tag">{service.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
