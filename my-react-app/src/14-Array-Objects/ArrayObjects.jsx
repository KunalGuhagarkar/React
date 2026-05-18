import { useState } from "react";

function ArrayObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars(c => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <>
      <h1>List of Car Objects</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            Year: {car.year}, Make: {car.make}, Model: {car.model}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Enter Car Year"
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <br />
      <button id="submit-btn" onClick={handleAddCar}>
        Submit
      </button>
    </>
  );
}

export default ArrayObjects;
