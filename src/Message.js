// es 7 snippets(extension)

import { Card, CardContent, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import './Message.css';


//forwardref-->higher order function/component
const Message=forwardRef(({username,message},ref)=> {
  const isUser = username === message.username;
  return (
    <div  ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color='white' variant='h5'component='h2'>
          
          {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
      </div>

  )
})

export default Message
