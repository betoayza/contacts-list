import { ContactsList } from "./components/ContactsList";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App text-center h-auto container">
      <h1 style={{ color: "#ffd700" }}>Contacts List</h1>
      <div
        className={"row row-cols-auto"}
        style={{ display: "grid", placeItems: "center" }}
      >
        <ContactsList />
      </div>
    </div>
  );
}

export default App;
