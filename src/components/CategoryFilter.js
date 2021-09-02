import React from "react";

function CategoryFilter( {categories, handleFilterClick}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
        <button
          key={category}
          onClick={handleFilterClick}>
          {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;
