import React from "react";
import { Link } from "react-router-dom";

function Dogs({dog}){
<div className="Dogs">
    <h1>Doggy Name: {dog.name}</h1>
    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
</div>
}

export default Dogs;