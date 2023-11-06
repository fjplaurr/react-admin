import { Identifier } from "react-admin";

export const getPhotosUrlByAlbumId = (albumId: Identifier) =>
  `/photos?displayedFilters=%7B%7D&filter=%7B%22userId%22%3A%222%22%2C%22albumId%22%3A%22${albumId}%22%7D`;
