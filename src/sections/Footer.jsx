const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-stone-800 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/sanjidasarwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/sanjida-sarwar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjidasarwar16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/gmail.png"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2025 Sanjida Sarwar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
