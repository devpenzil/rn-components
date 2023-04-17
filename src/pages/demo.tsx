import Codeblock from "@/components/Codeblock";
import React from "react";

function demo() {
  return (
    <div className="container mx-auto py-16 ">
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col justify-center ">
          <div className="text-5xl font-semibold ">
            Tailwind CSS Registration Form
          </div>
          <div className="text-sm font-semibold">
            Simple Registration Form made using Tailwind CSS
          </div>
        </div>
        <div className="h-20" />
        <div className="w-1/2 flex justify-center items-center ">
          <img
            src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="w-96 h-96"
          />
        </div>
      </div>
      <Codeblock />
      <Codeblock />
      <Codeblock />
      <div className="text-right text-red-500">Not working</div>
    </div>
  );
}

export default demo;
