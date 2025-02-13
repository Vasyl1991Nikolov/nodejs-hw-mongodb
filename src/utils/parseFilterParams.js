import { CONTACT_TYPES } from '../constants/index.js';

const parseContactType = (contactType) => {
  if (
    typeof contactType === 'string' &&
    Object.values(CONTACT_TYPES).includes(contactType)
  ) {
    return contactType;
  }
  return undefined;
};

const parseIsFavourite = (string) => {
  if (string === 'true') return true;
  if (string === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const filter = {};

  if (query.contactType) {
    const parsedContactType = parseContactType(query.contactType);
    if (parsedContactType) {
      filter.contactType = parsedContactType;
    }
  }

  if (query.isFavourite !== undefined) {
    const parsedIsFavourite = parseIsFavourite(query.isFavourite);
    if (parsedIsFavourite !== undefined) {
      filter.isFavourite = parsedIsFavourite;
    }
  }

  return filter;
};