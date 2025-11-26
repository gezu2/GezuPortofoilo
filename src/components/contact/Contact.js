import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bye5lwb",
        "template_v337ut4",
        form.current,
        "RiGKH4ApSgYbiYMpp"
      )
      .then(
        () => {
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => console.log(error.text)
      );
  };

  return (
    <section className=" pt-20 min-h-screen bg-gray-100 flex items-center justify-center p-6 ">
      <div className="container max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden md:flex">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
          {isSubmitted ? (
            <motion.div
              className="text-green-600 font-semibold text-lg"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}>
              Thank you! Your message has been sent.
            </motion.div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-blue-200 transition-all"
                  placeholder="Your Message"
                  rows="4"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-500  text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.42935404268!2d38.75800915000001!3d9.03603905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f6076be16e3%3A0x764e98211eee8ae7!2sArada%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1760802997975!5m2!1sen!2set"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
