import { useEffect, useState } from "react";
import { testimonials } from "../../Constants/Constants";
import { AnimatePresence, motion } from "framer-motion";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { RiDoubleQuotesR } from "react-icons/ri";

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // cleanup
  }, [text, speed]);

  return <p className="whitespace-pre-line">{displayedText}</p>;
};

const Card = ({ quote, name, title, onReadMore }) => {
  const getShortQuote = (text) => {
    const words = text.split(" ");
    if (words.length <= 25) return text;
    return words.slice(0, 25).join(" ") + "...";
  };

  return (
    <div className=" h-96 w-96 scale-110 rounded-lg flex flex-col m-5 justify-evenly items-start bg-white/50 px-5 font-Caveat select-none shadow-2xl">
      <h1 className="text-4xl">
        <RiDoubleQuotesR />
      </h1>
      <div className="review">
        <h1 className="text-justify">"{getShortQuote(quote)}"</h1>
        {quote.split(" ").length > 25 && (
          <button
            onClick={() => onReadMore(quote)}
            className="border-b border-[#282623] hover:scale-105 duration-300 ease-in-out mt-5"
          >
            Read more
          </button>
        )}
      </div>
      <div className="name">_ {name}</div>
      <div className="stars w-full flex justify-around items-center">
        ★★★★★ <span>{title}</span>
      </div>
    </div>
  );
};

const Carousel = () => {
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  const [current, setCurrent] = useState(0);
  const totalSlides = testimonials.length;
  const [showModal, setShowModal] = useState(false);
  const [modalQuote, setModalQuote] = useState("");

  const openModal = (quote) => {
    setModalQuote(quote);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalQuote("");
  };

  return (
    <div className="relative overflow-hidden w-full lg:w-1/2 ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full h-full flex justify-center items-center"
          >
            <Card
              name={slide.name}
              quote={slide.quote}
              title={slide.title}
              onReadMore={openModal}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute lg:top-1/2 bottom-0 left-4 transform -translate-y-1/2 font-bold text-2xl text-[#282623] rounded-full "
      >
        <CiCircleChevLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute lg:top-1/2 bottom-0 right-4 transform -translate-y-1/2 font-bold text-2xl text-[#282623] rounded-full "
      >
        <CiCircleChevRight />
      </button>

      {/* Dots */}
      <div className="lg:flex justify-center gap-2 my-5 lg:mt-20 hidden ">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-[#2A2623]" : " border"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Modal OUTSIDE carousel */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              backgroundColor: "transparent", // Corrected from `transparent` to string
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 select-none">
              <div className="bg-[#DEDFD8] p-6 rounded-lg shadow-lg w-[90%] max-w-xl animate-fadeIn">
                <p className="text-gray-700 mb-4  text-justify font-Caveat">
                  {" "}
                  <Typewriter text={modalQuote} speed={40} />
                </p>
                {/* <p className="text-gray-700 mb-4 text-xl">"{modalQuote}"</p> */}
                <button
                  onClick={closeModal}
                  className="border-b border-[#282623] hover:scale-105 duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
