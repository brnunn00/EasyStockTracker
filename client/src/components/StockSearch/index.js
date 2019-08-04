import React from "react";
import "./style.css";
function StockSearch(props) {
  return (
    <div class="active-cyan-3 active-cyan-4 mb-4 form-group">
    <input  {...props}  className="form-control" type="text" placeholder="Search Stocks" aria-label="Search"/>
  </div>
  );
}

export default StockSearch;
