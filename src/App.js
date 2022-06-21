import {useState} from 'react';
import contactData from './contacts.json'; 
import './App.css';

const contactsCopy=[...contactData];

function App() {
  const [contacts, setContacts]= useState(contactsCopy.slice(0,5));
  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const handleClean = () => {
    setContacts([]); 
  }
  



  const addContact = () => {
    const newContact = contacts[Math.floor(Math.random()*contacts.length)];
    const contactsCopy = [...contacts];
    contactsCopy.push(newContact);
    setContacts(contactsCopy);
  }

  const sortByName = () => {
    const contactsCopy = [...contacts];
    setContacts(contactsCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name)))
  }

  const sortByPopularity = () => {
    const contactsCopy = [...contacts];
    setContacts(contactsCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity))
  }

const displayContacts = () => {
  return(
contacts.map(({id, pictureUrl, name, popularity, wonOscar, wonEmmy}) =>{
 return(
    <div className="App">
      
   <table className='dif-columns'> 
  <tr><td><img src={pictureUrl} alt="actorImg"/></td>
  <td>{name}</td>
  <td>{popularity}</td>
  <td>{wonOscar}</td>
    <td>{wonEmmy}</td>
    {wonOscar && <td>🏆</td>}
    <td><button onClick={() => handleDelete(id)}>Delete</button></td>
    </tr>
    </table>
    </div> 
  )
}))
}
return(
  <div className='info-display'>
    <h1>Ironhack</h1>
   
  <div className='action-buttons'>
    <button onClick={() => addContact()}>Add contact</button>
    <button onClick={() => sortByName()}>Sort by name</button>
    <button onClick={() => sortByPopularity()}>Sort by popularity</button>
  </div>
<div className='display'>
  <table>
  <th>Picture</th>
  <th>Name</th>
  <th>popularity</th>
  <th>Won Oscar</th>
  <th>Won Emmy</th>
  </table>


{
displayContacts()
}
</div>
</div>
);

}
export default App;
