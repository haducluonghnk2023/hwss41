import React from "react";

export default function Hw5() {
  return (
    <div>
      <h1>Hw5</h1>
      <div className="relative  bg-gray-200 p-9  ">
        <p className="mb-2">Relative parent</p>
        <div className="absolute bottom-0 left-0  bg-blue-500 text-white p-1">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
