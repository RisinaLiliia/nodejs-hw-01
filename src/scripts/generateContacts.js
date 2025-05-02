import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (amount = 5) => {
  const oldContacts = await readContacts();
  const newContacts = Array.from({ length: amount }, createFakeContact);
  const allContacts = [...oldContacts, ...newContacts];
  await writeContacts(allContacts);
};

generateContacts(5);
