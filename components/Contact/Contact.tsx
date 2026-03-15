"use client";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Grainient from "../Grainient";
import { Button } from "../ui/button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(row1Ref.current, {
      xPercent: -50,
      ease: "none",
      duration: 140,
      repeat: -1,
    });

    gsap.fromTo(
      row2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        ease: "none",
        duration: 140,
        repeat: -1,
      },
    );
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative overflow-hidden h-250">
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

      <div className="relative z-10 flex justify-between items-center h-full gap-8">
        <div className="w-[60%] space-y-20 px-8">
          <div>
            <span
              className={`text-secondary-accent text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
            >
              Let's Book
            </span>
            <h2
              className={`text-off-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none mb-4 ${archivo.className}`}
            >
              your first
              <br />
              <span className="text-secondary-accent italic">Order</span>
            </h2>
            <p
              className={`text-off-white/50 text-base max-w-lg ${archivo.className}`}
            >
              Ready to source premium coir products, plants, or fresh produce?
              Drop us a message and our team will get back within 24 hours.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
            autoComplete="off"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${archivo.className}`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  autoComplete="off"
                  className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 placeholder:text-off-white/20 ${archivo.className}`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${archivo.className}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 placeholder:text-off-white/20 ${archivo.className}`}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label
                className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${archivo.className}`}
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formState.country}
                onChange={handleChange}
                autoComplete="off"
                className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 placeholder:text-off-white/20 ${archivo.className}`}
                placeholder="United Arab Emirates"
              />
            </div>

            <div className="flex justify-between gap-8">
              <div className="w-[80%]">
                <label
                  className={`text-off-white/50 text-xs uppercase tracking-widest mb-2 block ${archivo.className}`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  autoComplete="off"
                  className={`w-full bg-transparent border-b-2 border-off-white/20 text-off-white py-3 text-base focus:border-secondary-accent focus:outline-none transition-colors duration-300 resize-none placeholder:text-off-white/20 ${archivo.className}`}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button
                type="submit"
                className={`flex items-center gap-3 px-8 h-35 bg-secondary-accent text-primary-main uppercase text-base font-bold tracking-widest cursor-pointer transition-all duration-500 hover:bg-accent-main ${archivo.className} w-[20%]`}
              >
                Send Message <br /> to us
              </Button>
            </div>
          </form>
        </div>

        <div className="w-[40%] flex justify-center items-start h-full overflow-hidden relative">
          <video width="100%" height="100%" autoPlay loop muted preload="none">
            <source
              src="https://www.pexels.com/download/video/19027385/"
              type="video/mp4"
            />
          </video>

          <div className="bg-linear-150 from-primary-main/50 to-primary-main/20 absolute inset-0 z-20" />

          <div className="absolute bottom-0 left-0 flex w-max" ref={row1Ref}>
            {Array.from({ length: 40 }).map((_, index) => (
              <div
                key={index}
                className="size-20 shrink-0 bg-transparent backdrop-blur-lg p-6 border-r border-t border-white/5"
              />
            ))}
          </div>
          <div className="absolute bottom-20 left-0 flex w-max" ref={row2Ref}>
            {Array.from({ length: 40 }).map((_, index) => (
              <div
                key={index}
                className="size-20 shrink-0 bg-transparent backdrop-blur-lg p-6 border-r border-t border-white/5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
