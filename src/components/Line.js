import React, { useEffect, useState } from 'react'
import unkonwn from '../img/unknown-icon.png';
import { SignOut } from './SignOut'
import SendMessage from './SendMessage';
import { db, auth } from "../firebase.js";

export const Line = () => {

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages')
        .orderBy('createdAt')
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    },[]);


  return (
    <div>
        {/* {console.log(messages)} */}
        <SignOut/>
        <div className='msgs'>
            {messages.map(({id, text, photoURL, uid}) => (
                <div >
                <div 
                 key={id}
                 className={`msg ${
                    uid === auth.currentUser.uid ? 'sent' : 'received'
                 }`}>
                    <img src={photoURL ? photoURL : unkonwn} alt=""/>
                    <p>{text}</p>
                </div>
            </div>
            ))}

        </div>
        <SendMessage/>
    </div>
  )
}
