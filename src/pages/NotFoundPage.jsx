import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useT } from "../i18n/useT";
import { useLang } from "../context/LangContext";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    document.title = `${t("not_found_title")} | Arredare Ambienti`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("not_found_subtitle"));
    // Prevent indexing of 404 page
    const noindex = document.createElement("meta");
    noindex.name = "robots";
    noindex.content = "noindex, nofollow";
    document.head.appendChild(noindex);
    return () => noindex.remove();
  }, [lang, t]);

  return (
    <>
      <a href="#main-content" className="skip-link">{t("back_to_home")}</a>
      <Navbar />
      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>{t("not_found_title")}</h1>
          <p className={styles.subtitle}>{t("not_found_subtitle")}</p>
          <Link to="/" className={styles.back}>{t("back_to_home")}</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
