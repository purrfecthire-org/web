import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "./IconsSocials";

export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      {
        tittle: "About Purfect Hire",
        link: "#about-section",
      },
      {
        tittle: "Open roles",
        link: "#open-roles-section",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "For Companies", value: "sales@purrfecthire.com" },
    { label: "For Candidates", value: "hiring@purrfecthire.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    {
      link: "https://www.facebook.com/purrfecthirehr",
      svg: Facebook,
    },
    {
      link: "https://www.linkedin.com/company/purrfect-hire/mycompany/",
      svg: LinkedIn,
    },
    {
      link: "https://www.instagram.com/purrfecthirehr/",
      svg: Instagram,
    },
    {
      link: "https://twitter.com/purrfecthire",
      svg: Twitter,
    },
  ],
};