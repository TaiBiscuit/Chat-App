import React from 'react';
import { UserAuth } from '../context/MainContext';


export const Message = ({message}) => {
    const { currentUser } = UserAuth();
    

    return (
        <>
        <div className={`chat ${message.uid === currentUser.uid ? "chat-end mr-4" : "chat-start"}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={message.avatar} />
            </div>
        </div>
        <div className="chat-header">
            {message.name}
            <time className="text-xs opacity-50"></time>
        </div>
        <div className="chat-bubble">{message.txt}</div>
        </div>
        </>
    )
}