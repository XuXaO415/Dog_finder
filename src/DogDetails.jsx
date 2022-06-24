import React from "react";
import { Link } from "react-router-dom";

function DogDetails({dog}) {
    return (
        <div className="DogDetails">
          <img src={dog.src} alt={dog.name} />
            <h1>Doggy Name: {dog.name}</h1>
            <h2>Doggy Age: {dog.age}</h2>
            <h3>Doggy Facts:</h3>
            <ul>
                {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
            </ul>
            <Link to="/dogs">Back to Dogs</Link>
        </div>
    );
}

export default DogDetails;