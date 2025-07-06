import React from "react";
import { galleryBannerImages } from "../../Constants/Constants";
import RandomImageSlider from "./RandomImageSlider";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";

const Gallery = () => {
  return (
    <div>
      <section className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center items-end w-1/2">
          <h1 className="text-7xl caveat-font font-medium tracking-wider text-right">
            We offer a wide range Collections of
          </h1>
          <ContainerTextFlip
            words={[
              "Imitation Jewelry",
              "Sarees",
              "Handmade Bags",
              "Blankets",
              "Handicrafts",
              "Lenghas",
            ]}
          />
        </div>
        <RandomImageSlider images={galleryBannerImages} />
      </section>
    </div>
  );
};

export default Gallery;
