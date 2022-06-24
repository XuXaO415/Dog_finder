import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import DogDetails from "./DogDetails";
import Dogs from "./Dogs";
import Nav from "./Nav";
import DogList from "./DogList";

function Routes({dogs}) {
    return (
        <div className="Routes">
            <Nav dogs={dogs} />
            <Switch>
                {dogs.map(dog => (Route({path: `/dogs/${dog.name}`, component: DogDetails})))}
            </Switch>
        </div>
    );
}

export default Routes;