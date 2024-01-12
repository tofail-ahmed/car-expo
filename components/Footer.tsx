import Image from "next/image";
import React from "react";
import { footerLinks } from "../constants/index";
import Link from "next/link";
const Footer = () => {
  // console.log(footerLinks);
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-200 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-a6 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 mx-auto lg:mx-16 bg-blue-400 p-12 rounded-[100%] my-auto">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links mx-auto ">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold"> {link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
        <div className="flex flex-col sm:flex-row 
         justify-between items-center sm:mx-16 mx-4 ">
          <p>@2024 Car Expo All Rights Reserved</p>
          <div className="flex justify-between items-center gap-6">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
