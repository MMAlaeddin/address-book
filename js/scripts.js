// business logic for AddressBook

function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact){
    this.contacts.push(contact);
}

// business logic for Contacts

function Contact(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
}

var test = new Contact ("Jose", "Amesquita", "503.555.5555");

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

//test.fullName();

var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace","503-555-0100");
var contact2 = new Contact("Grace", "Hooper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);

//addressBook.contacts[0].fullName;