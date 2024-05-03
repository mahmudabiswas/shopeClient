import React from "react";
import FooterLeft from "./FooterLeft";
import FooterEnd from "./FooterEnd";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 my-20">
        <div>
          <FooterLeft />
        </div>

        <div>
          <FooterRight />
        </div>
        <div>
          <FooterEnd />
        </div>
      </div>
      <br />
      <hr className="border-b-4" />
      <p className="text-gray-400">
        Copyright © Aplee Shopify All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
