import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductModal from "../components/ProductModal";
import ScrollToTop from "../components/ScrollToTop";
import { useLang } from "../context/LangContext";
import { CATEGORIES_DATA } from "../data/categories";
import { useT } from "../i18n/useT";
import styles from "./CategoryPage.module.css";

const INFO_ICONS = {
  clock: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z" />
      <circle cx="12" cy="10" r="2.5" fill="white" />
    </svg>
  ),
  phone: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  mail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  ),
};

export default function CategoryPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const category = CATEGORIES_DATA.find((c) => c.slug === slug);
  const [openProduct, setOpenProduct] = useState(null);
  const t = useT();

  if (!category) return <Navigate to="/" replace />;

  const L = (v) => v[lang] ?? v.it;

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className={styles.main}>
        {/* ── Breadcrumb ─────────────────────────────── */}
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>
                {t("cat_home")}
              </Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span className={styles.breadcrumbCurrent}>
                {L(category.name)}
              </span>
            </nav>
          </div>
        </div>

        {/* ── Hero immagine ───────────────────────────── */}
        <div className={styles.hero}>
          <img
            src={category.heroImage}
            alt={L(category.name)}
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        {/* ── Titolo + descrizione ────────────────────── */}
        <section className={styles.header}>
          <div className="container">
            <h2 className={styles.pageTitle}>{L(category.name)}</h2>
            <p className={styles.pageDesc}>{L(category.description)}</p>
          </div>
        </section>

        {/* ── Griglia prodotti ────────────────────────── */}
        <section className={styles.productsSection}>
          <div className="container">
            <div className={styles.productGrid}>
              {category.products.map((product) => (
                <button
                  key={product.id}
                  className={styles.productCard}
                  onClick={() => setOpenProduct(product)}
                  aria-label={`${t("cat_gallery_hint")}: ${product.name}`}
                >
                  <div className={styles.productImgWrap}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className={styles.productImg}
                    />
                    <div className={styles.productHint}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span>{t("cat_gallery_hint")}</span>
                    </div>
                  </div>
                  <div className={styles.productBody}>
                    <h3 className={styles.productName}>{product.name}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Info negozio ────────────────────────────── */}
        <section className={styles.infoStrip}>
          <div className="container">
            <div className={styles.infoBar}>
              {t("cat_info").map((item) => {
                const icon = (
                  <span className={styles.infoIcon}>
                    {INFO_ICONS[item.icon]}
                  </span>
                );
                const text = (
                  <span className={styles.infoValue}>{item.value}</span>
                );
                if (item.icon === "phone")
                  return (
                    <a
                      key={item.icon}
                      href={`tel:${item.value.replace(/\s/g, "")}`}
                      className={styles.infoItem}
                    >
                      {icon}
                      {text}
                    </a>
                  );
                if (item.icon === "mail")
                  return (
                    <a
                      key={item.icon}
                      href={`mailto:${item.value}`}
                      className={styles.infoItem}
                    >
                      {icon}
                      {text}
                    </a>
                  );
                return (
                  <div key={item.icon} className={styles.infoItem}>
                    {icon}
                    {text}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {openProduct && (
        <ProductModal
          product={openProduct}
          onClose={() => setOpenProduct(null)}
        />
      )}
    </>
  );
}
