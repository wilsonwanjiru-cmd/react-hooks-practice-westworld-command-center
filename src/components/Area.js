import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import "../stylesheets/Area.css";

function Area({ name, limit }) {
  // Pass in the area name and format it
  const formattedName = name.replace(/_/g, " ").toUpperCase();

  return (
    <div className="area" id={name}>
      <h3 className="labels">{formattedName}</h3>
      {/* Render hosts in this area here */}
    </div>
  );
}

Area.propTypes = {
  name: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  // You can also add a hosts prop for type checking if needed
};

export default Area;


