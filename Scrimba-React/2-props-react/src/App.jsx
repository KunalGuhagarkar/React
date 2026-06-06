function App() {
  return (
    <div className="contacts">
      <article className="contact-card">
        <img src=".\src\assets\cat.jpg" alt="Photo of Mr. Whiskerson" />
        
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src=".\src\assets\phone.png" alt="phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src=".\src\assets\mail.png" alt="mail icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </article>

      <article className="contact-card">
        <img src=".\src\assets\cat.jpg" alt="Photo of Fluffykins" />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src=".\src\assets\phone.png" alt="phone icon" />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src=".\src\assets\mail.png" alt="mail icon" />
          <p>fluff@me.com</p>
        </div>
      </article>

      <article className="contact-card">
        <img src=".\src\assets\cat.jpg" alt="Photo of Felix" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src=".\src\assets\phone.png" alt="phone icon" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src=".\src\assets\mail.png" alt="mail icon" />
          <p>thecat@hotmail.com</p>
        </div>
      </article>

      <article className="contact-card">
        <img src=".\src\assets\cat.jpg" alt="Photo of Pumpkin" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src=".\src\assets\phone.png" alt="phone icon" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src=".\src\assets\mail.png" alt="mail icon" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </article>
    </div>
  );
}

export default App;
