import "../styles/contact.css";

import gitLogo from "../assets/git.png";
import link from "../assets/link.png";
import insta from "../assets/insta.svg";
import ContactButton from "./contatNav";

const ContactBox = () => {
    return(

        <div className="contactBox">
            <h2>Contact</h2>

            <div className="contactRow">

                <a href="https://www.linkedin.com/in/jaq-nguyen/" target="_blank" rel="noopener noreferrer">
                    <img src={link} alt="LinkedIn Logo" aria-label="LinkedIn Icon Link"/>
                </a>

                <a href="https://github.com/janhqnguyen2020" target="_blank" rel="noopener noreferrer">
                    <img src={gitLogo} alt="GitHub Logo" aria-label="Git Icon Link"/>
                </a>

                <a href="https://www.instagram.com/thunder_joseph/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram Logo" aria-label="Instagram Icon Link"/>
                </a>
            </div>

            <div className="ContactRow">
                <ContactButton />
            </div>
            
        </div>
    );
};

export default ContactBox;