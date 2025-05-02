import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log("There are no contacts to delete.");
    return;
  }

  const removedContact = contacts.pop();
  await writeContacts(contacts);

  console.log("Remaining contact has been deleted:");
  console.table(removedContact);
};

removeLastContact();

