import { useState } from 'react'
import { ContactsList } from './components/ContactsList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-center">
      <h1>Contacts List</h1>
      <ContactsList />
    </div>
  )
}

export default App
