import React from "react";
import { motion } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import EnquiryForm from "../../components/EnquiryForm";

const ContactUs = () => {
  const cardData = [
    {
      id: 1,
      icon: <IoLocationSharp />,
      label: "Reach Us",
      description: (
        <h1>
          A18 R V Tower, Nitya nand Marg, <br /> Vaishali Nagar, Jaipur date 27
          / 6
        </h1>
      ),
      link: "https://maps.app.goo.gl/CZJRh2oK7hAxGvdj7",
      link_name: "Location",
      iconClassname: "text-rose-700",
    },
    {
      id: 2,
      icon: <IoMdCall />,
      label: "Contact Us",
      description: (
        <h1>
          Have questions about our products <br /> or want help placing an
          order?
        </h1>
      ),
      link: "tel:+919931430899",
      link_name: "Call",
      iconClassname: "text-blue-700",
    },
    {
      id: 3,
      icon: <SiGmail />,
      label: "Write Us",
      description: (
        <h1>
          For business queries, <br /> order updates, or feedback,
        </h1>
      ),
      link: "mailto:bindnijewel@gmail.com",
      link_name: "Mail",
      iconClassname: "text-red-700",
    },
  ];
  const ContactCards = ({
    id,
    icon,
    label,
    link,
    link_name,
    description,
    iconClassname,
  }) => {
    return (
      <div
        key={id}
        className="flex lg:justify-center justify-evenly items-center lg:flex-col flex-row bg-white lg:w-96 w-full lg:gap-10 gap-5 p-5 shadow-2xl lg:h-96"
      >
        <h1 className={`text-5xl ${iconClassname}`}>{icon}</h1>
        <h1 className="text-4xl cinzel-font font-medium hidden lg:flex">
          {" "}
          {label}{" "}
        </h1>
        <p className="hidden lg:flex w-full text-center justify-center items-center">
          {description}
        </p>
        <a
          target="_blank"
          href={link}
          className="border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 "
        >
          {link_name}
        </a>
      </div>
    );
  };
  return (
    <div>
      <div className="flex lg:h-fit relative">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="lg:h-[90vh] w-full overflow-hidden object-cover object-center flex justify-center items-center "
        >
          <img
            className="h-[50vh] lg:h-full w-full object-cover object-center"
            src={
              "https://ik.imagekit.io/pz8qfunss/Home/generate%20an%20image%20,which%20should%20include%20indian%20handbags,%20handicrafts,%20blankets%20all%20in%20one.jpg?updatedAt=1751958776805"
            }
          />
        </motion.div>
        <div className="absolute w-full h-full top-0 left-0 py-auto">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className=" h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/60 text-[#DEDFD8] cinzel-font tracking-widest flex-col lg:gap-20"
          >
            <span className="text-3xl flex flex-col lg:flex-row justify-center items-center gap-5">
              Bindni{" "}
              <span className="text-lg">A house of bridal collections</span>
            </span>
            <span className="lg:text-7xl text-3xl">Contact Us</span>
          </motion.h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 py-10">
        {cardData.map((item) => (
          <ContactCards
            key={item.id}
            id={item.id}
            icon={item.icon}
            label={item.label}
            link={item.link}
            link_name={item.link_name}
            description={item.description}
            iconClassname={item.iconClassname}
          />
        ))}
      </div>
      <div className="w-full lg:py-10 pb-5">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default ContactUs;
