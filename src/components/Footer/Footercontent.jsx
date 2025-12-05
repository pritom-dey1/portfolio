import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Footercontent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      toast.success("Message sent successfully! 🎉");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-[70%] w-full max-w-3xl md:max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 pointer-events-auto"
        >
          <div className="flex px-20 md:px-0 flex-col md:flex-row md:items-start items-center justify-between gap-4 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold">Contact me</h3>
              <p className="text-sm text-gray-200 mt-1">
                Send a message and I will reply as soon as I can.
              </p>
            </div>

            <div className="flex gap-3 text-xl mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/pritom.dey.522183/"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=8801873104672&text=hi+There..&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/pritom-dey1"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/pritom-dey1"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
            <div className="grid gap-1">
              <label className="text-xs font-medium text-gray-200">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-white"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs font-medium text-gray-200">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-white"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs font-medium text-gray-200">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-white"
              />
            </div>

            <div className="flex items-center justify-center gap-3 w-full">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 text-white text-sm font-medium hover:brightness-105 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
