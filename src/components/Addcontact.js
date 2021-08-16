import React,{useState} from 'react';



const Addcontact = () => {

 const[contacts,setContacts] = useState([{}])
    
const handleAdd = (contact) => {setContacts([...contacts, contact] ); 
}
    return (
       <> 
        <form>
    <input type = 'text' value = {contacts}></input>

       <button class = 'add-Contact' onClick={handleAdd} >
         Add
       </button>
       
       
        </form>
            
        </>
    )
}

export default Addcontact
