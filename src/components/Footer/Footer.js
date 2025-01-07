import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // For social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Contact No.</h3>
            <p className="mt-2 text-lg">+91 7739002652</p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold">Our Locations</h3>
            <ul className="mt-2 space-y-2">
              <li>Law Gate</li>
              <li>Phagwara</li>
              <li>Rama Mandi</li>
              <li>Maheru</li>
              <li>Hradaspur</li>
              <li>LPU Hostels</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mt-2 mb-4 flex justify-center space-x-6 text-xl font-semibold">
              Visit Social Links
            </h3>
            <div className="mt-2 flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-400 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Made by */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Made with <span className="text-pink-500">❤️</span> by{" "}
            <span className="font-semibold">MSD</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
