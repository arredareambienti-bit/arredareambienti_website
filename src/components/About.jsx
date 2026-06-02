import { useT } from "../i18n/useT";
import SectionHeader from "./ui/SectionHeader";
import useInView from "../hooks/useInView";
import styles from "./About.module.css";

export default function About() {
  const [ref, inView] = useInView();
  const t = useT();
  const stats = t("about_stats");

  return (
    <section
      id="chi-siamo"
      className={[styles.section, inView && styles.visible]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              {/* TODO: sostituire con foto reale del laboratorio/artigiani quando disponibile */}
              <img
                src="/assets/kitchen/kitchen_009.jpg"
                alt={t("about_image_alt")}
                className={styles.image}
                loading="lazy"
                width="600"
                height="750"
              />
            </div>
            <div className={styles.imageAccent} />
          </div>

          <div className={styles.content}>
            <SectionHeader
              title={t("about_title")}
              subtitle={t("about_subtitle")}
            />

            <p className={styles.body}>{t("about_body")}</p>

            {stats.length > 0 && (
              <div className={styles.stats}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
