import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TicketViews from "./views/TicketViews";
import Registration from "./components/Registration";
import TicketForm from "./components/Tickets/TicketForm";
import TicketCard from "./components/Tickets/TicketCard";
import Edit from "./components/Tickets/Edit";
import MyTickets from "./components/Tickets/MyTickets";

function App() {
  return (
    <Router>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route exact path="/" exact component={Login} />
        <PrivateRoute
          path="/tickets/:id"
          exact
          component={props => <TicketCard {...props} />}
        />
        <PrivateRoute
          path="/new-ticket"
          component={props => <TicketForm {...props} />}
        />
        <PrivateRoute path="/my-tickets" component={MyTickets} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <PrivateRoute exact path="/tickets" component={TicketViews} />
        <Route path="/registration" component={Registration} />
    </Router>
  );
}

export default App;
