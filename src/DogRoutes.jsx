import React from "react";
import {Route, Redirect} from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function DogRoutes({ dogs }) {
    return (
        <Route>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name">
                <DogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Route>
    );
}

export default DogRoutes;