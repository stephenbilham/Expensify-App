import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

//Export a stateless functional component
// discription, amount, createAt;

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    {numeral(amount / 100).format("$0,0.00")} -{" "}
    {moment(createdAt).format("MMMM Do, YYYY")}
  </div>
);

export default ExpenseListItem;
