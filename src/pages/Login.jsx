import React, { useEffect } from 'react';
import { UserAuth } from '../context/MainContext';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const { currentUser, signIn } = UserAuth();
    const navigate = useNavigate();
    console.log(currentUser)


    const handleLogin = async () => {
        try {
            await signIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(currentUser) {
            navigate('/chat')
        }
    }, [currentUser]);
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Welcome to my chat! Please log in to proceed to the chat page. Feel free to leave feedback on my GithHub page.</p>
            <button className="btn btn-primary" onClick={handleLogin}>Log in with Google!</button>
            </div>
        </div>
        </div>
        </>
    )
}