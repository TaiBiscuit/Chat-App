import React, { useState } from 'react';
import { UserAuth } from '../context/MainContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';


export const MessageInput = () => {
    const [value, setValue] = useState('');
    const { currentUser } = UserAuth();
 
    const handleMessage = async (e) => {
        e.preventDefault();
        if(value.trim() === '') {
            alert("Enter a message!");
            return
        }


        try { 
            const { uid, displayName, photoURL} = currentUser;
            console.log(currentUser)
            await addDoc(collection(db, "messages"), {
                txt: value,
                name: displayName,
                avatar: photoURL,
                uid,
                madeWhen: serverTimestamp()
            })
        } catch (error) {
            console.log(error)
        }
        setValue("");
    }

    return (
        <>
        <div className='bg-gray-200 w-1/2 fixed bottom-0 w-fit py-10 shadow-lg'>
            <form action="" className='flex px-4' onSubmit={handleMessage}>
                <input type="text" value={value} onChange={ e => setValue(e.target.value) } className='input w-full focus:outline-none bg-gray-100 rounded-r-none'/>
                <button type='submit' className='w-auto bg-gray-500 text-white rounded-r-large px-5 text-sm'>Send</button>
            </form>
        </div>
        </>
    )
}