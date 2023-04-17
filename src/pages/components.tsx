/* eslint-disable react-hooks/rules-of-hooks */
import SearchArea from "@/components/SearchArea";
import { useStore } from "@/store/store";
import { supabase } from "@/supabase/config";
import React, { useEffect } from "react";

export async function getServerSideProps() {
  const Response = await supabase
    .from("components")
    .select(`cname, previewurl, author->username`);
  return {
    props: {
      components: Response.data,
    },
  };
}

function Components({ components }) {
  console.log(components);
  return (
    <div className="container mx-auto ">
      <SearchArea />
      <div className="flex flex-wrap flex-row items-center justify-center">
        {components.map((obj) => {
          return (
            <>
              <div className="card w-80 shadow-xl m-3 cursor-pointer h-full">
                <figure>
                  <img src={obj.previewurl} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl ">{obj.cname}</h2>
                  <p className="text-sm text-slate-500">By {obj.username}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Components;
