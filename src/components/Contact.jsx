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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleShowHideContact(contact.id)}
            style={{ height: "40px", width: "40px" }}
          >
            {contact.isHidden ? (
              <i className="bi-eye-fill"></i>
            ) : (
              <i className="bi-eye-slash-fill"></i>
            )}
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => handleDeleteContact(contact.id)}
            style={{ height: "40px", width: "40px" }}
          >
            <i className="bi-trash2-fill"></i>
          </button>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={() => handleChangeContactState(contact.id)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              {contact.isConnected ? (
                <span className="badge text-bg-success">"Connected"</span>
              ) : (
                <span className="badge text-bg-secondary">"Offline"</span>
              )}
            </label>
          </div>
        </div>
      </td>
    </tr>
  );
};
