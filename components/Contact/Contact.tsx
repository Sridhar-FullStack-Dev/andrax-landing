"use client";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Grainient from "../Grainient";
import {
  IoMail,
  IoCall,
  IoLocation,
  IoLogoWhatsapp,
  IoSend,
} from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  useGSAP(
    () => {
      gsap.from(".contact-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".contact-form-field", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form-field",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".contact-info-item", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info-item",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: sectionRef },
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#143423"
          color2="#1a3a28"
          color3="#0d2818"
          timeSpeed={0.1}
          contrast={1.2}
          grainAmount={0.08}
          warpAmplitude={100}
          warpSpeed={0.5}
          saturation={0.8}
          zoom={1}
        />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="contact-heading mb-20">
          <span
            className={`text-secondary-accent text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
          >
            Get In Touch
          </span>
          <h2
            className={`text-off-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none mb-4 ${archivo.className}`}
          >
            Let&apos;s Grow
            <br />
            <span className="text-secondary-accent italic">Together</span>
          </h2>
          <p
            className={`text-off-white/50 text-base max-w-lg ${archivo.className}`}
          >
            Ready to source premium coir products, plants, or fresh produce?
            Drop us a message and our team will get back within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Form */}
          <div className="lg:w-3/5">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="contact-form-field">
                  <label
                    className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${jetbrainsMono.className}`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 placeholder:text-off-white/20 ${archivo.className}`}
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact-form-field">
                  <label
                    className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${jetbrainsMono.className}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 placeholder:text-off-white/20 ${archivo.className}`}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="contact-form-field">
                <label
                  className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${jetbrainsMono.className}`}
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formState.country}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 placeholder:text-off-white/20 ${archivo.className}`}
                  placeholder="United Arab Emirates"
                />
              </div>

              <div className="contact-form-field">
                <label
                  className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${jetbrainsMono.className}`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 resize-none placeholder:text-off-white/20 ${archivo.className}`}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className={`contact-form-field group flex items-center gap-3 px-8 py-4 bg-secondary-accent text-primary-main uppercase text-sm font-bold tracking-widest cursor-pointer transition-all duration-500 hover:bg-accent-main mt-4 ${archivo.className}`}
              >
                Send Message
                <IoSend className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-2/5 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="contact-info-item flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary-accent/10 border border-secondary-accent/30 flex items-center justify-center shrink-0">
                  <IoMail className="w-5 h-5 text-secondary-accent" />
                </div>
                <div>
                  <h4
                    className={`text-off-white text-sm font-bold uppercase mb-1 ${archivo.className}`}
                  >
                    Email
                  </h4>
                  <p
                    className={`text-off-white/50 text-sm ${archivo.className}`}
                  >
                    info@andraxexportspvtltd.com
                  </p>
                  <p
                    className={`text-off-white/50 text-sm ${archivo.className}`}
                  >
                    sales@andraxexportspvtltd.com
                  </p>
                </div>
              </div>

              <div className="contact-info-item flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary-accent/10 border border-secondary-accent/30 flex items-center justify-center shrink-0">
                  <IoCall className="w-5 h-5 text-secondary-accent" />
                </div>
                <div>
                  <h4
                    className={`text-off-white text-sm font-bold uppercase mb-1 ${archivo.className}`}
                  >
                    Phone
                  </h4>
                  <p
                    className={`text-off-white/50 text-sm ${archivo.className}`}
                  >
                    +91 98765 43210
                  </p>
                  <p
                    className={`text-off-white/50 text-sm ${archivo.className}`}
                  >
                    +91 87654 32109
                  </p>
                </div>
              </div>

              <div className="contact-info-item flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary-accent/10 border border-secondary-accent/30 flex items-center justify-center shrink-0">
                  <IoLocation className="w-5 h-5 text-secondary-accent" />
                </div>
                <div>
                  <h4
                    className={`text-off-white text-sm font-bold uppercase mb-1 ${archivo.className}`}
                  >
                    Office
                  </h4>
                  <p
                    className={`text-off-white/50 text-sm leading-relaxed ${archivo.className}`}
                  >
                    Andrax Exports Pvt Ltd
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="contact-info-item flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary-accent/10 border border-secondary-accent/30 flex items-center justify-center shrink-0">
                  <IoLogoWhatsapp className="w-5 h-5 text-secondary-accent" />
                </div>
                <div>
                  <h4
                    className={`text-off-white text-sm font-bold uppercase mb-1 ${archivo.className}`}
                  >
                    WhatsApp
                  </h4>
                  <p
                    className={`text-off-white/50 text-sm ${archivo.className}`}
                  >
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
