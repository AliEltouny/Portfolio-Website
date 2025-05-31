import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Visit my blog</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={socialImg.imgPath}
                  alt="social icon"
                  style={socialImg.style} // Apply dynamic styles for resizing
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ali Eltouny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;