import React,{useEffect, useState} from 'react';
import {FormControl,InputLabel,Input} from '@mui/material';
import './App.css';
import Message from './Message';
import { collection, onSnapshot, addDoc, serverTimestamp , orderBy, query} from 'firebase/firestore';

import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function App() {
  //state code
  const [input, setInput]=useState('');
  const [messages,setMessages]=useState([{username:'sina',message:'hii'},{username:'madhu', message:'noo'}]);
  const [username,setUsername]=useState('');
  //useState --> variable in react
  
  
  //console.log(input);
  //console.log(messages);
  
  //called as listener code
  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp')); // Order by timestamp descending

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({message: doc.data(), id: doc.id }))); // Include document ID
    });

    return () => unsubscribe();
  }, []);



  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);
  


  const sendMessage = async (event) => {
    event.preventDefault();

    // Add message to Firestore
    addDoc(collection(db, 'messages'), {
      username: username,
      message: input,
      timestamp: serverTimestamp() // Add a timestamp for ordering
    })
    .then(() => {
      // Update messages state (optional, for immediate UI feedback)
      setInput(''); // Clear the input field
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  };

  
  return (
    <div className="App">
      <h3></h3>
      <img src="https://cdn-icons-png.flaticon.com/512/2338/2338099.png" width='70' height='70'/>
      <h1>🌊Sea The Message </h1>
      
      <h2 >Welcome {username} to the messenger </h2>
      <form className='app__form' >
      <FormControl className='app__formControl'>
          
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/> 
          <IconButton className='app__iconButton' disabled={!input} variant="contained" type='submit' onClick={sendMessage}> <SendIcon></SendIcon></IconButton>
          
        </FormControl>
      </form>
      
      <FlipMove>
       {
        messages.map(({message,id} )=>(
          <Message key={id} username={username} message={message}/>
        ))
       }
      </FlipMove>
    </div>
    

  );
}

export default App;
