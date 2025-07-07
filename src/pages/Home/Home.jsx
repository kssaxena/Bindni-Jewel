import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { Typewriter } from "react-simple-typewriter";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { words1, words2 } from "../../Constants/Constants";

const Home = () => {
  const [activeSection, setActiveSection] = useState("Necklaces");
  const zoomVariant = {
    hidden: { scale: 0.8, opacity: 1 / 2 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const handleCollectionPage = () => {
    window.location.href = "/all-collections";
  };

  return (
    <div className=" cinzel-font h-fit">
      <section className="landing-section flex flex-row items-center justify-evenly w-full h-screen">
        <div className="absolute h-full w-full select-none z-0 top-0 left-0">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity:0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-full object-cover opacity-20"
            src={`https://ik.imagekit.io/pz8qfunss/Home/jwellery%20backgound.jpg?updatedAt=1751307138279`}
          />
        </div>
        <div className="flex flex-row items-center justify-around w-full h-screen z-10">
          <div className="flex flex-col items-center justify-around  h-3/4 ">
            <h1 className=" tracking-wider text-[60px]">
              Happiness of <br /> women
              {/* <span className="typewriter-text inline-block">
                Happiness of <br /> women
              </span> */}
              {/* <span>
                <Typewriter
                  words={["Happiness of women"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span> */}
            </h1>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center border-black border border-t-2 p-5 rounded-tr-[10vh] rounded-bl-[10vh] border-l-2"
            >
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-60 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] "
                src={`https://ik.imagekit.io/pz8qfunss/Home/ring.jpeg?updatedAt=1751285826577`}
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center  h-3/4 gap-20 pb-20">
            <div className="border-black border-r border-t-2 p-5 rounded-tr-[10vh]">
              <motion.img
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-96 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9]"
                src={`https://ik.imagekit.io/pz8qfunss/Home/Padmakshi%20Jewellers%20-%20Product%20Photography.jpeg?updatedAt=1751285085823`}
              />
            </div>
            <Button Label={"Explore More"} onClick={handleCollectionPage} />
          </div>
          <div className="flex flex-col items-center justify-around  h-3/4 ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="border-black border-l-3 border-b p-5 rounded-bl-[10vh] "
            >
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-60 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] "
                src={`https://ik.imagekit.io/pz8qfunss/Home/Jewellery%20Set.jpeg?updatedAt=1751285913022`}
              />
            </motion.div>
            <h1 className="text-[60px] tracking-wide">Trendy jewelry</h1>
          </div>
        </div>
      </section>
      <section className="praise flex justify-around items-center py-20">
        <div className="flex flex-row">
          <video
            className="w-60 translate-x-1/2 mt-20 mr-20 rounded-full border-8 border-[#D6D7C2]"
            src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(1).mp4?updatedAt=1751376140133"
            autoPlay
            loop
            muted
            playsInline
          />
          <img
            className="w-60 object-cover mb-20  rounded-full border-8 border-[#D6D7C2]"
            src={`https://ik.imagekit.io/pz8qfunss/Home/jewel.jpeg?updatedAt=1751376778989`}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className=" tracking-wider text-[50px]">
            Jewelry which fit Everyone's <br /> Budget and Taste !
          </h1>
          <p className="fredoka-font text-justify">
            Jewelry that fits every budget and taste is a rare gem in today's
            market, but our collection makes it a reality. Whether you're
            looking for something elegant and timeless or trendy and bold,
            there's a perfect piece waiting for you—without breaking the bank.
            Designed with versatility in mind, our jewelry appeals to all styles
            and preferences, making it easy to find something that feels
            uniquely yours. With quality craftsmanship and affordable pricing,
            we make luxury accessible for everyone.
          </p>
          <div className={"w-full justify-center items-center flex"}>
            <Button Label="Explore Collection" onClick={handleCollectionPage} />
          </div>
        </div>
      </section>
      <section className="company_collection flex py-20 ">
        <aside className="w-1/4">
          <nav>
            <ul className="flex flex-col gap-10 items-end">
              <li
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Necklaces"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Necklaces")}
              >
                Necklaces
              </li>
              <li
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Lehengas"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Lehengas")}
              >
                Lehengas
              </li>
              <li
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Sarees"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Sarees")}
              >
                Sarees
              </li>
              <li
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Handmade Bags"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Handmade Bags")}
              >
                Handmade Bags
              </li>
              <li
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Handicraft Items"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Handicraft Items")}
              >
                Handicraft Items
              </li>
              <li
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Blankets"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Blankets")}
              >
                Blankets
              </li>
            </ul>
          </nav>
        </aside>
        <main className="collections w-3/4 relative py-20 ">
          {[
            "Necklaces",
            "Lehengas",
            "Sarees",
            "Handmade Bags",
            "Handicraft Items",
            "Blankets",
          ].map((section) => (
            <div
              key={section}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeSection === section
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {section === "Necklaces" && (
                <div className="flex justify-center items-center gap-20">
                  <motion.video
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                    className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover p-5 border-l-2 border-b"
                    src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(2).mp4?updatedAt=1751379665298"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <motion.video
                    variants={zoomVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover p-5 border-t border-r-2"
                    src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(3).mp4?updatedAt=1751379661461"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              )}
              {section === "Lehengas" && (
                <motion.div
                  variants={zoomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className=" flex justify-center items-center gap-20 "
                >
                  <div>
                    <motion.div
                      variants={zoomVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div>
                        <video
                          // className="w-60 h-full object-cover bg-red-400"
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh]  object-cover  p-5 border-l-2 border-b"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(5).mp4?updatedAt=1751394979227" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div className="flex flex-col items-center justify-center">
                      <div>
                        <motion.video
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover  p-5 border-t border-r-2"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(4).mp4?updatedAt=1751394982114" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {section === "Sarees" && (
                <motion.div
                  variants={zoomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className=" flex justify-center items-center gap-20 "
                >
                  <div>
                    <motion.div
                      variants={zoomVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div>
                        <video
                          // className="w-60 h-full object-cover bg-red-400"
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh]  object-cover  p-5 border-l-2 border-b"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Bridal%20Jewellery%20and%20makeup%20Ideas.mp4?updatedAt=1751396617068" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div className="flex flex-col items-center justify-center">
                      <div>
                        <motion.video
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover  p-5 border-t border-r-2"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(6).mp4?updatedAt=1751396796780" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {section === "Handmade Bags" && (
                <motion.div
                  variants={zoomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className=" flex justify-center items-center gap-20 "
                >
                  <div>
                    <motion.div
                      variants={zoomVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div>
                        <video
                          // className="w-60 h-full object-cover bg-red-400"
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh]  object-cover  p-5 border-l-2 border-b"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(8).mp4?updatedAt=1751397479644" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div className="flex flex-col items-center justify-center">
                      <div>
                        <motion.video
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover  p-5 border-t border-r-2"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(7).mp4?updatedAt=1751397363519" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {section === "Handicraft Items" && (
                <motion.div
                  variants={zoomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className=" flex justify-center items-center gap-20 "
                >
                  <div>
                    <motion.div
                      variants={zoomVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div>
                        <video
                          // className="w-60 h-full object-cover bg-red-400"
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh]  object-cover  p-5 border-l-2 border-b"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(8).mp4?updatedAt=1751397479644" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div className="flex flex-col items-center justify-center">
                      <div>
                        <motion.video
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover  p-5 border-t border-r-2"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(7).mp4?updatedAt=1751397363519" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {section === "Blankets" && (
                <motion.div
                  variants={zoomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className=" flex justify-center items-center gap-20 "
                >
                  <div>
                    <motion.div
                      variants={zoomVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div>
                        <video
                          // className="w-60 h-full object-cover bg-red-400"
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh]  object-cover  p-5 border-l-2 border-b"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(10).mp4?updatedAt=1751399213337" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div className="flex flex-col items-center justify-center">
                      <div>
                        <motion.video
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                          className="w-72 rounded-tr-[10vh] rounded-bl-[10vh] object-cover  p-5 border-t border-r-2"
                          src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(9).mp4?updatedAt=1751399213922" // replace with your video URL
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </main>
      </section>
      <section className="flex flex-col pt-40  select-none pb-10">
        <div className="flex">
          <div className="w-1/2 p-20 flex flex-col gap-10">
            <h1 className=" tracking-wider text-[65px] ">
              Jewelry is like <br /> the Perfect Spice
            </h1>
            <TextGenerateEffect
              words={words2}
              className="fredoka-font text-justify w-3/4"
            />
          </div>
          <div className="absolute flex justify-center items-center w-full opacity-50">
            <div className="flex flex-col items-center justify-center border-black border border-t-2 p-5 rounded-tr-[10vh] rounded-bl-[10vh] border-l-2 w-96 relative">
              <img
                className="scale-125  w-60 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] "
                src={`https://ik.imagekit.io/pz8qfunss/Home/ring.jpeg?updatedAt=1751285826577`}
              />
            </div>
          </div>
          <div className="w-1/2 p-20 flex flex-col gap-10 items-end">
            <TextGenerateEffect
              words={words1}
              className="fredoka-font text-justify w-3/4"
            />
            <h1 className=" tracking-wider text-[65px] ">
              It complements what's
              <br /> already there !!!
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <Button
            Label="Explore More"
            className={"w-fit"}
            onClick={handleCollectionPage}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
