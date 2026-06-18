import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { useT } from "../i18n/useT";
import useInView from "../hooks/useInView";
import { CATEGORIES_DATA } from "../data/categories";
import styles from "./Categories.module.css";

export default function Categories() {
  const [ref, inView] = useInView();
  const { lang } = useLang();
  const t = useT();

  // Filter data to show only real categories in the grid and exclude catalog pages
  const realCategories = CATEGORIES_DATA.filter(
    (cat) => cat.slug && cat.heroImage,
  );

  return (
    <section
      id="collezioni"
      className={[styles.section, inView && styles.visible]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      <div className={styles.grid}>
        {realCategories.map((cat, i) => (
          <Link
            key={cat.id + "-" + cat.slug} // Combined unique key since IDs are identical
            to={`/categoria/${cat.slug}`}
            className={styles.card}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <img
              src={cat.heroImage}
              alt={cat.name[lang] ?? cat.name.it}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.overlay} />
            <div className={styles.inner}>
              <h3 className={styles.name}>{cat.name[lang] ?? cat.name.it}</h3>
              <span className={styles.link}>{t("cat_discover")}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
