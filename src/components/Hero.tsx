import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="h-[600px] flex flex-col justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="text-4xl font-semibold text-center">
          A free repository for community components using Tailwind CSS
        </div>
        <div className=" text-center mt-4 font-semibold text-sm text-slate-700">
          Open source Tailwind UI components and templates to bootstrap your new
        </div>
        <Link href="/components">
          <div className="mt-6 bg-blue-500 px-6 py-3 rounded-full text-white font-semibold">
            View components
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
