import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import bmcLogo from "../images/BMC Logo rr.png";

const Storefront = () => {
  const phoneNumber = "2347035772756";
  const message = "Hello, I'm interested in your products.";
  const links = [
    {
      name: "Send us a mail",
      link: "mailto:bmcmaxroyal@gmail.com?subject=Interested in Learning More About Your Products",
    },
    {
      name: "Latest Post",
      link: "https://www.instagram.com/bmc_royal/",
    },
    {
      name: "Call us",
      link: `tel:${phoneNumber}`,
    },
    {
      name: "whatsApp",
      link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    },
  ];

  const socialIcons = [
    {
      icon: <BsInstagram className="font-[600] text-[25px]" />,
      link: "https://www.instagram.com/bmc_royal/"
    },
    {
      icon: <RiFacebookCircleLine className="font-[600] text-[25px]" />,
      link: "https://web.facebook.com/profile.php?id=100076534171824"
    },
    {
      icon: <CiMail className="font-[800] text-[25px]" />,
      link: "mailto:bmcmaxroyal@gmail.com?subject=Interested in Learning More About Your Products"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#021589] to-[#E63342] text-white p-6">
      <div className="text-center p-4 bg-[#021589] rounded-full">
        <img
          src={bmcLogo}
          alt="Profile"
          className="w-36 h-32 mb-4"
        />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold fira-sans-thin">BMC & Max Royal</h1>
        <p className="text-sm text-gray-200 mt-[-4px] work-sans font-[600]">Simply excellent</p>
        <p className="m-auto md:w-[60%] text-[17px] pt-6 work-sans font-[500]">
          BMC & MAX ROYAL NIG is a 21st century cutting edge
          garment company in Aba, Abia state, Nigeria.
          We Produce premium cotton boxers,white & colour
          Handkerchief & Tshirt.
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-md gap-4">
        {links.map((link, index) => (
          <a
            href={link.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="w-full work-sans text-center py-3 px-4 rounded-full bg-white text-[#021589] font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex justify-center gap-4 items-center mt-6">
        {socialIcons.map((icon, index) => (
          <a href={icon.link} target="_blank" rel="noreferrer" key={index}>{icon.icon}</a>
        ))}
      </div>
    </div>
  )
};

export default Storefront;