import { SERVICE_AREA_MEDIA } from "@/data/media";
import MediaCover from "@/components/shared/MediaCover";

const SERVICE_AREAS = [
  "Luxury Vehicles",
  "Daily Drivers",
  "Exotic Cars",
  "Aircraft",
  "Marine Vessels",
];

const ServiceAreaSection = () => (
  <section className="area">
    <div className="grain" />
    <div className="area-media">
      <MediaCover
        {...SERVICE_AREA_MEDIA}
        sizes="100vw"
      />
    </div>
    <div className="area-map-texture">
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0H0V60"
              fill="none"
              stroke="#f5f4ef"
              strokeWidth="0.4"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    <div className="area-content reveal">
      <div className="eyebrow" style={{ color: "#f5f4ef", marginBottom: 26 }}>
        Mobile &amp; In-Studio
      </div>
      <p className="lead">
        We travel where the vehicle lives —{" "}
        <em>garage, hangar, or dock</em> — and bring the same studio standard
        with us, every time.
      </p>
      <div className="list">
        {SERVICE_AREAS.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreaSection;
