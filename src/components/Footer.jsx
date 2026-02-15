export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="inner container">
        <div className="footer-logo">
          <img
            src="./images/footer_logo.svg"
            alt="weaver loft logo"
            className="logo-white"
          />
        </div>
        <p className="copyright">Copyright © All Rights Reserved.</p>
        <div className="sns-links">
          <a href="#" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
