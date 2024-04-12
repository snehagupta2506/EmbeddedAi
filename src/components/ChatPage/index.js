import React, {useState} from 'react'
import '../Navbar'
import './index.css' // Import CSS for styling

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: '@xpeahead',
      text: 'Meet AIs that feel alive. Chat with anyone, anywhere, anytime. Experience the power of super-intelligent chat bots that hear you, understand you, ...',
    },
    {
      id: 2,
      sender: 'You',
      text: 'Hello',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        text: inputMessage,
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  return (
    <div className="chat-container">
      <div className="header">
        <img
          src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
          alt="Profile"
          className="image"
        />
        <br />
        <h2>HyperGlot</h2>
        <br />
        <p>By @xpeahead</p>
      </div>
      {/* Profile info */}
      <div className="profile-info">
        <img
          src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
          alt="Profile"
        />
        <div>
          <h2>HyperGlot</h2>
          <p>
            Artificial intelligence chatbots are chatbots trained to have
            human-like conversations using a process known as natural language
            processing (NLP).
          </p>
          <p>By @xpeahead</p>
        </div>
      </div>
      {/* Message list */}
      <div className="message-list">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${
              message.sender === 'You' ? 'sent' : 'received'
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      {/* Message input */}
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
        />
        {/* Send button */}
        <button onClick={sendMessage}>Send</button>
      </div>
      <p className="footer">Remember every character you say is made up!!</p>
    </div>
  )
}

export default ChatPage
