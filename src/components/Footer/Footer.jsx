import styles from "./Footer.module.css";
import useTheme from "../../hooks/useTheme";

const Footer = () => {
  useTheme();
  const style = { background: "transparent", border: "none", borderRadius: 0 };
  return (
    <footer className={styles.footer} style={style}>
      <div className={styles.content}>
        <span>© 2025 Phonebook App</span>
        <span>Developed by Olena Chovhun</span>
      </div>
    </footer>
  );
};

export default Footer;
