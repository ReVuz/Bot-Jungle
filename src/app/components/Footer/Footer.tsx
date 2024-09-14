import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/ieee-cusat-sb/mycompany/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/ieeerascusat",
      icon: FaInstagram,
      label: "Instagram",
    },
  ];

  const creators = [
    {
      name: "Revathy M R",
      href: "https://www.linkedin.com/in/revathy-m-r-5a5225247/",
    },
    {
      name: "Harshed Abdulla",
      href: "https://www.linkedin.com/in/harshed-abdulla",
    },
  ];

  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <Link
            href="/"
            className="flex items-center hover:text-gray-300 transition-colors group"
          >
            <div className="relative w-16 h-16 mr-2 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="Bot Jungle Logo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold">Bot Jungle</span>
          </Link>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-center md:text-right">
              Bot Jungle © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm mb-2">Made by</p>
          <p className="text-sm flex flex-wrap justify-center gap-2">
            {creators.map((creator, index) => (
              <React.Fragment key={creator.name}>
                <a
                  href={creator.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300 transition-colors"
                >
                  {creator.name}
                </a>
                {index < creators.length - 1 && <span>&</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
