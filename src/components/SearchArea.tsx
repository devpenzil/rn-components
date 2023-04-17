import React from "react";

function SearchArea() {
  return (
    <div className="container mx-auto py-28 flex flex-col justify-center items-center">
      <div className="text-2xl text-black font-semibold mb-6">
        All React Native Components
      </div>
      <input
        type="text"
        placeholder="Search component"
        className="input w-1/2 bg-white border border-slate-600 rounded-full"
      />
    </div>
  );
}

export default SearchArea;
