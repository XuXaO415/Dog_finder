import React from "react";
import Dogs from './Dogs';

function DogsList({dogs}) {
    return (
        <div className="DogList">
            <h1>SHOW ME THE DOGGIES!</h1>
            {dogs.map(dog => (
                <Dogs key={dog.name} dog={dog}
                />
            ))}
        </div>
    );
}


export default DogsList;
