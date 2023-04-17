/* eslint-disable react-hooks/rules-of-hooks */
import SearchArea from "@/components/SearchArea";
import { supabase } from "@/supabase/config";
import React, { useEffect } from "react";

function components() {
  return (
    <div className="container mx-auto ">
      <SearchArea />
      <div className="flex flex-wrap flex-row items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((obj) => {
          return (
            <>
              <div className="card w-80 shadow-xl m-3 cursor-pointer">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">
                    Tailwind CSS Registration Form
                  </h2>
                  <p className="text-sm text-slate-500">By devpenzil</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default components;
