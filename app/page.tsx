"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Cross,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Waves,
  type LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/site-data.json";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const iconMap = {
  BadgeCheck,
  Cross,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Waves
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconMap;

const {
  brand,
  contact,
  nav,
  hero,
  trustBar,
  doctor,
  services,
  comfort,
  testimonials,
  facilities,
  contactSection,
  footer,
  mobileCtas
} = siteData;

const getIcon = (icon: string) => iconMap[icon as IconName] ?? BadgeCheck;

function MotionSection({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="fixed left-0 right-0 top-3 z-50 px-3">
        <div className="glass-nav mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 sm:px-6">
          <a href="#home" className="flex items-center gap-3" aria-label={`${brand.shortName} home`}>
            <span className="grid size-11 place-items-center rounded-full bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-600/20">
              {brand.logoText}
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-slate-950 sm:text-base">{brand.shortName}</span>
              <span className="block text-xs font-medium text-slate-500">{brand.locationName}</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            {nav.map((link) => (
              <a key={link.href} className="transition hover:text-blue-600" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={contact.phoneHref}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen bg-[radial-gradient(circle_at_20%_20%,#e5f2ff_0,#f8fbff_30%,transparent_58%),linear-gradient(135deg,#ffffff_0%,#eef7ff_50%,#f4f0ff_100%)] pb-16 pt-28 md:pb-20 md:pt-36"
      >
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              {hero.ratingBadge}
            </div>
            <h1 className="text-balance max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.whatsappHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 text-base font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                <CalendarCheck className="size-5" />
                {hero.primaryCta}
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-blue-100 bg-white px-7 text-base font-semibold text-slate-950 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
              >
                <Phone className="size-5" />
                {hero.secondaryCta}
              </a>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {hero.trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-white bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="size-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          >
            <div className="absolute -left-5 top-12 z-10 rounded-3xl bg-white/88 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur sm:-left-10">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{hero.comfortBadgeTitle}</p>
                  <p className="text-xs text-slate-500">{hero.comfortBadgeText}</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-blue-950/12">
              <Image
                src="/images/clinic-hero.png"
                alt={hero.imageAlt}
                width={1200}
                height={900}
                priority
                className="hero-visual-mask aspect-[4/3] w-full rounded-[1.55rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-3xl bg-slate-950 px-5 py-4 text-white shadow-2xl shadow-slate-950/20 sm:right-9">
              <p className="text-xs font-medium text-blue-100">{contact.openTodayLabel}</p>
              <p className="text-lg font-semibold">{contact.openTodayValue}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <MotionSection className="bg-white py-8">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustBar.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.label}
                className="soft-card rounded-3xl p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <Icon className="mb-4 size-6 text-blue-600" />
                <p className="font-semibold text-slate-950">{item.label}</p>
                <p className="mt-1 text-sm text-slate-500">{item.note}</p>
              </motion.div>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection id="doctor" className="bg-white py-20 md:py-28">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="soft-card relative overflow-hidden rounded-[2rem] p-7">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50" />
            <div className="relative">
              <div className="mb-8 grid aspect-[4/5] place-items-center rounded-[1.5rem] bg-gradient-to-br from-blue-100 via-white to-violet-100">
                <div className="grid size-36 place-items-center rounded-full bg-white text-5xl font-semibold text-blue-600 shadow-2xl shadow-blue-950/10">
                  {doctor.cardInitials}
                </div>
              </div>
              <div className="rounded-3xl bg-white/82 p-5 shadow-xl shadow-blue-950/8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">{doctor.cardRole}</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">{brand.doctorName}</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {doctor.cardDescription}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{doctor.eyebrow}</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              {doctor.heading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {doctor.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {doctor.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl bg-sky-50 p-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="services" className="bg-[#f7fbff] py-20 md:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{services.eyebrow}</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
              {services.heading}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <motion.article
                  key={service.title}
                  className="group rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.45 }}
                >
                  <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="comfort" className="relative bg-white py-20 md:py-28">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-500 to-violet-500 p-7 text-white shadow-2xl shadow-blue-600/18 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">{comfort.eyebrow}</p>
                <h2 className="text-balance mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                  {comfort.heading}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                  {comfort.body}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {comfort.points.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/14 p-4 backdrop-blur">
                      <CheckCircle2 className="size-5 text-white" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-white/16 p-6 backdrop-blur">
                <Quote className="mb-5 size-9 text-blue-100" />
                <p className="text-2xl font-semibold leading-snug">
                  “{comfort.quote}”
                </p>
                <p className="mt-5 text-blue-100">{comfort.quoteAttribution}</p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f7fbff] py-20 md:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{testimonials.eyebrow}</p>
              <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">{testimonials.heading}</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-700">
                {brand.rating} · {brand.reviewCount} reviews
              </span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.items.map((testimonial) => (
              <article key={testimonial.tag} className="soft-card rounded-[1.75rem] p-6">
                <Quote className="mb-5 size-8 text-blue-500" />
                <p className="text-lg leading-8 text-slate-700">{testimonial.quote}</p>
                <div className="mt-7 flex items-center justify-between">
                  <span className="font-semibold text-slate-950">{testimonial.name}</span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {testimonial.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{facilities.eyebrow}</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              {facilities.heading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {facilities.body}
            </p>
          </div>
          <div className="grid gap-4">
            {facilities.items.map((facility) => (
              <div key={facility} className="flex items-start gap-4 rounded-3xl border border-blue-100 bg-sky-50/70 p-5">
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <CheckCircle2 className="size-6" />
                </div>
                <p className="text-lg font-semibold leading-7 text-slate-800">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="bg-[#f7fbff] py-20 md:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{contactSection.eyebrow}</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
              {brand.name}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {contact.address}
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="soft-card rounded-[2rem] p-6">
              <div className="space-y-4">
                <a href={contact.phoneHref} className="flex items-start gap-4 rounded-3xl bg-white p-5 transition hover:text-blue-700">
                  <Phone className="mt-1 size-6 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">{contactSection.phoneLabel}</span>
                    <span className="block text-xl font-semibold">{contact.phoneDisplay}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5">
                  <Clock className="mt-1 size-6 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">{contactSection.timingsLabel}</span>
                    <span className="block text-xl font-semibold">{contact.timings}</span>
                  </span>
                </div>
                <a href={contact.mapsHref} className="flex items-start gap-4 rounded-3xl bg-white p-5 transition hover:text-blue-700">
                  <MapPin className="mt-1 size-6 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">{contactSection.locationLabel}</span>
                    <span className="block text-xl font-semibold">{contact.location}</span>
                  </span>
                </a>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={contact.whatsappHref}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-600"
                >
                  <MessageCircle className="size-5" />
                  {contactSection.whatsappCta}
                </a>
                <a
                  href={contact.mapsHref}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <ArrowRight className="size-5" />
                  {contactSection.directionsCta}
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-2 shadow-2xl shadow-blue-950/8">
              <iframe
                title={contactSection.mapTitle}
                src={contact.mapsEmbedUrl}
                className="map-frame h-[420px] w-full rounded-[1.55rem] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <footer className="bg-slate-950 px-4 py-10 text-white">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold">{brand.name}</p>
            <p className="mt-2 text-slate-400">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            {footer.links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
            <Facebook className="size-5" aria-label="Facebook" />
            <Instagram className="size-5" aria-label="Instagram" />
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={contact.phoneHref}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 font-semibold text-white shadow-2xl shadow-slate-950/20"
        >
          <Phone className="size-5" />
          {mobileCtas.call}
        </a>
        <a
          href={contact.whatsappHref}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 font-semibold text-white shadow-2xl shadow-blue-600/20"
        >
          <CalendarCheck className="size-5" />
          {mobileCtas.book}
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: brand.name,
            medicalSpecialty: "Dentistry",
            telephone: contact.phoneE164,
            address: {
              "@type": "PostalAddress",
              streetAddress: contact.streetAddress,
              addressLocality: contact.addressLocality,
              addressRegion: contact.addressRegion,
              postalCode: contact.postalCode,
              addressCountry: contact.addressCountry
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: brand.rating,
              reviewCount: brand.reviewCount
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: contact.openingHours.days,
                opens: contact.openingHours.opens,
                closes: contact.openingHours.closes
              }
            ]
          })
        }}
      />
    </main>
  );
}
