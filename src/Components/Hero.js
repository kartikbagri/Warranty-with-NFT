import React from "react";
import CountDown from "./CountFunction";

function Hero() {
  return (
    <div className="lg:grid grid-cols-2 gap-3 items-center">
      <div className="col-span-1 py-12 lg:py-0">
        <h1 className="2xl:text-5xl lg:text-4xl sm:text-5xl text-4xl leading-snug 2xl:leading-snug sm:leading-snug lg:leading-snug font-head text-whites tracking-wide">
          Track,Trade & Sell <br/> Authetic items <br />
          <span className="text-pink">Timebound Warranty </span>
          <span className="text-blue"> By NFTs</span>
        </h1>
        <p className="font-medium text-lightBlack mt-3">
          The first and most trusted platform largest digital storage for crypto
          collectibles and non- fungible tokens (NFTs).
        </p>
        {/* <div className="flex-colo w-full sm:w-3/5 border border-whites py-6 px-6 bg-subMain rounded mt-10">
          <h2 className="italic font-semibold text-blue">
            NFT drop coming soon!!
          </h2>
          <CountDown />
        </div> */}
      </div>
      <div className="hero lg:block hidden">
        <img
          src="/images/img.png"
          alt="Main"
          className="w-75 h-75 object-contain mt-5"
        />
      </div>
    </div>
  );
}

export default Hero;
