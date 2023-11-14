import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fd9d3e] text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0 text-center justify-cente">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
          </div>

          <div className="flex gap-[50px] md:gap-[75px] text-center justify-center lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-black cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-black cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-black cursor-pointer">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About Pizza™
              </div>
              <div className="text-sm text-white/[0.5] hover:text-black cursor-pointer">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-black cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-black cursor-pointer">
                Investitors
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-black/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://twitter.com"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-black/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-black/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-black/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-black cursor-pointer text-center md:text-left">
          © 2023 Pizza™, Inc. All Rights Reserved
        </div>

        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-black cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-black cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-black cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-black cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
