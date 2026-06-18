import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import useInView from "../hooks/useInView";
import { useT } from "../i18n/useT";
import styles from "./Contact.module.css";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";
import TextArea from "./ui/TextArea";
import TextField from "./ui/TextField";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_IT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_IT;
const TEMPLATE_ID_EN =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN || TEMPLATE_ID_IT;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_K;

const EMAIL_TITLES = {
  it: "Richiesta preventivo – Arredare Ambienti",
  en: "Quote request – Arredare Ambienti",
};



const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
const isValidPhone = v => /^\d{6,15}$/.test(v.replace(/[\s\-+().]/g, ''))

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });
  const [privacyOk, setPrivacyOk] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { msg, type: 'success'|'error' }
  const t = useT();
  const { lang } = useLang();

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 5000);
  };

  const emailErr =
    form.email && !isValidEmail(form.email) ? t("contact_email_invalid") : "";
  const phoneErr =
    form.telefono && !isValidPhone(form.telefono)
      ? t("contact_phone_invalid")
      : "";

  const canSubmit =
    form.email.trim() &&
    form.telefono.trim() &&
    form.messaggio.trim() &&
    !emailErr &&
    !phoneErr &&
    privacyOk;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        lang === "en" ? TEMPLATE_ID_EN : TEMPLATE_ID_IT,
        {
          name: form.nome,
          email: form.email,
          phone: form.telefono,
          message: form.messaggio,
          title: EMAIL_TITLES[lang] || EMAIL_TITLES.it,
        },
        PUBLIC_KEY,
      );
      showToast(t("contact_ok_title"), "success");
      setForm({ nome: "", email: "", telefono: "", messaggio: "" });
      setPrivacyOk(false);
    } catch {
      showToast(t("contact_error"), "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contatti"
      className={[styles.section, inView && styles.visible]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      <div className="container">
        <div className={styles.formWrap}>
          <SectionHeader
            label={t("contact_label")}
            title={t("contact_title")}
            subtitle={t("contact_subtitle")}
          />

          <div className={styles.teamRow}>
            <p className={styles.teamTitle}>{t("contact_team_title")}</p>
            <div className={styles.teamCards}>
              {t("contact_team").map((member) => (
                <a
                  key={member.name}
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className={styles.teamCard}
                >
                  <span className={styles.teamInitial}>{member.name[0]}</span>
                  <span className={styles.teamInfo}>
                    <span className={styles.teamName}>{member.name}</span>
                    <span className={styles.teamRole}>{member.role}</span>
                  </span>
                  <span className={styles.teamPhone}>{member.phone}</span>
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <TextField
                id="nome"
                label={t("contact_name")}
                placeholder={t("contact_name_ph")}
                value={form.nome}
                onChange={set("nome")}
              />
              <TextField
                id="email"
                label={t("contact_email_lbl")}
                type="email"
                placeholder={t("contact_email_ph")}
                value={form.email}
                onChange={set("email")}
                error={emailErr}
              />
            </div>
            <TextField
              id="telefono"
              label={t("contact_phone_lbl")}
              type="tel"
              placeholder={t("contact_phone_ph")}
              value={form.telefono}
              onChange={set("telefono")}
              error={phoneErr}
            />
            <TextArea
              id="messaggio"
              label={t("contact_message_lbl")}
              placeholder={t("contact_message_ph")}
              rows={5}
              value={form.messaggio}
              onChange={set("messaggio")}
            />
            <label className={styles.privacyRow}>
              <input
                type="checkbox"
                className={styles.privacyCheck}
                checked={privacyOk}
                onChange={(e) => setPrivacyOk(e.target.checked)}
              />
              <span className={styles.privacyText}>
                {t("contact_privacy_pre")}{" "}
                <Link to="/privacy-policy" className={styles.privacyLink}>
                  {t("contact_privacy_link")}
                </Link>
                {t("contact_privacy_post")}
              </span>
            </label>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={!canSubmit || sending}
            >
              {sending ? t("contact_sending") : t("contact_send")}
            </Button>
          </form>
        </div>
      </div>

      {toast && (
        <div
          className={[styles.toast, styles[`toast_${toast.type}`]].join(" ")}
          role="alert"
        >
          <span className={styles.toastMsg}>{toast.msg}</span>
          <button
            className={styles.toastClose}
            onClick={() => setToast(null)}
            aria-label={t("modal_close")}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
