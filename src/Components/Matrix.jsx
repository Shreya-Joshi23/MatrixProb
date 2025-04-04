import React, { useState } from "react";

/* 
    1. When we click on a cell it must turn green
    2. On clicking on the last cell, each cell must turn orange in sequence of their clicks
*/

const Matrix = ({matrixsize}) => {
  // useState hook for storing the sequence
  const [sequence, setsequence] = useState([]);

  // finds out the colums
  const gridsize=Math.ceil(Math.sqrt(matrixsize))

  const Changetoorange = () => {
    sequence.forEach((index,idx)=>{
      // settimeout for animation
      setTimeout(() => {
        const div = document.getElementById(`div${index}`);
        div.classList.remove("bg-green-400");
        div.classList.add("bg-orange-500");
      }, idx * 500);
    })
  };

  // when any div is clicked,it adds green color to classlist
  const handleClick = (i) => {
    if (!sequence.includes(i)) {
      const div = document.getElementById(`div${i}`);
      div.classList.add("bg-green-400");
      setsequence((prev) => [...prev, i]);
    }
    // if last div is clicks colour changes to orange in sequence
    if (i === matrixsize-1) {
      Changetoorange();
    }
  };

  const resetMatrix=()=>{
    window.location.reload()
    // or set the state to []
  }

  return (
    <div className="flex flex-col items-center">
    <div style={{
      gridTemplateColumns: `repeat(${gridsize}, 1fr)`
    }} className={`grid gap-2`}>
      {[...Array(matrixsize)].map((_, i) => (
        <div
          key={i}
          id={`div${i}`}
          className="border-black border-2 h-20 w-20 cursor-pointer"
          onClick={() => handleClick(i)}
        ></div>
      ))}
    </div>
    <div className="m-2 text-xl">
      {/* logging the sequence in which cells are clicked */}
      Sequence in which cells are clicked: {sequence}
    </div>
    <button
      className="p-3 mt-4 rounded-md  bg-blue-500 text-white cursor-pointer hover:bg-blue-400"
      onClick={resetMatrix}
    >
      {/* resets the cells */}
      Reset
    </button>
  </div>

  );
};

export default Matrix;
