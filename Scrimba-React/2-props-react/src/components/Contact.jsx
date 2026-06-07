export default function Contact({ img, name }) {
  return (
    <>
      <article className="contact-card">
        <img src={img} alt="Photo of Mr. Whiskerson" />

        <h3>{name}</h3>
        <div className="info-group">
          <img src=".\src\assets\phone.png" alt="phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src=".\src\assets\mail.png" alt="mail icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </article>
    </>
  );
}
