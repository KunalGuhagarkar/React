import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleTopTextChange(event) {
    console.log(event.currentTarget.value);
    setMeme({ ...meme, topText: event.currentTarget.value });
  }

  function handleBottomTextChange(event) {
    console.log(event.currentTarget.value);
    setMeme({ ...meme, bottomText: event.currentTarget.value });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleTopTextChange}
            value={meme.topText}
          />
        </label>  

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleBottomTextChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
