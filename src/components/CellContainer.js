import React from 'react';
function CellsContainer({ numbers,onClick }) {
    return ( 
      <div>
        {numbers.map((number, index) => (
          <span key={index} onClick={() => onClick(index)}>
            {number}
          </span>
        ))}
      </div>
    );
  }
  export default CellsContainer;