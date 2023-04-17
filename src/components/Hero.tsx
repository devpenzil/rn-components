import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero h-[600px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">React Native Components</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/components">
              <div className="btn btn-accent">view components</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
