import React, { useState } from "react";
import { dbContacts } from "../data/contacts";
import { Contact } from "./Contact";

export const ContactsList = () => {
  // const [showContact, setShowContact] = useState(false);
  const [allContacts, setAllContacts] = useState(dbContacts);

  const handleDeleteContact = (contactID, contactIsBanned) => {
    setAllContacts(
      allContacts.map((contact) => {
        contact.id === contactID && {
          ...contact,
          status: !contactIsBanned && true,
        };
      })
    );
  };

  const handleChangeContactState = (contactState) => {
    setAllContacts(
      allContacts.map((contact) => {
        contact.id === contactID && {
          ...contact,
          status: contactStatus === "Connected" ? "Offline" : "Connected",
        };
      })
    );
  };

  const addContact = () => {};

  const handleShowHideContact = (contactID) => {
    setAllContacts(
      allContacts.map((contact) => {
        contact.id === contactID && (contact.isHidden = !contact.isHidden);
        return contact;
      })
    );
  };

  return (
    <div className={""}>
      <h2>Contacts</h2>
      <button type="button" className="btn btn-primary">
        Add
      </button>
      {allContacts.length ? (
        <div className="table-responsive">
          <table className="table table-primary table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((contact, index) => {
                return (
                  <Contact
                    key={index}
                    contact={contact}
                    handleDeleteContact={handleDeleteContact}
                    handleChangeContactState={handleChangeContactState}
                    handleShowHideContact={handleShowHideContact}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={"text-center"}>
          <h3>No contacts :(</h3>
        </div>
      )}
    </div>
  );
};
