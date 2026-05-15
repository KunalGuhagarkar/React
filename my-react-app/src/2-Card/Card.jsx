import spideyBaby from "../assets/spidey.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={spideyBaby} alt="Kunal Image" />
      <h2 className="card-title">Kunal Guhagarkar</h2>
      <p className="card-text">I'am a Web Developer and Play Football</p>
    </div>
  );
}

export default Card;
