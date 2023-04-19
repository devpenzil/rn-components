import { InterfaceStore, useStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Profile() {
  const { userdata, logout, fetchUser } = useStore(
    (State: InterfaceStore) => State
  );
  const router = useRouter();
  return (
    <div>
      <div className="h-[400px] w-full bg-slate-900" />
      <div className="flex flex-col justify-center items-center">
        <div
          className="absolute bottom-10 right-10 cursor-pointer text-red-400 font-bold text-xl"
          onClick={() => {
            logout(router.push("/"));
          }}
        >
          Logout
        </div>
        <img
          src={userdata?.user_metadata?.avatar_url}
          alt="profile image"
          className="w-40 h-40 -mt-20 rounded-xl border-4 border-white"
        />
        <div className="text-3xl font-bold mt-3">
          {userdata?.user_metadata?.full_name}
        </div>
        <div className="text-slate-800">
          @{userdata?.user_metadata?.user_name}
        </div>
      </div>
    </div>
  );
}

export default Profile;
