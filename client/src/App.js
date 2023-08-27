import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const API_BASE = "http://localhost:8000"

//importing components
// import Page1 from "./Components/page1"
// import Page2 from "./Components/page2"
// import Page3 from "./Components/page3"

function App() {
  //declare all states here:

  //declare useEffect here:

  //add all react functionality here:

  return (
    <div className='App'>
      <Router>
        <h1>ConnectDex</h1>
      </Router>
    </div>
  );
}

//EXAMPLE OF HOW TO ROUTE A PATH FROM REACT TO BACKEND

// function App() {
//   return (
//       <div className="App">
//           <Router>
//               <Switch>
//                   <Route exact path="/" element={<h1>Home Page</h1>} />
//                   <Route exact path="page1" element={<Page1 />} />
//                   <Route exact path="page2" element={<Page2 />} />
//                   <Route exact path="page3" element={<Page3 />} />
//               </Switch>
//               <div className="list">
//                   <ul>
//                       <li><Link to="/">Home</Link></li>
//                       <li><Link to="page1">Page 1</Link></li>
//                       <li><Link to="page2">Page 2</Link></li>
//                       <li><Link to="page3">Page 3</Link></li>
//                   </ul>
//               </div>
//           </Router>
//       </div>
//   );
// }

export default App;
