import { useStore } from "@/store/store";
import Link from "next/link";
import React, { useEffect } from "react";

function Navbar() {
  const { userdata, logout, fetchUser } = useStore();
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className="navbar border-b-[1px] ">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-xl">
              RN Components
            </div>
          </Link>
        </div>
        {userdata?.id !== undefined ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={userdata?.user_metadata?.avatar_url} />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex-none pr-4">
            <Link href="/login">
              <button className="btn">login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
