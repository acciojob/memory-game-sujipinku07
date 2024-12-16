import React from 'react';
function CellsContainer({ numbers,onClick }) {
    return ( 
      <div>
        {numbers.map((number, index) => (
          <div key={index} onClick={() => onClick(index)}>
            {number}
            {number}
          </div>
        ))}
      </div>
    );
  }
  export default CellsContainer;