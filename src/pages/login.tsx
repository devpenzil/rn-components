import React from "react";

function login() {
  return (
    <div className="container mx-auto py-40 flex justify-center items-center">
      <div className="card shadow w-1/3 p-8">
        <div className="text-4xl font-bold">Login</div>
        <div className="text-sm font-semibold">
          Enter your email address and we’ll send you a magic log in link.
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full mt-6 bg-gray-300"
        />
        <button className="btn btn-primary w-min mt-2">Continue</button>
      </div>
    </div>
  );
}

export default login;
