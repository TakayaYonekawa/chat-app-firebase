import React, { useState } from 'react'
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import { db, auth} from '../firebase';
import firebase from "firebase/compat/app";


function SendMessage() {
    const [message, setMessage] = useState('');
    
    function sendMessage(e) {
        e.preventDefault();
        const {uid , photoURL} = auth.currentUser;

        db.collection('messages').add({
            text: message,
            photoURL,
            uid,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage('')

    }


  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className="sendMsg">
        <Input 
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />

            </div>
        </form>
    </div>
  )
}

export default SendMessage