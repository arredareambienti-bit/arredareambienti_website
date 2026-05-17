import { useT } from "../i18n/useT";
import Button from "./ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useT();

  return (
    <section className={styles.hero}>
      <div className={styles.right}>
        <img
          src="/assets/logo.jpeg"
          alt="Arredare Ambienti Logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.left}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{t("hero_eyebrow")}</span>
          <h1 className={styles.title}>
            {t("hero_title").replace(t("hero_title_em"), "").trimEnd()}{" "}
            <em>{t("hero_title_em")}</em>
          </h1>
          <p className={styles.subtitle}>{t("hero_subtitle")}</p>
          <div className={styles.ctas}>
            <Button variant="primary" size="lg" href="/#collezioni">
              {t("hero_cta1")}
            </Button>
            <Button variant="outlineLight" size="lg" href="/#contatti">
              {t("hero_cta2")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
