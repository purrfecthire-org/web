import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "./Footer.config";

const Footer = () => {
  return (
    <footer className="flexCenter mb-14 mt-2">
      <div className="padding-container max-container flex flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/#main-content">
            <Image
              src="/logo-desktop.png"
              width={170}
              height={45}
              alt="Picture of the author"
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn
                key={`${index}-${columns.title}`}
                title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      className="poppins font-medium"
                      href={link.link}
                      key={link.tittle}>
                      {link.tittle}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <>
                    <Link
                      href={`mailto:${link.value}`}
                      key={`${link.label}-${index}`}
                      className="flex gap-4 flex-col lg:flex-row">
                      <span className="poppins font-bold whitespace-nowrap">
                        {link.label}:
                      </span>
                      <span className="poppins font-medium medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </span>
                    </Link>
                  </>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, index) => (
                    <Link
                      href={link.link}
                      key={`${link.link}-${index}`}>
                      <link.svg />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div key={title} className="flex flex-col gap-5">
      <h4 className="poppins font-bold text-lg text-indigo-950 whitespace-nowrap">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default Footer;
