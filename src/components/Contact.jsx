import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { portfolioData } from "../data";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Correct code without quotes
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section
      id="contact"
      className=" bg-gray-900 text-white p-6 relative bg-contain bg-center"
      style={{ backgroundImage: `url(${portfolioData.contactImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/80"></div>
      <div className="relative container mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-slate-300 text-lg mb-8">
            Have a project in mind or just want to say hello? Feel free to send
            me a message.
          </p>
        </div>
        <div className="lg:w-[52%]">
          <div className="bg-black/40 backdrop-blur-lg p-6 rounded-lg  mb-8 pl-4">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-lg font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-lg font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                ></textarea>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30"
                >
                  Send Message
                </button>
              </div>
            </form>
            {status && (
              <p
                className={`mt-6 ${
                  status.includes("Failed") ? "text-red-400" : "text-green-400"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
