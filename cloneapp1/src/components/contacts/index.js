import {useState, useEffect} from 'react'  //rfce ile react componenti oluşturuyoruz.
import './style.css';
import List from './List';
import Form from './Form';
function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number : "123123",
        },
        {
            fullname:"ali",
            phone_number:"654456",
        },
        {
            fullname:"ayşe",
            phone_number:"789987"
        },
    ]);
    useEffect(() => {
        console.log(contacts);
    }, [contacts])    //contacts e bir atama yapıldığında useefect ile görebiliriz
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
  )
}
export default Contacts;