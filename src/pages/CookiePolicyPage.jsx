import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import styles from "./CookiePolicyPage.module.css";

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className={styles.main}>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span className={styles.breadcrumbCurrent}>Cookie Policy</span>
            </nav>
          </div>
        </div>

        <div className="container">
          <article className={styles.article}>
            <h1 className={styles.title}>Cookie Policy</h1>
            <p className={styles.updated}>Ultimo aggiornamento: maggio 2025</p>

            <section className={styles.section}>
              <h2>1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web salvano sul dispositivo
                dell'utente durante la navigazione. Servono a far funzionare correttamente
                il sito, a ricordare le preferenze dell'utente e, in alcuni casi, a raccogliere
                informazioni statistiche o di profilazione.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Titolare del trattamento</h2>
              <p>
                <strong>Arredare Ambienti S.r.l.</strong><br />
                Via Federico Meninni 275, 70024 Gravina in Puglia (BA)<br />
                Email: <a href="mailto:bentleycommerciale@gmail.com" className={styles.link}>bentleycommerciale@gmail.com</a>
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Tipologie di cookie utilizzati</h2>

              <h3>3.1 Cookie tecnici (necessari)</h3>
              <p>
                Questi cookie sono indispensabili per il funzionamento del sito e non
                richiedono il consenso dell'utente. Vengono cancellati alla chiusura del browser
                oppure conservati per il tempo strettamente necessario.
              </p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Scopo</th>
                    <th>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cookie_consent</code></td>
                    <td>Salva la preferenza di consenso ai cookie dell'utente</td>
                    <td>Persistente (localStorage)</td>
                  </tr>
                </tbody>
              </table>

              <h3>3.2 Cookie di terze parti — Google Fonts</h3>
              <p>
                Il sito carica i caratteri tipografici (<em>Cormorant Garamond</em> e{" "}
                <em>Inter</em>) direttamente dai server di Google tramite il servizio Google
                Fonts. Questa operazione può comportare la trasmissione dell'indirizzo IP
                dell'utente a Google LLC (USA). Google dichiara di non utilizzare questi dati
                per scopi pubblicitari.
              </p>
              <p>
                Informativa Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  policies.google.com/privacy
                </a>
              </p>

              <h3>3.3 Cookie di terze parti — Google Maps</h3>
              <p>
                Nella sezione "Dove siamo" è incorporata una mappa interattiva fornita da
                Google Maps (Google LLC, USA). Quando l'utente visualizza la mappa, Google
                può impostare cookie sul dispositivo e raccogliere dati di navigazione
                secondo la propria informativa privacy.
              </p>
              <p>
                Informativa Google Maps:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  policies.google.com/privacy
                </a>
              </p>

              <h3>3.4 Dati trattati tramite il form di contatto — EmailJS</h3>
              <p>
                Il form di contatto utilizza il servizio EmailJS (EmailJS Ltd.) per
                recapitare i messaggi al titolare senza l'uso di un server proprio.
                I dati inseriti nel form (nome, email, telefono, messaggio) vengono
                trasmessi ai server di EmailJS esclusivamente per l'invio della comunicazione
                e non vengono conservati o ceduti a terzi.
              </p>
              <p>
                Informativa EmailJS:{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  emailjs.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Trasferimento dei dati al di fuori dell'Unione Europea</h2>
              <p>
                Alcuni dei servizi di terze parti citati (Google LLC ed EmailJS
                Ltd.) hanno sede negli Stati Uniti d'America. L'utilizzo di
                tali servizi comporta un trasferimento di dati personali
                (incluso l'indirizzo IP) al di fuori dello Spazio Economico
                Europeo.
              </p>
              <p>
                Il trasferimento avviene sulla base delle garanzie previste
                dagli articoli 45 e 46 del GDPR. In particolare, Google LLC ed
                EmailJS Ltd. risultano certificati nell'ambito del{" "}
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
                Standard (SCC) approvate dalla Commissione Europea.
              </p>
              <p>
                Per ulteriori informazioni sulle modalità di trattamento
                applicate da questi soggetti si rimanda alle rispettive
                informative privacy linkate sopra.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Come gestire o disabilitare i cookie</h2>
              <p>
                L'utente può gestire le preferenze sui cookie direttamente dal proprio browser.
                Di seguito i link alle istruzioni dei principali browser:
              </p>
              <ul className={styles.list}>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p>
                Disabilitare i cookie tecnici potrebbe compromettere il corretto funzionamento
                del sito.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Modifiche alla presente policy</h2>
              <p>
                Il Titolare si riserva il diritto di modificare questa Cookie Policy in
                qualsiasi momento. Le modifiche hanno effetto dalla data di pubblicazione
                sul sito. Si raccomanda di consultare periodicamente questa pagina.
              </p>
            </section>

            <div className={styles.backWrap}>
              <Link to="/" className={styles.back}>← Torna alla home</Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
