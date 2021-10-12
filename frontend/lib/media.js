import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = getStrapiURL(media.url);
  return imageUrl;
}
