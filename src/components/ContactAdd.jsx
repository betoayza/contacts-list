import React, { useState } from "react";

const initialForm = {
  id: Date.now(),
  name: "",
  lastname: "",
  email: "",
  isConnected: true,
  isHidden: false,
  isDeleted: false,
};

export const ContactAdd = ({ allContacts, setAllContacts, setModal }) => {
  const [form, setForm] = useState(initialForm);
  const [isSuccessful, setisSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllContacts([...allContacts, form]);
    setisSuccessful(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setModal(false);
  };

  return isSuccessful ? (
    <div>
      <h2 style={{ color: "#f5fffa" }}>Successful ;)</h2>
      <button type="button" className="btn btn-danger" onClick={handleClose}>
        Close
      </button>
    </div>
  ) : (
    <div>
      <h2>Add Contact</h2>

      <form>
        <div className="mb-1">
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            placeholder="Name..."
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            className="form-control"
            name="lastname"
            id="lastname"
            aria-describedby="helpId"
            placeholder="Last Name..."
            value={form.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add!
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};
