import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  console.log("getStrapiMedia===========>", media);
  const imageUrl = getStrapiURL(media.url);
  return imageUrl;
}
