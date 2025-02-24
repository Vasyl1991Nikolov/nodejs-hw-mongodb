import { CONTACT_TYPES } from '../constants/index.js';

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;

  const isContactType = (contactType) => CONTACT_TYPES.includes(contactType);

  if (isContactType(contactType)) {
    return contactType;
  }
};

const parseIsFavourite = (isFavourite) => {
  const isBoolean = isFavourite === 'true' || isFavourite === 'false';
  if (!isBoolean) return;
  return isFavourite === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
