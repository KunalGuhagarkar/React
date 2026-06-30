function About() {
    return (
        <div className="about-container">
            <img
                src="src/assets/van.jpg"
                alt="Scenic camper van"
                className="about-img"
            />

            <div className="about-content">
                <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
                <p>
                    Our main mission is to enliven your road trip with the
                    perfect travel van rental. Our vans are recertified before
                    each trip to ensure your travel plans can go off without a
                    hitch.
                </p>
                <p className="joke-text">(Hitch costs extra 😉)</p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>

                <div className="cta-card">
                    <h3>
                        Your destination is waiting.
                        <br />
                        Your van is ready.
                    </h3>
                    <button className="explore-btn">Explore our vans</button>
                </div>
            </div>
        </div>
    );
}

export default About;