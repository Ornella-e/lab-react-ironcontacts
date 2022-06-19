import {useState} from 'react';
import contactData from './contacts.json'; 
import './App.css';


function App() {
  const [contacts, setContacts]= useState(contactData);
  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const handleClean = () => {
    setContacts([]); 
  }
  
  const fiveContacts = ()=>{
   const contactsCopy=[...contacts];
  setContacts( contactsCopy.slice(0,5))}


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
    <div  className="App">
     
      <h1>Ironcontacts</h1>
     <p>{id}</p>
  <img src={pictureUrl} alt="actorImg"/>
    <p>{name}</p>
    <p>{popularity}</p>
    <p>{wonOscar}</p>
    <p>{wonEmmy}</p>
    {wonOscar && <p>🏆</p>}
    <button onClick={() => handleDelete(id)}>Delete</button>
    </div> 
  )
}))
}
return(
  <div>
  <div className='action-buttons'>
    <button onClick={() => addContact()}>Add contact</button>
    <button onClick={() => sortByName()}>Sort by name</button>
    <button onClick={() => sortByPopularity()}>Sort by popularity</button>
  </div>
<div className='display'>
{
displayContacts()
}
</div>
</div>
);

}
export default App;
