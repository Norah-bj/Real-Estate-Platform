import "./chat.scss";
import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>

            <div className="message">
                <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />       
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>

            <div className="message">
                <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>

            <div className="message">
                <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>

            <div className="message">
                <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>

            <div className="message">
                <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        {chat && (<div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="/profile-img.jpeg" alt="/profile-img.jpeg" />
                    <span>John Doe</span>
                </div>
                <span className="close" onClick={() => setChat(null)}></span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>

                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
  )
}

export default Chat;