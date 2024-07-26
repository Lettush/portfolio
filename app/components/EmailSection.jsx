import React from "react";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="bg-[#000000] grid md:grid-cols-2 my-12 md:my-12 p-12 gap-8 rounded-lg">
      <div className="mb-5 md:mb-0">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          If you're looking to hire someone who excels in communication and
          project coordination, or if you simply want to connect, please don't
          hesitate to reach out to me. I would love to discuss how I can
          contribute to your team's success!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Lettush" target="_blank">
            <Image src={GitHubIcon} alt="GitHub Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jared-neil-hortaleza-001795187/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>

      <hr className="mb-5 md:hidden md:mb-0 bg-gradient-to-r from-black via-white to-black h-0.5 border-0" />

      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white mb-2 block text-sm font-medium"
            >
              Your email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#2c2c2c] border border-[#505362] placeholder-[#8f949a] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="jared@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-[#2c2c2c] border border-[#505362] placeholder-[#8f949a] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Hello!"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={15}
              className="bg-[#2c2c2c] border border-[#505362] placeholder-[#8f949a] text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none"
              placeholder="Let's talk!"
            ></textarea>
          </div>
          <button
            type="submit"
            className="transition-all ease delay-50 bg-green-600 hover:bg-green-200 text-white hover:text-black font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
