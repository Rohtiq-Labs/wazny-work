export type MediaType = "image" | "video";

export type MediaAsset = {
  src: string;
  alt: string;
  type: MediaType;
};

export const HERO_MEDIA: MediaAsset = {
  src: "/assets/vid-03.mp4",
  alt: "Koenigsegg Regera paint protection and ceramic coating",
  type: "video",
};

export const SERVICES_FEATURE_MEDIA: MediaAsset = {
  src: "/assets/img-06.jpg",
  alt: "Tesla Cybertruck ceramic coating at Wazny Works studio",
  type: "image",
};

export const SERVICE_AREA_MEDIA: MediaAsset = {
  src: "/assets/img-02.jpg",
  alt: "Wazny Works studio in Bartlett, Illinois",
  type: "image",
};

export const BOOKING_CTA_MEDIA: MediaAsset = {
  src: "/assets/img-05.jpg",
  alt: "Lamborghini Aventador after ceramic coating",
  type: "image",
};

export const SHOWCASE_ITEMS: Array<MediaAsset & { label: string; num: string }> = [
  {
    label: "Automotive",
    num: "01",
    src: "/assets/vid-02.mp4",
    alt: "McLaren 720s mobile detailing at night",
    type: "video",
  },
  {
    label: "Aircraft",
    num: "02",
    src: "/assets/img-08.jpg",
    alt: "Ferrari F8 Tributo paint protection finish",
    type: "image",
  },
  {
    label: "Marine",
    num: "03",
    src: "/assets/img-03.jpg",
    alt: "GMC Hummer EV full vehicle protection",
    type: "image",
  },
  {
    label: "Finish Detail",
    num: "04",
    src: "/assets/vid-01.mp4",
    alt: "Porsche Spyder RS showroom detail at Wazny Works",
    type: "video",
  },
  {
    label: "Exotic Cars",
    num: "05",
    src: "/assets/img-01.jpg",
    alt: "Lamborghini Huracán ceramic coating",
    type: "image",
  },
  {
    label: "Luxury SUVs",
    num: "06",
    src: "/assets/img-04.jpg",
    alt: "BMW X7 window tint and paint protection",
    type: "image",
  },
  {
    label: "Performance",
    num: "07",
    src: "/assets/img-07.jpg",
    alt: "Audi R8 paint correction and protection",
    type: "image",
  },
  {
    label: "Exotic Cars",
    num: "08",
    src: "/assets/img-09.jpg",
    alt: "Lamborghini Murciélago paint protection",
    type: "image",
  },
  {
    label: "Luxury SUVs",
    num: "09",
    src: "/assets/img-10.jpg",
    alt: "Cadillac Escalade IQ ceramic coating",
    type: "image",
  },
  {
    label: "Interior Detail",
    num: "10",
    src: "/assets/img-11.jpg",
    alt: "Lamborghini leather and alcantara detailing",
    type: "image",
  },
  {
    label: "Exotic Cars",
    num: "11",
    src: "/assets/img-12.jpg",
    alt: "Lamborghini Murciélago finish detail",
    type: "image",
  },
];
