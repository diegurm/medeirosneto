import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image, ...props }) => {
  const { url, alternativeText } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <NextImage
      {...props}
      loader={loader}
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
