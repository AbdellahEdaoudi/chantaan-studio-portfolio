import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { MotionItem, MotionReveal } from "@/components/MotionReveal"
import Navbar from "@/components/Navbar"
import highlights from "@/data/portfolio-highlights.json"
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type Highlight = {
  title: string
  body: string
  type: "project" | "experience"
  key: string
  image?: string
  url?: string
  technologies?: string
  company?: string
  date?: string
  location?: string
}

const entries = highlights as Highlight[]
const projects = entries.filter((item) => item.type === "project")
const experience = entries.filter((item) => item.type === "experience")

const skillGroups = [
  { title: "واجهة المستخدم", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "shadcn/ui"] },
  { title: "الخلفية والأنظمة", skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Socket.IO", "MVC", "Microservices"] },
  { title: "البيانات والأمان", skills: ["MongoDB", "MySQL", "JWT", "NextAuth.js", "Bcrypt", "RBAC"] },
  { title: "الأدوات والتسليم", skills: ["Docker", "Git", "GitHub", "Vercel", "Postman", "SonarQube", "CI/CD", "Stripe", "PayPal"] },
]

function Index() {
  const { t, i18n } = useTranslation()

  // Update <title> and <meta name="description"> on language change
  useEffect(() => {
    document.title = t('__page_title__')
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', t('__page_description__'))
    // Update dir and lang on <html> for proper RTL/LTR
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language, t])

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Navbar />

      <section id="home" className="on-media relative isolate flex min-h-[820px] min-h-svh items-center overflow-hidden">
        <img src="/assets/portfolio-hero.webp" alt={t("مساحة عمل لمطوّر ويب في ضوء دافئ")} className="absolute inset-0 -z-20 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 pb-12 pt-20 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:px-12 md:pb-16">
          <MotionReveal delay={0.05}>
            <MotionItem><p className="mb-4 text-sm font-semibold tracking-wide text-white/75">{t("مطوّر Full Stack · العيون، المغرب")}</p></MotionItem>
            <MotionItem><h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem]">{t("أحوّل الأفكار")}<br /><span className="text-primary">{t("إلى منتجات رقمية.")}</span></h1></MotionItem>
            <MotionItem><p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">{t("أنا عبد الله الداودي، مطوّر ويب متكامل أبني تطبيقات سريعة وآمنة وقابلة للتوسع — من واجهة الاستخدام إلى منطق الخادم.")}</p></MotionItem>
            <MotionItem><div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">{t("استكشف مشاريعي")} <ArrowDown size={17} className="rtl:rotate-180" /></a>
              <a href="mailto:abdellahedaoudi.dev@gmail.com" className="rounded-full border border-white/55 px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-white/10">{t("تواصل بشأن فرصة عمل")}</a>
            </div></MotionItem>
            <MotionItem><div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/25 pt-4 text-sm text-white/75"><span>{t("+2 سنوات خبرة عملية")}</span><span>{t("منتجات ويب متكاملة")}</span><span className="inline-flex items-center gap-2"><MapPin size={15} /> {t("العيون، المغرب")}</span></div></MotionItem>
          </MotionReveal>
          <MotionReveal className="hidden md:block">
            <MotionItem><div className="relative mx-auto w-full max-w-[390px] rounded-[2rem] border border-white/30 bg-black/25 p-3 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.5rem]"><img src="/assets/abdellah-portrait.webp" alt={t("Abdellah Edaoudi")} className="aspect-[4/4.6] w-full object-cover object-top transition-transform duration-700 hover:scale-105" /></div>
              <div className="absolute -start-10 top-10 rounded-2xl border border-border/70 bg-background/95 px-4 py-3 text-foreground shadow-lg"><p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground">{t("مجالات التركيز")}</p><p className="mt-1 text-sm font-bold">{t("React · Next.js · NestJS")}</p></div>
              <div className="absolute -end-7 bottom-10 rounded-2xl border border-border/70 bg-background/95 px-4 py-3 text-foreground shadow-lg"><p className="text-xs text-muted-foreground">{t("تركيز على")}</p><p className="mt-1 text-sm font-bold">{t("الأداء · الأمان · تجربة المستخدم")}</p></div>
            </div></MotionItem>
          </MotionReveal>
        </div>
        <span className="absolute bottom-8 end-8 hidden text-[10px] font-semibold tracking-[0.24em] text-white/55 md:block">{t("ABDELLAH EDAOUDI · PORTFOLIO")}</span>
      </section>

      <section id="about" className="zellige-field py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:px-12">
          <MotionReveal className="self-start md:sticky md:top-28">
            <MotionItem><p className="mb-4 text-xs font-bold tracking-[0.18em] text-primary">{t("نبذة مهنية")}</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">{t("هندسة موثوقة.")}<br />{t("تجربة واضحة.")}</h2></MotionItem>
            <MotionItem><p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">{t("حاصل على دبلوم متخصص في التطوير الرقمي، خيار Full Stack Web، وأكثر من عامين من الخبرة التطبيقية. أوازن بين بنية تقنية متينة وواجهة سهلة الاستخدام، مع اهتمام خاص بالأداء والأمان وجودة التنفيذ.")}</p></MotionItem>
            <MotionItem><div className="mt-8 grid max-w-sm grid-cols-2 gap-3"><div className="rounded-2xl border border-border bg-card p-4 shadow-sm"><strong className="block text-3xl font-extrabold">+2</strong><span className="mt-1 block text-xs text-muted-foreground">{t("سنوات خبرة عملية")}</span></div><div className="rounded-2xl border border-border bg-card p-4 shadow-sm"><strong className="block text-3xl font-extrabold">4</strong><span className="mt-1 block text-xs text-muted-foreground">{t("مشاريع مختارة")}</span></div></div></MotionItem>
          </MotionReveal>
          <MotionReveal>
            <MotionItem><div className="mb-6 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold tracking-[0.18em] text-primary">{t("أعمال مختارة")}</p><h2 className="text-3xl font-bold md:text-4xl">{t("من الفكرة إلى الإطلاق.")}</h2></div><a href="https://github.com/AbdellahEdaoudi" target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm font-semibold transition-colors hover:text-primary sm:inline-flex">{t("GitHub")} <ArrowUpRight size={15} /></a></div></MotionItem>
            <div id="work" className="grid gap-5 sm:grid-cols-2">
              {projects.map((project, index) => <MotionItem key={project.key}>
                <article className={`group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${index === 0 ? "sm:col-span-2" : ""}`}>
                  <a href={project.url} target="_blank" rel="noreferrer" className="block overflow-hidden bg-muted">
                    <img src={project.image} alt={t(project.title)} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${index === 0 ? "aspect-[2.1/1]" : "aspect-[1.65/1]"}`} />
                  </a>
                  <div className="p-5 md:p-6"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold">{t(project.title)}</h3><a href={project.url} target="_blank" rel="noreferrer" aria-label={t("زيارة {{title}}", { title: project.title })} className="shrink-0 rounded-full border border-border p-2 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"><ArrowUpRight size={17} /></a></div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(project.body)}</p><p className="mt-4 border-t border-border pt-3 text-xs leading-6 text-muted-foreground">{t(project.technologies)}</p>
                  </div>
                </article>
              </MotionItem>)}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="experience" className="atmosphere py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:px-12">
          <MotionReveal><MotionItem><p className="mb-4 text-xs font-bold tracking-[0.18em] text-primary">{t("المسار المهني")}</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">{t("خبرة عملية")}<br />{t("في بناء الويب.")}</h2><p className="mt-6 max-w-sm leading-7 text-muted-foreground">{t("تجربة تجمع بين تطوير الواجهات والخدمات الخلفية والعمل على منتجات فعلية ضمن فرق ومشاريع مختلفة.")}</p></MotionItem></MotionReveal>
          <MotionReveal><div className="space-y-4">
            {experience.map((item) => <MotionItem key={item.key}><article className="hover-lift rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><h3 className="text-lg font-bold">{t(item.title)}</h3><p className="mt-1 text-sm font-semibold text-primary">{t(item.company)}</p><p className="mt-1 text-xs text-muted-foreground">{t(item.location)}</p></div><time className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{t(item.date)}</time></div><p className="mt-4 text-sm leading-7 text-muted-foreground">{t(item.body)}</p></article></MotionItem>)}
          </div></MotionReveal>
        </div>
      </section>

      <section id="skills" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:px-12">
          <MotionReveal><MotionItem><p className="mb-4 text-xs font-bold tracking-[0.18em] text-primary">{t("المهارات التقنية")}</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">{t("الأدوات التي")}<br />{t("أبني بها.")}</h2><p className="mt-6 max-w-sm leading-7 text-muted-foreground">{t("مجموعة متكاملة لتطوير تطبيقات حديثة، مؤمّنة، وقابلة للصيانة.")}</p><p className="mt-6 text-sm leading-7 text-muted-foreground">{t("العربية: اللغة الأم · الفرنسية والإنجليزية: مستوى أساسي للعمل")}</p></MotionItem></MotionReveal>
          <MotionReveal><div className="divide-y divide-border border-y border-border">
            {skillGroups.map((group, index) => <MotionItem key={group.title}><div className="grid gap-4 py-6 sm:grid-cols-[190px_1fr] sm:gap-8"><h3 className="font-bold"><span className="me-3 text-xs font-semibold text-primary">0{index + 1}</span>{t(group.title)}</h3><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">{t(skill)}</span>)}</div></div></MotionItem>)}
          </div><MotionItem><p className="mt-5 text-xs leading-6 text-muted-foreground">{t("مفاهيم إضافية: SaaS · MVC · Microservices · Agile/Scrum · رخصة السياقة: الفئة B")}</p></MotionItem></MotionReveal>
        </div>
      </section>

      <section id="education" className="zellige-field py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:px-12">
          <MotionReveal><MotionItem><p className="mb-3 text-xs font-bold tracking-[0.18em] text-primary">{t("التعليم")}</p><h2 className="text-3xl font-bold md:text-4xl">{t("أساس أكاديمي")}<br />{t("في التطوير الرقمي.")}</h2></MotionItem></MotionReveal>
          <MotionReveal><div className="space-y-3">
            <MotionItem><article className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><h3 className="font-bold">{t("دبلوم التقني المتخصص (DTS) — التطوير الرقمي، خيار Full Stack Web")}</h3><p className="mt-2 text-sm text-muted-foreground">{t("Cités des Métiers et des Compétences (CMC) · العيون، المغرب")}</p></div><time className="shrink-0 text-sm font-semibold text-primary">2022 — 2024</time></div></article></MotionItem>
            <MotionItem><article className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><h3 className="font-bold">{t("البكالوريا — العلوم الفيزيائية")}</h3><p className="mt-2 text-sm text-muted-foreground">{t("ثانوية بابا أحمد بن محمد يحيى · العيون، المغرب")}</p></div><time className="shrink-0 text-sm font-semibold text-primary">2021 — 2022</time></div></article></MotionItem>
          </div></MotionReveal>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 md:px-12"><MotionReveal><MotionItem>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm md:p-14"><div className="absolute -end-12 -top-10 h-64 w-64 rounded-full border border-primary/10" />
            <p className="text-xs font-bold tracking-[0.18em] text-primary">{t("لنتحدث عن فرصتك القادمة")}</p>
            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{t("هل تبحث عن مطوّر")}<br className="hidden sm:block" /> {t("يهتم بالتفاصيل؟")}</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{t("يسعدني التواصل حول فرص العمل والتعاون في مشاريع الويب.")}</p><p className="mt-4 text-sm font-semibold">{t("abdellahedaoudi.dev@gmail.com")}</p></div>
              <div className="flex flex-wrap gap-3"><a href="mailto:abdellahedaoudi.dev@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><Mail size={17} /> {t("راسلني")}</a><a href="https://linkedin.com/in/abdellah-edaoudi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3.5 font-semibold transition-colors hover:bg-secondary"><Linkedin size={17} /> {t("LinkedIn")}</a></div>
            </div>
          </div>
        </MotionItem></MotionReveal></div>
      </section>

      <footer className="border-t border-border bg-card/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-12"><div><a href="#home" className="font-extrabold tracking-tight">{t("ABDELLAH EDAOUDI")}<span className="text-primary">.</span></a><p className="mt-1 text-xs text-muted-foreground">{t("Full Stack Web Developer · Laayoune, Morocco")}</p></div><div className="flex items-center gap-5 text-muted-foreground"><a className="transition-colors hover:text-foreground" href="mailto:abdellahedaoudi.dev@gmail.com" aria-label={t("البريد الإلكتروني")}><Mail size={18} /></a><a className="transition-colors hover:text-foreground" href="https://github.com/AbdellahEdaoudi" target="_blank" rel="noreferrer" aria-label={t("GitHub")}><Github size={18} /></a><a className="transition-colors hover:text-foreground" href="https://linkedin.com/in/abdellah-edaoudi" target="_blank" rel="noreferrer" aria-label={t("LinkedIn")}><Linkedin size={18} /></a><a className="transition-colors hover:text-foreground" href="https://wa.me/212609085357" target="_blank" rel="noreferrer" aria-label={t("WhatsApp")}><ArrowUpRight size={18} /></a></div><p className="text-xs text-muted-foreground">{t("© 2026 Abdellah Edaoudi")}</p></div>
      </footer>
    </main>
  )
}

export default Index
