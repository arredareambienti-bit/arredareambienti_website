import { useState } from "react";
import { useT } from "../i18n/useT";
import Badge from "./ui/Badge";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import useInView from "../hooks/useInView";
import styles from "./Products.module.css";
import { useLang } from "../context/LangContext";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Divano Modena",
    category: "Soggiorno",
    badge: "sale",
    image: "https://picsum.photos/seed/sofa1mod/400/300",
  },
  {
    id: 2,
    name: "Letto Venezia",
    category: "Camera da Letto",
    badge: "new",
    image: "https://picsum.photos/seed/bed1ven/400/300",
  },
  {
    id: 3,
    name: "Libreria Milano",
    category: "Soggiorno",
    badge: null,
    image: "https://picsum.photos/seed/shelf1mi/400/300",
  },
  {
    id: 4,
    name: "Scrivania Torino",
    category: "Ufficio",
    badge: "sale",
    image: "https://picsum.photos/seed/desk1to/400/300",
  },
  {
    id: 5,
    name: "Armadio Firenze",
    category: "Camera da Letto",
    badge: "new",
    image: "https://picsum.photos/seed/wardrobe1fi/400/300",
  },
  {
    id: 6,
    name: "Tavolo Bologna",
    category: "Soggiorno",
    badge: null,
    image: "https://picsum.photos/seed/table1bo/400/300",
  },
];

const FILTER_KEYS = ["Tutti", "Soggiorno", "Camera da Letto", "Ufficio"];

export default function Products() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [ref, inView] = useInView();
  const t = useT();
  const { lang } = useLang();

  const filterLabels = t("products_filters");

  const L = (v) => v[lang] ?? v.it;
  const filtered =
    activeIdx === 0
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === FILTER_KEYS[activeIdx]);

  return (
    <section
      id="prodotti"
      className={[styles.section, inView && styles.visible]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            label={t("products_label")}
            title={t("products_title")}
            subtitle={t("products_subtitle")}
          />
          <div className={styles.filters}>
            {FILTER_KEYS.map((key, i) => (
              <button
                key={key}
                className={[
                  styles.filterBtn,
                  activeIdx === i && styles.filterActive,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActiveIdx(i)}
              >
                {filterLabels[i]}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
                {product.badge && (
                  <div className={styles.badgePos}>
                    <Badge variant={product.badge}>
                      {product.badge === "sale"
                        ? t("products_badge_sale")
                        : t("products_badge_new")}
                    </Badge>
                  </div>
                )}
                <div className={styles.actions}>
                  <Button variant="primary" size="sm">
                    {t("products_add")}
                  </Button>
                </div>
              </div>
              <div className={styles.body}>
                <span className={styles.category}>{L(product.category)}</span>
                <h3 className={styles.name}>{L(product.name)}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Button variant="outline" size="lg">
            {t("products_cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
