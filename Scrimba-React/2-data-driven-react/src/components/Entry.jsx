export default function Entry({imgSrc, imgAlt, title, country, googleMapsLink, dates, text}) {
  return (
    <div className="entry-container">
      <div className="img-container">
        <img
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="content-container">
        <div className="location-container">
          <img src="src\assets\marker.png" alt="market-logo" />
          <p>{country}</p>
          <a href={googleMapsLink}>
            View on Google Maps
          </a>
        </div>

        <h1>{title}</h1>
        <p className="date">{dates}</p>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}
