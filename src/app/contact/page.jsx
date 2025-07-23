"use client";

import { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Heart,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowThankYou(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    // Make this container relative and add overflow-hidden
    <div className="relative w-full min-h-screen px-4 pt-32 pb-16 overflow-x-hidden bg-white/30">



      {/* Background layers with negative z-index to be behind */}
<div
  className="fixed inset-0 bg-center bg-no-repeat bg-cover -z-20"
  style={{
    backgroundImage: `url('/contactimg.png')`,
  }}
/>

<div className="fixed inset-0 backdrop-blur-sm bg-white/30 -z-10" />


      {/* Page content */}
<div className="mb-12 text-center">
  <h2 className="text-4xl font-bold text-pink-800">Contact Us</h2>
  <p className="mt-4 text-lg font-semibold leading-relaxed text-black">
    Have questions or special floral requests? Whether you're planning a dream wedding, surprising a loved one, or just need help picking the perfect bouquet — we’re always ready to assist you with care and creativity. <br />
    Reach out today and let Bloom Haven turn your thoughts into beautiful, fragrant moments.
  </p>
</div>




      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-8 transition-all duration-300 transform border border-pink-100 shadow-lg group bg-gradient-to-br from-white to-pink-50/30 hover:shadow-2xl rounded-2xl hover:scale-105 hover:border-pink-200">
          <div className="flex items-center justify-center mb-4 transition-shadow duration-300 rounded-full shadow-md w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 group-hover:shadow-lg">
            <MapPin className="text-white" size={24} />
          </div>
          <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-700">
            Address
          </h4>
          <p className="font-semibold leading-relaxed text-gray-800">
            No 12, Flower Lane, Colombo 03
          </p>
        </div>

        <div className="p-8 transition-all duration-300 transform border border-pink-100 shadow-lg group bg-gradient-to-br from-white to-pink-50/30 hover:shadow-2xl rounded-2xl hover:scale-105 hover:border-pink-200">
          <div className="flex items-center justify-center mb-4 transition-shadow duration-300 rounded-full shadow-md w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 group-hover:shadow-lg">
            <Phone className="text-white" size={24} />
          </div>
          <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-700">
            Phone
          </h4>
          <p className="font-semibold leading-relaxed text-gray-800">
            +94 77 123 4567
          </p>
        </div>

        <div className="p-8 transition-all duration-300 transform border border-pink-100 shadow-lg group bg-gradient-to-br from-white to-pink-50/30 hover:shadow-2xl rounded-2xl hover:scale-105 hover:border-pink-200">
          <div className="flex items-center justify-center mb-4 transition-shadow duration-300 rounded-full shadow-md w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 group-hover:shadow-lg">
            <Mail className="text-white" size={24} />
          </div>
          <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-700">
            Email
          </h4>
          <p className="font-semibold leading-relaxed text-gray-800">
            info@bloomhaven.lk
          </p>
        </div>

        <div className="p-8 transition-all duration-300 transform border border-pink-100 shadow-lg group bg-gradient-to-br from-white to-pink-50/30 hover:shadow-2xl rounded-2xl hover:scale-105 hover:border-pink-200">
          <div className="flex items-center justify-center mb-4 transition-shadow duration-300 rounded-full shadow-md w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 group-hover:shadow-lg">
            <Clock className="text-white" size={24} />
          </div>
          <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-700">
            Hours
          </h4>
          <p className="font-semibold leading-relaxed text-gray-800">
            Mon - Fri: 9:00am - 6:00pm
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="overflow-hidden border shadow-2xl bg-white/95 backdrop-blur-md rounded-3xl border-white/20">
          <div className="p-8 text-center bg-gradient-to-r from-pink-600 to-pink-700">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/20">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-3xl font-bold text-white">Send Us a Message</h3>
            <p className="text-pink-100">Let's create something beautiful together</p>
          </div>

          <div className="p-10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 font-medium placeholder-gray-500 transition-all duration-300 border-2 border-pink-100 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 bg-white/70 backdrop-blur-sm"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 font-medium placeholder-gray-500 transition-all duration-300 border-2 border-pink-100 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 bg-white/70 backdrop-blur-sm"
                  />
                </div>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your special event..."
                  rows="6"
                  className="w-full px-6 py-4 font-medium placeholder-gray-500 transition-all duration-300 border-2 border-pink-100 resize-none rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 bg-white/70 backdrop-blur-sm"
                />
              </div>
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl hover:from-pink-700 hover:to-pink-800 hover:scale-105 hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </button>
              </div>
            </div>

            {showThankYou && (
              <div className="p-6 mt-6 text-green-800 border-2 border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  <span className="text-lg font-semibold">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="mb-4 text-2xl font-bold text-pink-800">
          Let’s Make Your Event Unforgettable
        </h3>
        <p className="mb-6 text-gray-600">
          Reach out today to start planning your perfect celebration.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 text-white transition bg-pink-600 rounded-md hover:bg-pink-700"
        >
          Get Started
        </a>
      </div>

      {/* Location Map */}
      <div className="mt-16">
        <h3 className="mb-4 text-2xl font-bold text-center text-pink-800">
          Visit Our Location
        </h3>
        <div className="w-full overflow-hidden border border-pink-100 shadow-lg h-96 rounded-xl">
          <iframe
            title="Bloom Haven Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63319.7186612476!2d79.8150052!3d6.9270787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25929365d6f2d%3A0x3a8cb27cd0b14e8e!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1692345835229!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
