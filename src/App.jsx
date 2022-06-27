import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DogRoutes from './DogRoutes';
import Nav from './Nav'
import duke from './assets/duke.jpg';
import perry from './assets/perry.jpg';
import doggies from'./assets/doggies.jpg';
import tubby from './assets/tubby.jpg';
import whiskey from './assets/whiskey.jpg';
import Dogs from './Dogs';
import DogDetails from './DogDetails';
import DogList from './DogList';
// function App({dogs}) {
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <Nav />
//     <Route exact path="/dogs" />
//     <Dogs />
 
    
// {/* 
//     <Route path="/dogs/:name" component={DogDetails} />
//     <Route path="/dogs" component={DogList} />
//     <Route path="/" component={Nav} /> */}


//     {/* <Nav dogs={dogs} />
//     <Route dogs={dogs}>
//       <Route path="/dogs/:name" component={Dogs} />
//     </Route> */}
//     {/* <Switch> */}
//       {/* <Route exact path="/dogs">
//         <Dogs />
//       </Route>
//       <Route path="/dogs/:name">
//         <DogDetails dogs={dogs} />
//       </Route>
//       <Route exact path="/dogs"><Dogs />
//       </Route> */}
//     {/* </Switch> */}
//     </BrowserRouter>
//     </div>
//   );
// }

function App({dogs}) {
  return (
    <div>
      <BrowserRouter>
        {/* <Nav dogs={dogs} /> */}
   
          <DogRoutes dogs={dogs} />
   
      </BrowserRouter>
    </div>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    },
        {
      name: "Doggies",
      age: 4,
      src: doggies,
      facts: [
        "Kona loves belly rubs.",
        "Lucy is a straight up cuddle bug",
        "Kona sometimes farts herself awake but blames Lucy."
      ]
    }
  ]
}

export default App;