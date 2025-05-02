import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = [...new Array(number)].map(() => createFakeContact());
  const updateContacts = [...contacts, ...newContacts];
  await writeContacts(updateContacts);
};

generateContacts(5);
