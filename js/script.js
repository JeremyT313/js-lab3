"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    // for (let i = 0; i < this.contacts.length; i++) {
    //   console.log(this.contacts[i]);
    // }
    // for (const contact of this.contacts) {
    //   console.log(contact);
    // }
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Bobby", "rj@yahoo.com", "111-1111", "brother");
addressBook.add("Chris", "cp@gmail.com", "222-2222", "mom");
addressBook.add("Makel", "mp@live.com", "333-3333", "sister");
addressBook.print();
addressBook.delete("Bobby");
addressBook.print();
