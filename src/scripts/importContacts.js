// src/scripts/importContacts.js
import 'dotenv/config';
import mongoose from 'mongoose';
import { Contact } from '../models/Contact.js';
import fs from 'fs';

async function importContacts() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    const contacts = JSON.parse(fs.readFileSync('./src/data/contacts.json', 'utf-8'));

    await Contact.insertMany(contacts);
    console.log('Contacts successfully imported!');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error importing contacts:', error);
    process.exit(1);
  }
}

importContacts();
