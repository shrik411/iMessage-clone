import React, {useState} from 'react'
import './Chat.css'

import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';

function Chat() {

    const [input, setInput] = useState("");

    const sendMessage = e => {
        e.preventDefault();

        // firebase magic
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel name</span></h4>
                <strong>Details</strong>
            </div>

            <div className="chat_message">

            </div>

            <div className="chat__input">
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="iMessage" type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat_mic"/>
                </IconButton>
            </div>
        </div>
    )
}

export { Chat }
