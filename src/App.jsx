import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  // When "Not Interested" is clicked, this removeTour function is called.
  // Based on the passed id, the filter method is used to remove the tour data belonging to the passed id.
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // If all tours are clicked "Not Interested", reinitialize all data to tours array.
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>Sorry 😔...... <br /> No More Tours Left</h2>
        <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      {/* removeTour and tours data are passed as props to the Tours component */}
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
