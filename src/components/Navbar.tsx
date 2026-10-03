import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'
import { LanguagePickerModal } from "./LanguagePickerModal"
import { LanguageToggle } from "./LanguageToggle"

function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/70 bg-background/90 text-foreground shadow-sm backdrop-blur-xl" : "on-media bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 md:px-10">
        <a href="#home" className="flex shrink-0 items-center gap-3" aria-label={t("Abdellah Edaoudi — الرئيسية")}>
          <img src="https://cdn.chantan.one/scraped-images/a4a6070ef0fa39f6.jpg" alt={t("Abdellah Edaoudi")} className="h-10 w-10 rounded-full border border-white/70 object-cover shadow-sm" />
          <span className="leading-tight"><strong className="block text-sm font-extrabold tracking-wide">{t("ABDELLAH EDAOUDI")}<span className="text-primary">.</span></strong><span className="text-[10px] font-semibold tracking-[0.12em] opacity-75">{t("FULL STACK DEVELOPER")}</span></span>
        </a>
        <nav aria-label={t("التنقل الرئيسي")} className="hidden items-center gap-5 text-xs font-semibold lg:flex xl:gap-7">
          <a href="#work" className="transition-opacity hover:opacity-70">{t("المشاريع")}</a>
          <a href="#about" className="transition-opacity hover:opacity-70">{t("نبذة عني")}</a>
          <a href="#experience" className="transition-opacity hover:opacity-70">{t("الخبرة")}</a>
          <a href="#skills" className="transition-opacity hover:opacity-70">{t("المهارات")}</a>
          <a href="#education" className="transition-opacity hover:opacity-70">{t("التعليم")}</a>
          <a href="#contact" className="rounded-full bg-primary px-4 py-2.5 text-primary-foreground transition-all hover:-translate-y-0.5">{t("تواصل")}</a>
          <LanguagePickerModal />
        <LanguageToggle />
        </nav>
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguagePickerModal />
          <a href="mailto:abdellahedaoudi.dev@gmail.com" className="rounded-full border border-current/25 p-2 transition-colors hover:bg-white/10" aria-label={t("البريد الإلكتروني")}>
            <span className="sr-only">{t("البريد الإلكتروني")}</span><svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar