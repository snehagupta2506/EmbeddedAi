import React, {useState} from 'react'
import './index.css'

const CreateCharacterPage = () => {
  
  const [characterName, setCharacterName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [greeting, setGreeting] = useState('')
  const [moreOptions, setMoreOptions] = useState('')
  const [visibility, setVisibility] = useState('')

  return (
    <div className="box">
      <form>
        <img src="https://res.cloudinary.com/df9atzyob/image/upload/v1712569373/icon-add-image-upload-image-file-photo-outline-design-free-vector_kot4da.jpg" />
        <div>
          <label>Character Name</label>
          <br />
          <input
            type="text"
            placeholder="eg.Albert Einstein"
            value={characterName}
            onChange={e => setCharacterName(e.target.value)}
          />
          <p>0/20</p>
        </div>
        <div>
          <label>Tagline</label>
          <br />
          <input
            type="text"
            placeholder="Add a small tagline of your character"
            value={tagline}
            onChange={e => setTagline(e.target.value)}
          />
          <p>0/50</p>
        </div>
        <div>
          <label>Description</label>
          <br />
          <input
            type="text"
            placeholder="How would your character describe yourselves"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <p>0/500</p>
        </div>
        <div>
          <label>Greeting</label>
          <br />
          <input
            type="text"
            placeholder="Hello! I am Albert.Ask me anything about my specific contributions"
            value={greeting}
            onChange={e => setGreeting(e.target.value)}
          />
          <p>0/2048</p>
        </div>
        <div>
          <label>More Options</label>
          <select
            value={moreOptions}
            placeholder="visibility"
            onChange={e => setMoreOptions(e.target.value)}
          >
            <option value="">Select</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label>Visibility</label>
          <br />
          <select
            value={visibility}
            onChange={e => setVisibility(e.target.value)}
          >
            <option value="" placeholder="Public">
              Select
            </option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default CreateCharacterPage
