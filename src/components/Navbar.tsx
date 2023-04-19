/* eslint-disable react-hooks/exhaustive-deps */
import { useStore } from "@/store/store";
import Link from "next/link";
import React, { useEffect } from "react";

function Navbar() {
  const { userdata, logout, fetchUser } = useStore();
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(userdata);

  return (
    <div className="bg-transparent w-full">
      <div className="container mx-auto p-3 flex flex-row justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-semibold">RN Components</div>
        </Link>
        <div>
          {userdata?.id !== undefined ? (
            <div className="flex flex-row gap-5 items-center">
              <Link href="/submitcomponents">
                <div>Submit Component</div>
              </Link>
              <Link href="/profile">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={userdata?.user_metadata?.avatar_url} />
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className=" bg-blue-600 px-4 py-2 text-white font-semibold rounded-md">
              <Link href="/login">login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
