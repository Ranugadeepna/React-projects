import "./FooterStyles.css";

import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:
                        "#fff",marginRight:"2rem" }} />
                        <div>
                            <p>19/c Wadigodawaththa,Udalamaththa</p>
                            <p>Galle Srilanka</p>
                        </div>
                </div>
                <div className="Phone">
                <h4><FaPhone size={20} style={{ color:
                        "#fff",marginRight:"2rem" }} />
                        076 - 9841358 </h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{ color:
                        "#fff",marginRight:"2rem" }} />
                        ranugadeepna2002@gmail.com </h4>
                </div>
            </div>
            <div className="right">
                <h4>About The Company</h4>
                <p>yai yai bla bla bla bla bla abala
                    ksfklsjfnlsnflnfsknskfnsf
                    sfjkldfhdjsghjvjnjcasnchnnknvnvkvnkdvn
                    jhkashfkfhsakhfakfhsakfshkafsh
                </p>
                <div className="social">
                <FaFacebook size={30} style={{ color:
                        "#fff",marginRight:"1rem" }} />
                <FaTwitter size={20} style={{ color:
                        "#fff",marginRight:"2rem" }} />
                <FaLinkedin size={20} style={{ color:
                        "#fff",marginRight:"2rem" }} />
                

                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer