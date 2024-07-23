import React from "react";

const CounterControls = ({add, remove, reset}) => {
  return (
    <div className="flex justify-center gap-10">
      <button className="px-4 py-2 text-white rounded-md bg-violet-500 text-sm font-medium hover:bg-teal-500 duration-300"
      onClick={()=>add()}
      >
        Increment
      </button>
      <button className="px-4 py-2 text-white rounded-md bg-violet-500 text-sm font-medium hover:bg-teal-500 duration-300"
      onClick={()=>remove()}
      >
        Decrement
      </button>
      <button className="px-4 py-2 text-white rounded-md bg-violet-500 text-sm font-medium hover:bg-teal-500 duration-300"
      onClick={()=>reset()}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterControls;
