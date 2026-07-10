import Image from "next/image";
import type { MediaAsset } from "@/data/media";

type MediaCoverProps = MediaAsset & {
  priority?: boolean;
  sizes?: string;
};

const MediaCover = ({
  src,
  alt,
  type,
  priority = false,
  sizes = "100vw",
}: MediaCoverProps) => {
  if (type === "video") {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      style={{ objectFit: "cover" }}
    />
  );
};

export default MediaCover;
