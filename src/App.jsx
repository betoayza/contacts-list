import { useState } from "react";
import { ContactsList } from "./components/ContactsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App text-center">
      <h1 style={{ color: "#7cfc00" }}>Contacts List</h1>
      <ContactsList />
    </div>
  );
}

export default App;
