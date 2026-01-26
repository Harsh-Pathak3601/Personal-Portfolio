"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-10 relative overflow-hidden" id="contact">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" />

      <div className="mb-12 text-center px-4">
        <h1 className="heading text-white">
          Let's <span className="text-purple">Connect</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl md:tracking-wider text-white font-kaushan max-w-2xl mx-auto">
          Open to opportunities, collaborations, and meaningful conversations.
        </p>
      </div>

      <div className="w-full max-w-5xl backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-10 border border-white/10 bg-white/[0.02]">
        
        {/* Left Side: Information */}
        <div className="w-full md:w-[42%] p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col ">
          <div className="space-y-8 sm:space-y-10">
            <Info icon={<Mail size={22} />} label="Email" value="pathakharsh3601@gmail.com" />
            <Info icon={<MapPin size={22} />} label="Location" value="Mumbai, India" />
            <Info icon={<Phone size={22} />} label="Phone" value="+91 9867023601" />
          </div>
        </div>
        {/* Right Side: Form */}
        <div className="w-full md:w-[58%] p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
            <Input label="Email Address" name="email" type="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} />
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/30 uppercase ml-1 tracking-widest">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                placeholder="What would you like to discuss?"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full group bg-purple-700 rounded-2xl py-4 font-bold text-white shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="tracking-wider">{loading ? "Sending..." : "Send Message"}</span>
                {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </div>
            </button>

            <AnimatePresence>
              {success && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 text-sm text-center mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

/*Components */

const Info = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-4 sm:gap-5 group">
    <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all shrink-0 border border-purple-500/20">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">
        {label}
      </p>
      <p className="text-white/80 font-medium leading-relaxed whitespace-nowrap text-[min(3.2vw,16px)] sm:text-base">
        {value}
      </p>
    </div>
  </div>
);

const Input = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <label className="text-xs font-semibold text-white/30 uppercase ml-1 tracking-widest">{label}</label>
    <input
      {...props}
      className="w-full h-[54px] bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
      required
    />
  </div>
);

export default ContactPage;