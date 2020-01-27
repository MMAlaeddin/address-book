// business logic for AddressBook

function AddressBook() {
    this.contacts = [];
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
    contact.id = this.assignId();
    this.contacts.push(contact);
}

AddressBook.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
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

AddressBook.prototype.findContact = function(id) {
    for (var i = 0; i < this.contacts.length; i++){
        if (this.contacts[i].id == id) {
            return this.contacts[i];
        }
    };
    return false;
}
AddressBook.prototype.deleteContact = function(id) {
    for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id == id) {
            delete this.contacts[i];
            return true;
        }
    }
}

//test.fullName();

var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace","503-555-0100");
var contact2 = new Contact("Grace", "Hooper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);



//addressBook.contacts[0].fullName;