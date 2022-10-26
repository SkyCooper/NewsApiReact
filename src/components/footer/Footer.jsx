import FooterStyle from "./footer.module.css";
function Footer() {
  return (
    <div className={FooterStyle.footer}>
      <p className={FooterStyle.text}> @Copyright by Cooper, {new Date().getFullYear()} - ISTANBUL</p>
    </div>
  );
}

export default Footer;
