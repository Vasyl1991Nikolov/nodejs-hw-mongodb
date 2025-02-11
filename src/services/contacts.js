import { Contact } from '../models/Contact.js';

// Отримати всі контакти
export const getAllContacts = async () => {
  return await Contact.find();
};

// Отримати контакт за ID
export const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
};
