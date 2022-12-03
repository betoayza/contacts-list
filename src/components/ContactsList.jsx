import React, { useState } from "react";
import { dbContacts } from "../data/contacts";
import { Contact } from "./Contact";

export const ContactsList = () => {
  // const [showContact, setShowContact] = useState(false);
  const [allContacts, setAllContacts] = useState(dbContacts);

  const handleDeleteContact = (contactID) => {
    setAllContacts(
      allContacts.map((contact) => {
        contact.id === contactID && (contact.isDeleted = true);
        return contact;
      })
    );
  }; //works

  const handleChangeContactState = (contactID) => {
    setAllContacts(
      allContacts.map((contact) => {
        contact.id === contactID &&
          (contact.isConnected = !contact.isConnected);
        return contact;
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
  }; //works

  return (
    <div className={""}>
      <h2 style={{ color: "#ffd700" }}>Contacts</h2>
      <button type="button" className="btn btn-primary mb-3">
        Add
      </button>
      {allContacts.every((contact) => {
        return contact.isDeleted === true;
      }) ? (
        <div className={"text-center"}>
          <h3 style={{ color: "#ff6347" }}>No contacts :(</h3>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-primary table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((contact, index) => {
                return (
                  !contact.isDeleted && (
                    <Contact
                      key={index}
                      contact={contact}
                      handleDeleteContact={handleDeleteContact}
                      handleChangeContactState={handleChangeContactState}
                      handleShowHideContact={handleShowHideContact}
                    />
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
