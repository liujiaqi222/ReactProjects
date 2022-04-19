import memesData from "../memeData";
import { useState } from "react";

function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: getMemeImage(),
  });
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    return url;
  }

  function handleFormDataChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="顶部文字"
          name="topText"
          value={formData.topText}
          onChange={handleFormDataChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="底部文字"
          name="bottomText"
          value={formData.bottomText}
          onChange={handleFormDataChange}
        />
        <button
          className="form-button"
          onClick={() => setMeme((prev) => ({ ...prev, url: getMemeImage() }))}
        >
          生成表情包 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.url} className="meme-img" />
        <h2 className="meme-text top">{formData.topText}</h2>
        <h2 className="meme-text bottom">{formData.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
