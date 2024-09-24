import { useRef, useState } from 'react'


function App() {
  const inputRef = useRef(null)
  const [image,setImage] = useState("")

  const handleImageCLick = () =>{
    inputRef.current.click()
  }

  const handleImageChange=(event) =>{
    const file  = event.target.files[0]
    setImage(file)
  }

  return (
    <div className="image-upload-container">
    <div className="box-decoration">
      <label htmlFor="image-upload-input" className="image-upload-label">
        {image ? image.name : "Choose an image"}
      </label>
      <div onClick={handleImageCLick} style={{ cursor: "pointer" }}>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
        ) : (
          <img src="/upload-image-react/img/4211763.png" alt="upload image" className="img-display-before" />
        )}

        <input
          id="image-upload-input"
          type="file"
          onChange={handleImageChange}
          ref={inputRef}
          style={{ display: "none" }}
        />
      </div>
    </div>
  </div>
  )
}

export default App
