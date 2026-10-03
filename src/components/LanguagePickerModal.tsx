import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, Languages } from "lucide-react"
import { useTranslation } from "react-i18next"

const languages = [
  { code: "ar", name: "العربية", short: "ع" },
  { code: "en", name: "English", short: "EN" },
  { code: "fr", name: "Français", short: "FR" },
]

export function LanguagePickerModal() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)
  const current = languages.some(({ code }) => code === i18n.language)
    ? i18n.language
    : i18n.language.split("-")[0]
  const selected = languages.find(({ code }) => code === current) ?? languages[0]

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !pickerRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const chooseLanguage = (code: string) => {
    void i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={pickerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("Select language")}
        className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-current/20 bg-background/75 px-3 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md transition-all duration-200 hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Languages size={15} className="text-primary" />
        <span>{selected.short}</span>
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div role="listbox" aria-label={t("Available languages")} className="absolute end-0 top-[calc(100%+0.55rem)] z-[100] w-44 overflow-hidden rounded-2xl border border-border bg-card p-1.5 text-card-foreground shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
          {languages.map((language) => {
            const isSelected = language.code === current
            return (
              <button
                key={language.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => chooseLanguage(language.code)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-start text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "bg-primary/10 font-semibold text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
              >
                <span className="flex items-center gap-3"><span className="w-7 text-[11px] font-bold tracking-wide text-primary">{language.short}</span>{t(language.name)}</span>
                {isSelected && <Check size={15} className="text-primary" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
