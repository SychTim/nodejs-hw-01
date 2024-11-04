import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) =>
  writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
