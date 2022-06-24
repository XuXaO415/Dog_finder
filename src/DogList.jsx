import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from './Dogs';

function DogsList({ dogs }) {
    return (
        <div className="DogList">
            <h1>Dogs</h1>
            <Switch>
                <Route exact path="/dogs" render={() => <Dogs dogs={dogs} />} />
                <Route path="/dogs/:name" render={({ match }) => {
                    const dog = dogs.find(dog => dog.name === match.params.name);
                    if (dog) {
                        return <Dogs dog={dog} />;
                    } else {
                        return <Redirect to="/dogs" />;
                    }
                }
                } />
            </Switch>
        </div>
    );
}


export default DogsList;
