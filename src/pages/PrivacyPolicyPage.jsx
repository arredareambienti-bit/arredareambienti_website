import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useLang } from "../context/LangContext";
import { useT } from "../i18n/useT";
import styles from "./CookiePolicyPage.module.css";

export default function PrivacyPolicyPage() {
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    const url = "https://arredareambienti.it/privacy-policy";
    document.title = "Privacy Policy | Arredare Ambienti";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Informativa privacy di Arredare Ambienti: dati raccolti, finalità del trattamento e diritti dell'interessato.");
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('link[rel="alternate"][hreflang="it"]')?.setAttribute("href", url);
    document.querySelector('link[rel="alternate"][hreflang="en"]')?.setAttribute("href", url);
    document.querySelector('link[rel="alternate"][hreflang="x-default"]')?.setAttribute("href", url);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Salta al contenuto</a>
      <Navbar />
      <ScrollToTop />

      <main id="main-content" className={styles.main}>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
            </nav>
          </div>
        </div>

        <div className="container">
          <article className={styles.article}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Ultimo aggiornamento: maggio 2026</p>
            {lang === "en" && (
              <p className={styles.langNotice}>
                This page is currently available in Italian only.
              </p>
            )}

            <section className={styles.section}>
              <h2>1. Titolare del trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali raccolti tramite
                il presente sito è:
              </p>
              <p>
                <strong>Arredare Ambienti S.r.l.</strong><br />
                Via Federico Meninni 275, 70024 Gravina in Puglia (BA)<br />
                P.IVA 01256620772<br />
                Email:{" "}
                <a href="mailto:arredareambienti@gmail.com" className={styles.link}>
                  arredareambienti@gmail.com
                </a>
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Dati raccolti</h2>
              <p>
                Il sito raccoglie esclusivamente i dati che l'utente fornisce
                volontariamente compilando il form di contatto:
              </p>
              <ul className={styles.list}>
                <li>Nome (facoltativo)</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Testo del messaggio</li>
              </ul>
              <p>
                Non vengono raccolti dati di profilazione né effettuata alcuna
                attività di tracciamento pubblicitario. Per i cookie e i
                servizi di terze parti utilizzati durante la navigazione si
                rimanda alla{" "}
                <Link to="/cookie-policy" className={styles.link}>Cookie Policy</Link>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Finalità e base giuridica del trattamento</h2>
              <p>
                I dati sono trattati per la sola finalità di rispondere alle
                richieste di informazioni o di preventivo inoltrate tramite il
                form di contatto.
              </p>
              <p>
                La base giuridica è il consenso espresso dell'interessato (art.
                6, lett. a, GDPR), prestato con l'invio del modulo, e
                l'esecuzione di misure precontrattuali su richiesta
                dell'interessato (art. 6, lett. b, GDPR).
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Modalità del trattamento e servizio EmailJS</h2>
              <p>
                I messaggi inviati dal form vengono recapitati al Titolare
                tramite il servizio <strong>EmailJS</strong> (EmailJS Ltd.),
                che funge da responsabile tecnico del trasporto del messaggio
                senza conservare i dati in modo persistente.
              </p>
              <p>
                I dati sono trattati con strumenti elettronici e con misure
                tecniche e organizzative adeguate a garantire un livello di
                sicurezza appropriato. Informativa privacy del fornitore:{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  emailjs.com/legal/privacy-policy
                </a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Conservazione dei dati</h2>
              <p>
                I messaggi ricevuti vengono conservati nella casella di posta
                del Titolare per il tempo strettamente necessario a gestire la
                richiesta dell'utente e ad adempiere a eventuali obblighi di
                legge, dopodiché vengono cancellati.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Trasferimento dei dati al di fuori dell'Unione Europea</h2>
              <p>
                EmailJS Ltd. e Google LLC (utilizzato per i contenuti
                incorporati nel sito) hanno sede negli Stati Uniti d'America.
                L'utilizzo di tali servizi può comportare un trasferimento di
                dati personali al di fuori dello Spazio Economico Europeo,
                effettuato sulla base delle garanzie previste dagli articoli
                45 e 46 del GDPR.
              </p>
              <p>
                Entrambi i fornitori risultano certificati nell'ambito del{" "}
                <a
                  href="https://www.dataprivacyframework.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  EU-U.S. Data Privacy Framework
                </a>
                {" "}(decisione di adeguatezza della Commissione Europea del 10
                luglio 2023) e applicano inoltre le Clausole Contrattuali
                Standard approvate dalla Commissione Europea.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Comunicazione a terzi</h2>
              <p>
                I dati personali non sono ceduti o diffusi a terzi. Possono
                essere comunicati a soggetti la cui facoltà di accesso è
                riconosciuta da disposizioni di legge o ad eventuali fornitori
                di servizi tecnici (ad es. il provider del servizio email) nei
                limiti strettamente necessari allo svolgimento del servizio.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Diritti dell'interessato</h2>
              <p>
                In qualsiasi momento l'utente può esercitare i diritti previsti
                dagli articoli da 15 a 22 del Regolamento (UE) 2016/679 (GDPR),
                tra cui:
              </p>
              <ul className={styles.list}>
                <li>diritto di accesso ai propri dati personali;</li>
                <li>diritto di rettifica o cancellazione dei dati;</li>
                <li>diritto di limitazione del trattamento;</li>
                <li>diritto di opposizione al trattamento;</li>
                <li>diritto alla portabilità dei dati;</li>
                <li>diritto di revocare il consenso prestato in qualsiasi momento.</li>
              </ul>
              <p>
                Per esercitare questi diritti è sufficiente inviare una
                richiesta scritta all'indirizzo email del Titolare indicato al
                punto 1. L'utente ha inoltre il diritto di proporre reclamo
                all'Autorità Garante per la protezione dei dati personali
                (www.garanteprivacy.it).
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Modifiche alla presente policy</h2>
              <p>
                Il Titolare si riserva il diritto di modificare la presente
                Privacy Policy in qualsiasi momento. Le modifiche hanno effetto
                dalla data di pubblicazione sul sito. Si raccomanda di
                consultare periodicamente questa pagina.
              </p>
            </section>

            <div className={styles.backWrap}>
              <Link to="/" className={styles.back}>{t("back_to_home")}</Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
