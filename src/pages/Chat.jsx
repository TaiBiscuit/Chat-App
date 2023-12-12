import React from 'react';
import { ChatBox } from '../components/ChatBox';
import { MessageInput } from '../components/MessageInput';


export const Chat = () => {
    
    return (
        <>
        <div className='chat-box w-1/2 sm:w-full usm:w-full lg:w-1/2 relative bg-white pt-20'>
            <ChatBox/> 
            <MessageInput/>
        </div>
        </>
    )
}