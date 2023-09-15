import React from 'react';
import { UserAuth } from '../context/MainContext';
import { VscGithub } from 'react-icons/vsc';
import { BiLogOutCircle } from 'react-icons/bi';

export const Navbar = () => {
    const { currentUser, logout } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="navbar fixed z-10 bg-primary text-primary-content nav-bar">
        <a className="btn btn-ghost normal-case text-xl" href='https://github.com/TaiBiscuit' target='_blank'><VscGithub size={40} /></a>
        { currentUser ? <button className='btn btn-ghost normal-case text-xl' onClick={handleSignOut}>Logout <BiLogOutCircle size={40} /></button> : <></>}
        </div>
        </>
    )
}