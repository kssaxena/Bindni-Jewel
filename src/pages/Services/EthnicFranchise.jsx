import React, { useState } from "react";
import Button from "../../components/Button";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const EthnicFranchise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    businessModel: "",
    investmentRange: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.SERVICE_ID, // e.g. service_xxx123
        process.env.TEMPLATE_ID, // e.g. template_franchise
        formData, // your form values
        process.env.PUBLIC_ID // e.g. PUZxxxx_PUBLIC
      )
      .then((result) => {
        alert("Thank you! We'll get back to you shortly.");
        setIsOpen(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          businessModel: "",
          investmentRange: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="py-10">
      <h1 className="lg:text-5xl text-2xl cinzel-font w-full text-center underline underline-offset-4 ">
        Franchise for Ethnic Wears{" "}
      </h1>
      <div className="flex justify-evenly items-center flex-col lg:flex-row">
        <div className="terms_and_conditions  max-w-3xl w-full p-6 md:p-10 overflow-y-auto">
          <h2 className="lg:text-2xl md:text-3xl lg:mb-6 text-gray-800">
            <TextGenerateEffect
              words={"Terms & Conditions"}
              className="fredoka-font text-justify w-3/4"
            />
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed ">
            Please read the following terms and conditions carefully before
            entering into any business, transaction, or engagement with our
            company. These conditions are designed to protect both parties and
            ensure a transparent and smooth working relationship. By proceeding,
            you agree to abide by all clauses mentioned below, and acknowledge
            that these terms may be updated periodically.
          </p>
          <button
            className=" underline mb-4"
            onClick={() => setShowTerms((prev) => !prev)}
            aria-expanded={showTerms}
          >
            {showTerms ? "Read Less" : "Read More"}
          </button>
          <AnimatePresence>
            <motion.ul
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`list-disc pl-6 space-y-4 text-gray-700 text-sm md:text-base overflow-y-auto pr-2 transition-all duration-300 ${
                showTerms ? "block" : "hidden"
              }`}
            >
              <li>
                All customers must provide valid identification if requested.
              </li>
              <li>
                The product once sold can only be exchanged within 7 working
                days with a receipt.
              </li>
              <li>
                Refunds are not applicable on discounted or promotional items.
              </li>
              <li>
                All deposits are non-refundable and must be used within the
                agreed timeline.
              </li>
              <li>
                Inventory will be provided as per the agreement signed at the
                time of onboarding.
              </li>
              <li>
                Any damage during transit must be reported within 24 hours.
              </li>
              <li>
                The company reserves the right to update the terms without prior
                notice.
              </li>
              <li>All disputes are subject to Jaipur jurisdiction.</li>
              <li>
                Parties must maintain confidentiality of pricing and commercial
                terms.
              </li>
              <li>
                Any misuse of branding or material may lead to termination of
                agreement.
              </li>
            </motion.ul>
          </AnimatePresence>
        </div>
        <div className="flex lg:flex-col flex-col-reverse items-center justify-center gap-10 border-b lg:border-0">
          <div className="flex flex-row">
            <motion.video
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="lg:w-60 w-40 lg:translate-x-1/2 mt-20 lg:mr-20 rounded-full border-8 border-[#D6D7C2] object-cover"
              src="https://ik.imagekit.io/pz8qfunss/Home/Untitled%20design%20(6).mp4?updatedAt=1751396796780"
              autoPlay
              loop
              muted
              playsInline
            />
            <img
              className="lg:w-60 w-40 object-cover mb-20  rounded-full border-8 border-[#D6D7C2]"
              src={`https://ik.imagekit.io/pz8qfunss/Products/lahanga/_%20(2).jpeg?updatedAt=1751705822261`}
            />
          </div>
          <div className="flex justify-center items-center w-full gap-2">
            <a
              href="tel:+919931430899"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoCall className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>

            <a
              href="https://wa.me/917489535194"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>
            <a
              href="https://maps.app.goo.gl/CZJRh2oK7hAxGvdj7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>
            <a
              href="https://www.instagram.com/bindinijewel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>

            <a
              href="mailto:bindnijewel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>
          </div>
          <Button
            Label="Ethnic Wear Franchise"
            onClick={() => setIsOpen(true)}
            className={"text-base lg:text-2xl"}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#D6D7C2] z-50"
          >
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/4 flex flex-col gap-2"
            >
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700">City / Location</label>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700">Interested Model</label>
                <select
                  name="businessModel"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="Kiosk">Kiosk</option>
                  <option value="Retail Store Jewel or Ethnic">
                    Retail Store Jewel or Ethnic
                  </option>
                  <option value="Retail Store - Jewelry + Ethnic Wear">
                    Retail Store – Jewelry + Ethnic Wear
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">
                  Investment Range (in ₹)
                </label>
                <select
                  name="investmentRange"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="3-5 Lakh">₹3–5 Lakh</option>
                  <option value="5–9 Lakh">₹5–9 Lakh</option>
                  <option value="9–12 Lakh">₹9–12 Lakh</option>
                  <option value="Above 12 Lakh">Above ₹12 Lakh</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows="4"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                ></textarea>
              </div>

              <div className="text-center flex justify-around items-center ">
                <Button Label="Cancel" onClick={() => setIsOpen(false)} />
                <Button type="submit" Label="Submit" />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EthnicFranchise;
