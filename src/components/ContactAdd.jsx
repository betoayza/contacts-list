import React from "react";
import { contacts } from "../data/contacts";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
};

export const ContactAdd = () => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.push(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add Contact</h2>

      <form>
        <div className="mb-1">
          <label forHtml="name" className="form-label">
            Name:
          </label>
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
          <label for="" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="lastname"
            aria-describedby="helpId"
            placeholder="Last Name..."
            value={form.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-1">
          <label for="" className="form-label">
            Email
          </label>
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

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Add!
        </button>
      </form>
    </div>
  );
};
