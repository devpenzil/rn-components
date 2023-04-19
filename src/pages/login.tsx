import React from "react";
import { useStore } from "@/store/store";

function Login() {
  const { userLoggin, logout, fetchUser, userdata } = useStore(
    (state) => state
  );
  console.log({ userdata });
  return (
    <div className="container mx-auto py-40 flex justify-center items-center">
      <div className="card shadow w-1/3 p-8 flex flex-col items-center">
        <img
          src="https://i.ibb.co/KKk6XsD/github-mark.png"
          alt=""
          className="w-20 h-20"
        />
        <button className="btn w-full mt-6 text-white " onClick={userLoggin}>
          login with github
        </button>
      </div>
    </div>
  );
}

export default Login;
