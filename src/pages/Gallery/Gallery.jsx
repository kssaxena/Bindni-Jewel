import React from "react";
import { galleryBannerImages, galleryImages } from "../../Constants/Constants";
import RandomImageSlider from "./RandomImageSlider";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";

const Gallery = () => {
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const shuffledImages = shuffleArray(galleryImages);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full select-none ">
      <div className="fixed h-full w-full select-none z-0 top-0 left-0 ">
        <img
          className="w-full h-full object-cover opacity-20"
          src={`https://ik.imagekit.io/pz8qfunss/Gallery/gallery_Background.jpg?updatedAt=1751829884936`}
        />
      </div>
      <div>
        <section className="flex  lg:flex-row justify-evenly items-center lg:gap-20 gap-10 flex-col-reverse lg:py-20">
          <div className="flex flex-col justify-center lg:items-end lg:w-1/2 items-center px-10 ">
            <h1 className="lg:text-5xl text-2xl cinzel-font font-medium tracking-wider lg:text-right text-center">
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
        <section>
          <h1 className="text-center w-full lg:text-7xl text-2xl caveat-font lg:py-20 tracking-wider ">
            Welcome to our{" "}
            <span className="shadow-b-2xl border-b-2">Gallery</span>
          </h1>
          <div className="flex flex-wrap flex-row justify-center items-center gap-4 my-8 ">
            {shuffledImages.map((items, idx) => (
              <img
                key={idx}
                className="w-60 h-60 object-cover shadow shadow-black hover:scale-150 duration-500 ease-in-out hover:rounded-2xl z-10 hover:z-20"
                src={items}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
