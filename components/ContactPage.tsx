"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
    <section className="w-full py-20 bg-background relative overflow-hidden border-t border-border/30" id="contact">
      
      
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

     
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center">
        
        <div className="mb-12 text-center px-4">
          <h1 className="heading font-serif text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl md:tracking-wider text-muted-foreground font-kaushan max-w-2xl mx-auto">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </div>

        <div className="w-full max-w-5xl backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-border bg-card/30">
          
          {/* Left Side: Information */}
<div className="w-full md:w-[42%] p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border flex flex-col justify-start bg-secondary/10">
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
                <label className="text-xs font-semibold text-muted-foreground uppercase ml-1 tracking-widest">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  placeholder="What would you like to discuss?"
                  className="w-full bg-secondary/20 border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group bg-primary rounded-2xl py-4 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50 hover:opacity-90"
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
                    className="text-emerald-400 text-sm text-center mt-4 font-medium"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Internal Components (Info & Input as provided) */
const Info = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-4 sm:gap-5 group">
    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0 border border-primary/20">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50 font-bold mb-1">
        {label}
      </p>
      <p className="text-foreground font-medium leading-relaxed whitespace-nowrap text-[min(3.2vw,16px)] sm:text-base">
        {value}
      </p>
    </div>
  </div>
);

const Input = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <label className="text-xs font-semibold text-muted-foreground uppercase ml-1 tracking-widest">{label}</label>
    <input
      {...props}
      className="w-full h-[54px] bg-secondary/20 border border-border rounded-2xl px-5 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
      required
    />
  </div>
);

export default ContactPage;