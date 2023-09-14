import React, { useEffect, useRef, useState } from 'react';
import { Message } from './Message';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase'

export const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const forScrolling = useRef();


    const scrollTo = () => {
        forScrolling.current.scrollIntoView({ behaviour: "smooth"})
    }
    
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("madeWhen"),
            limit(15)
            );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id})
        });
        setMessages(messages)
    });
    return () => unsubscribe;
    }, []);

    useEffect(scrollTo, [messages])


    return (
        <>
        <div className="pb-44 pt-20 ml-5 flex flex-col">
            {messages.map(message => (
                <Message key={message.id} message={message}/>
            ))}
            <div ref={forScrolling}></div>
        </div>
        </>
    )
}