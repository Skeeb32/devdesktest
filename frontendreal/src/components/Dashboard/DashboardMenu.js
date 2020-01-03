import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { DashNav } from "../../hooks/index";

const DashboardMenu = props => {
  return (
    <DashNav className="dash-panel">
      <ul>
        <Link to="/new-ticket">
          <li>Create Ticket</li>
        </Link>
        <Link to="/my-tickets">
          <li>My Tickets</li>
        </Link>
        <Link to="/tickets">
          <li>All Tickets</li>
        </Link>
      </ul>
    </DashNav>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(DashboardMenu);
