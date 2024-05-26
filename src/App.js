
import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import LocationInfo from "./Components/LocationInfo/LocationInfo";
import BookingDetail from "./Components/BookingDetail/BookingDetail";
import HouseRules from "./Components/HouseRules/HouseRules";
import Message from "./Components/Message/Message";
import Payment from "./Components/Payment/Payment";
import Maps from "./Components/Map/Maps";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/Login/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path ='/'>
          <Home></Home>
        </Route>
        <Route path ='/home'>
          <Home></Home>
        </Route>
        <Route path ='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path ='/locationInfo'>
          <LocationInfo></LocationInfo>
        </PrivateRoute>
        <Route path ="/bookingDetail/:id">
          <BookingDetail></BookingDetail>
        </Route>
        <Route path ="/houseRules">
          <HouseRules></HouseRules>
        </Route>
        <Route path ="/message">
          <Message></Message>
        </Route>
        <Route path ="/payment">
          <Payment></Payment>
        </Route>
        <Route path ="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;