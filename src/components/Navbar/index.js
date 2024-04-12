import React, {useState} from 'react'
import ChatPage from '../ChatPage'
import CreateCharacterPage from '../CreateCharacterPage' // Import ChatPage component
import './index.css'

const Navbar = () => {
  const [showChatPage, setShowChatPage] = useState(false)
  const [showCharacterPage, setShowCharacterPage] = useState(false)

  const toggleChatPage = () => {
    setShowChatPage(!showChatPage)
    setShowCharacterPage(false) // Ensure only one page is shown at a time
  }

  const toggleCharacterPage = () => {
    setShowCharacterPage(!showCharacterPage)
    setShowChatPage(false) // Ensure only one page is shown at a time
  }

  return (
    <div className="container">
      <h2>character.ai</h2>
      <ul className="navbarorientation">
        <div>
          <li>
            <button onClick={toggleCharacterPage}>+Create</button>
          </li>
          <br />
          <li>
            <button>Discover</button>
          </li>
          <br />
          <li>
            <button onClick={toggleChatPage}>Chat</button>
            <h2>Today</h2>
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
                  alt="Profile"
                  className="image"
                />
                <button className="btm">Goju Singhani</button>
              </li>
              <br />
              <li>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
                  alt="Profile"
                  className="image"
                />
                <button className="btm">Raj Mehra</button>
              </li>
              <br />
              <li>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
                  alt="Profile"
                  className="image"
                />
                <button className="btm">Rahul Datt</button>
              </li>
              <br />
              <li>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
                  alt="Profile"
                  className="image"
                />
                <button className="btm">Ajay yadav</button>
              </li>
              <br />
              <li>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712572528/3d-ceo-character-with-glasses-illustration-ai-generated-artwork_781958-793_lwr3lp.avif"
                  alt="Profile"
                  className="image"
                />
                <button className="btm">Sweetyi Pandit</button>
              </li>
              <br />
              <li>
                <button>Try ai</button>
              </li>
            </ul>
          </li>
        </div>
        <li>
          <button>Sign Up</button>
        </li>
      </ul>

      {showCharacterPage && <CreateCharacterPage />}
      {showChatPage && <ChatPage />}
    </div>
  )
}

export default Navbar
