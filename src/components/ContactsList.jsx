import React, { useState } from "react";
import { dbContacts } from "../data/contacts";
import { Contact } from "./Contact";
import { ContactAdd } from "./ContactAdd";
import { Modal } from "./Modal";

export const ContactsList = () => {
  const [allContacts, setAllContacts] = useState(dbContacts);
  const [modal, setModal] = useState(false);

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

  const handleAddContact = () => {
    setModal(true);
  };

  const handleShowHideContact = (contactID) => {
    setAllContacts(
      allContacts.map((contact) => {
        contact.id === contactID && (contact.isHidden = !contact.isHidden);
        return contact;
      })
    );
  }; //works

  return modal ? (
    <Modal>
      <div>
        <ContactAdd
          allContacts={allContacts}
          setAllContacts={setAllContacts}
          setModal={setModal}
        />
      </div>
    </Modal>
  ) : (
    <div className={""} style={{ maxWidth: "100vw" }}>
      <button
        type="button"
        className="btn btn-success mb-3"
        onClick={handleAddContact}
      >
        <i className="bi-plus-lg"></i>
      </button>
      {allContacts.every((contact) => {
        return contact.isDeleted === true;
      }) ? (
        <div className={"text-center"}>
          <h3 style={{ color: "#ff6347" }}>No contacts :(</h3>
        </div>
      ) : (
        <div className="table-responsive rounded">
          <table
            className="table table-hover"
            style={{ backgroundColor: "#e0ffff" }}
          >
            <thead style={{ backgroundColor: "#00ced1" }}>
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
