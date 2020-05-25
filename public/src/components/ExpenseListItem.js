import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

//Export a stateless functional component
//numeral js - amount fix
// discription, amount, createAt;

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format("$0,0.00")} -{" "}
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default ExpenseListItem;
