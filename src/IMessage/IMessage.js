import React from 'react';
import { Chat } from '../Chat';
import { Sidebar } from '../Sidebar';
import './IMessage.css'

const IMessage = () => {
    return (
        <div className="imessage">
            <Sidebar />
            <Chat/>
        </div>
    )
}

export { IMessage }