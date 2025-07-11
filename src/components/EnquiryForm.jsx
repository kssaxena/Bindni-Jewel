import React, { useState } from "react";
import Button from "./Button";

export default function EnquiryForm() {
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
    <div className="max-w-2xl mx-auto bg-white/90 shadow-xl rounded-2xl p-8 mt-10">
      <h2 className="text-2xl mb-6 text-center text-gray-800">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2 w-full">
          <div className="lg:w-1/2 w-full">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2 w-full">
          <div className="lg:w-1/2 w-full">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <label className="block text-gray-700">City / Location</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2 w-full">
          <div className="lg:w-1/2 w-full">
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

          <div className="lg:w-1/2 w-full">
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

        <div className="text-center">
          <Button type="submit" Label="Submit" />
        </div>
      </form>
    </div>
  );
}
