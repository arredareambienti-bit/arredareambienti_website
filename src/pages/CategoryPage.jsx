import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { CATEGORIES_DATA } from "../data/categories";
import { useLang } from "../context/LangContext";
import { useT } from "../i18n/useT";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import styles from "./CategoryPage.module.css";
import ScrollToTop from "../components/ScrollToTop";

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
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{L(category.name)}</h1>
          </div>
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
            <h3 className={styles.infoTitle}>{t("cat_visit")}</h3>
            <div className={styles.infoGrid}>
              {t("cat_info").map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                </div>
              ))}
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
