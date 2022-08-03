import React from "react";
import OwlCarousel from "react-owl-carousel";
import Heading from "./Heading";
import imgSrc1 from "../assets/images/1.png";
import imgSrc2 from "../assets/images/2.png";
import imgSrc3 from "../assets/images/3.png";
import imgSrc4 from "../assets/images/4.png";
import imgSrc5 from "../assets/images/5.jpg";
import imgSrc6 from "../assets/images/6.jpg";
import imgSrc7 from "../assets/images/7.jpg";
import imgSrc8 from "../assets/images/8.jpg";

const TopNfts = [
  {
    id: "1",
    name: "3D Abstract Hand",
    price: "ETH 9.31",
    image: imgSrc1,
  },
  {
    id: "2",
    name: "3D Abstract Hand",
    price: "ETH 12.31",
    image: imgSrc2,
  },
  {
    id: "3",
    name: "2D Abstract Lips",
    price: "ETH 89.01",
    image: imgSrc3,
  },
  {
    id: "4",
    name: "3D Abstract Mouth",
    price: "ETH 0.41",
    image: imgSrc4,
  },
  {
    id: "5",
    name: "3D Abstract Hand",
    price: "ETH 9.31",
    image: imgSrc5,
  },
  {
    id: "6",
    name: "3D Abstract Hand",
    price: "ETH 12.31",
    image: imgSrc6,
  },
  {
    id: "7",
    name: "2D Abstract Lips",
    price: "ETH 89.01",
    image: imgSrc7,
  },
  {
    id: "8",
    name: "3D Abstract Mouth",
    price: "ETH 0.41",
    image: imgSrc8,
  },
];

function TopNFT() {
  return (
    <div className="my-12">
      <Heading title={"TOP NFTs"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {TopNfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-subLightMain pb-5 bg-subMain flex-colo"
          >
            <div className="relative w-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-64 object-cover"
              />
              <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                <h2 className="font-semibold text-whites">{t.name}</h2>
                <div className="mt-2 text-lg font-black tracking-wider text-whites">
                  {t.price}
                </div>
              </div>
            </div>

            <button className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopNFT;
