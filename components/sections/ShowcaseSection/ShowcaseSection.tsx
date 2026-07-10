import { SHOWCASE_ITEMS } from "@/data/media";
import MediaCover from "@/components/shared/MediaCover";

const ShowcaseSection = () => (
  <section className="showcase" id="showcase">
    <div className="grain" />
    <div className="showcase-head reveal">
      <h2>Three worlds. One line of protection.</h2>
      <p>
        Asphalt, altitude, open water — the same discipline follows the vehicle
        everywhere it goes.
      </p>
    </div>

    <div className="rail reveal">
      {SHOWCASE_ITEMS.map((item) => (
        <div className="rail-item" key={item.num}>
          <div className="frame">
            <MediaCover
              src={item.src}
              alt={item.alt}
              type={item.type}
              sizes="(min-width: 900px) 60vw, 90vw"
            />
          </div>
          <div className="cap">
            <span>{item.label}</span>
            <span>{item.num}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ShowcaseSection;
