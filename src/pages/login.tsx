import React from "react";
import { useStore } from "@/store/store";

function Login() {
  const { userLoggin, logout, fetchUser, userdata } = useStore(
    (state) => state
  );
  console.log({ userdata });
  return (
    <div className="container mx-auto py-40 flex justify-center items-center">
      <div className="card shadow w-1/3 p-8">
        <div className="text-4xl font-bold">Login</div>
        <div className="text-sm font-semibold">
          Enter your email address and we’ll send you a magic log in link.
        </div>
        <button className="btn btn-primary" onClick={userLoggin}>
          login with github
        </button>
        <button className="btn btn-primary" onClick={fetchUser}>
          fetch user
        </button>
      </div>
    </div>
  );
}

export default Login;
