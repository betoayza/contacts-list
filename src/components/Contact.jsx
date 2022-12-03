import React from "react";

export const Contact = ({
  contact,
  handleDeleteContact,
  handleChangeContactState,
  handleShowHideContact,
}) => {
  return (
    <tr>
      <td>{contact.isHidden ? "-" : contact.name}</td>
      <td>{contact.isHidden ? "-" : contact.lastname}</td>
      <td>{contact.isHidden ? "-" : contact.email}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleShowHideContact(contact.id)}
          >
            {contact.isHidden ? "Show" : "Hide"}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleDeleteContact(contact.id, contact.status)}
          >
            Delete
          </button>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={() => handleChangeContactState(contact.state)}
              checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              {contact.state}
            </label>
          </div>
        </div>
      </td>
      <td>
        {contact.isBanned ? (
          <span className="badge bg-danger">Banned</span>
        ) : (
          <span className="badge bg-success">Active</span>
        )}{" "}
      </td>
    </tr>
  );
};
