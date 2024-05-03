import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaPinterestP,
} from "react-icons/fa6";

const FooterRight = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-2xl font-bold">
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Blog</td>
              <td className="flex items-center">
                <FaFacebook />
                <p
                  className="ml-2
                "
                >
                  facebook
                </p>
              </td>
            </tr>

            <tr>
              <td>Jobs</td>
              <td className="flex items-center">
                <FaInstagram />
                <p
                  className="ml-2
                "
                >
                  instagram
                </p>
              </td>
            </tr>

            <tr>
              <td>Faq</td>
              <td className="flex items-center">
                <FaLinkedin />
                <p
                  className="ml-2
                "
                >
                  linkedin
                </p>
              </td>
            </tr>
            <tr>
              <td>Privacy Policy</td>
              <td className="flex items-center">
                <FaPinterestP />
                <p
                  className="ml-2
                "
                >
                  pinterest
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FooterRight;
