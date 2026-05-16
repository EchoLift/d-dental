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
  Waves
} from "lucide-react";
import { motion } from "framer-motion";

const phoneDisplay = "062816 48941";
const phoneHref = "tel:06281648941";
const whatsappHref =
  "https://wa.me/916281648941?text=Hello%20D%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=D%20Dental%20Care%20Sanathnagar%20Street%20No.%205%20Czech%20Colony%20Sanath%20Nagar%20Hyderabad";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const trustItems = [
  { icon: Star, label: "5.0 Rated Clinic", note: "34 patient reviews" },
  { icon: ShieldCheck, label: "Painless Procedures", note: "Gentle handling" },
  { icon: Microscope, label: "Modern Equipment", note: "Precise treatments" },
  { icon: BadgeCheck, label: "In-house X-Ray", note: "Quick diagnosis" },
  { icon: HeartHandshake, label: "Experienced Care", note: "By Dr. Deepa" }
];

const services = [
  {
    icon: Cross,
    title: "Root Canal Treatment",
    text: "Comfort-first RCT care with clear explanations and a calm chairside experience."
  },
  {
    icon: Sparkles,
    title: "Dental Implants",
    text: "Confident tooth replacement planning with modern tools and patient-focused guidance."
  },
  {
    icon: BadgeCheck,
    title: "Crowns & Bridges",
    text: "Natural-looking restorations designed for strength, fit, and everyday comfort."
  },
  {
    icon: Waves,
    title: "Teeth Cleaning",
    text: "Gentle scaling and polishing for a fresh, healthy, brighter-feeling smile."
  },
  {
    icon: Syringe,
    title: "Tooth Extraction",
    text: "Smooth, careful procedures with a focus on reducing fear and discomfort."
  },
  {
    icon: Smile,
    title: "Smile Restoration",
    text: "Thoughtful treatment plans to restore function, confidence, and aesthetics."
  },
  {
    icon: Stethoscope,
    title: "Dental Fillings",
    text: "Precise cavity care with durable fillings and patient-friendly communication."
  }
];

const testimonials = [
  {
    quote:
      "Dr. Deepa explained every step clearly and made the root canal feel surprisingly comfortable.",
    name: "Patient review",
    tag: "Painless RCT"
  },
  {
    quote:
      "The clinic felt hygienic and peaceful. The treatment was quick, smooth, and very professional.",
    name: "Patient review",
    tag: "Clean & calm"
  },
  {
    quote:
      "Friendly doctor, approachable staff, and affordable care. I felt safe through the whole visit.",
    name: "Patient review",
    tag: "Gentle care"
  }
];

const facilities = [
  "In-house dental X-ray for quicker treatment planning",
  "Modern equipment for root canal, crowns, bridges, and implants",
  "Hygienic environment with a clean, reassuring clinic flow",
  "Comfortable treatment setup designed for nervous patients"
];

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
          <a href="#home" className="flex items-center gap-3" aria-label="D Dental Care home">
            <span className="grid size-11 place-items-center rounded-full bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-600/20">
              D
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-slate-950 sm:text-base">D Dental Care</span>
              <span className="block text-xs font-medium text-slate-500">Sanathnagar</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-blue-600" href="#doctor">
              Dr. Deepa
            </a>
            <a className="transition hover:text-blue-600" href="#services">
              Services
            </a>
            <a className="transition hover:text-blue-600" href="#comfort">
              Comfort
            </a>
            <a className="transition hover:text-blue-600" href="#contact">
              Contact
            </a>
          </div>
          <a
            href={phoneHref}
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
              5.0 rated clinic · 34 reviews
            </div>
            <h1 className="text-balance max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              Gentle Dental Care You Can Trust
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Fear-free dental care with a personal touch by Dr. Deepa. Painless treatments,
              modern equipment, in-house X-ray, and patient comfort at the center of every visit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 text-base font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                <CalendarCheck className="size-5" />
                Book Appointment
              </a>
              <a
                href={phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-blue-100 bg-white px-7 text-base font-semibold text-slate-950 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
              >
                <Phone className="size-5" />
                Call Now
              </a>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {["Painless root canal care", "Affordable treatment plans", "Friendly, clear explanations"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-2xl border border-white bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="size-4 text-blue-600" />
                    {item}
                  </div>
                )
              )}
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
                  <p className="text-sm font-semibold text-slate-950">Fear-free visits</p>
                  <p className="text-xs text-slate-500">Gentle, reassuring care</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-blue-950/12">
              <Image
                src="/images/clinic-hero.png"
                alt="Warm modern dental clinic with a friendly dentist reassuring a relaxed patient"
                width={1200}
                height={900}
                priority
                className="hero-visual-mask aspect-[4/3] w-full rounded-[1.55rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-3xl bg-slate-950 px-5 py-4 text-white shadow-2xl shadow-slate-950/20 sm:right-9">
              <p className="text-xs font-medium text-blue-100">Open today</p>
              <p className="text-lg font-semibold">5 PM - 9 PM</p>
            </div>
          </motion.div>
        </div>
      </section>

      <MotionSection className="bg-white py-8">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
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
                  DD
                </div>
              </div>
              <div className="rounded-3xl bg-white/82 p-5 shadow-xl shadow-blue-950/8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Doctor</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">Dr. Deepa</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Known by patients for a friendly approach, professional skill, and gentle treatment.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About the care</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A dentist who helps patients feel safe before treatment begins.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              At D Dental Care - Sanathnagar, Dr. Deepa’s approach is personal, calm, and clear.
              Patients are guided through their treatment options, comfort is checked throughout,
              and every procedure is handled with reassuring precision.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Clear treatment explanations",
                "Gentle chairside communication",
                "Professional, skilled procedures",
                "Affordable, patient-first decisions"
              ].map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Dental services</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
              Skilled treatments delivered with comfort-first care.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Fear-free experience</p>
                <h2 className="text-balance mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                  Nervous About Dental Treatment?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                  You are not rushed into the chair. Dr. Deepa takes time to explain the problem,
                  the treatment, and the comfort steps so procedures feel smooth, manageable, and
                  far less intimidating.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Painless techniques", "Gentle handling", "Quick procedures", "Calm clinic environment"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/14 p-4 backdrop-blur">
                        <CheckCircle2 className="size-5 text-white" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-white/16 p-6 backdrop-blur">
                <Quote className="mb-5 size-9 text-blue-100" />
                <p className="text-2xl font-semibold leading-snug">
                  “Patients should understand what is happening and feel cared for at every step.”
                </p>
                <p className="mt-5 text-blue-100">The care philosophy at D Dental Care</p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f7fbff] py-20 md:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Patient stories</p>
              <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">Comfort people remember.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-700">5.0 · 34 reviews</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Modern facilities</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Clean, equipped, and reassuring from the first look.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The clinic experience is designed to support accurate diagnosis, smooth procedures,
              and a sense of hygiene and calm that helps patients relax.
            </p>
          </div>
          <div className="grid gap-4">
            {facilities.map((facility) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Visit the clinic</p>
            <h2 className="text-balance mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
              D Dental Care - Sanathnagar
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Road, Street No. 5, Above Sowmya Driving School, Czech Colony, Shivaji Nagar,
              Sanath Nagar, Hyderabad, Telangana 500018
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="soft-card rounded-[2rem] p-6">
              <div className="space-y-4">
                <a href={phoneHref} className="flex items-start gap-4 rounded-3xl bg-white p-5 transition hover:text-blue-700">
                  <Phone className="mt-1 size-6 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Phone</span>
                    <span className="block text-xl font-semibold">{phoneDisplay}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5">
                  <Clock className="mt-1 size-6 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Timings</span>
                    <span className="block text-xl font-semibold">Opens 5 PM · Closes 9 PM</span>
                  </span>
                </div>
                <a href={mapsHref} className="flex items-start gap-4 rounded-3xl bg-white p-5 transition hover:text-blue-700">
                  <MapPin className="mt-1 size-6 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Location</span>
                    <span className="block text-xl font-semibold">Sanath Nagar, Hyderabad</span>
                  </span>
                </a>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-600"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp
                </a>
                <a
                  href={mapsHref}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <ArrowRight className="size-5" />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-2 shadow-2xl shadow-blue-950/8">
              <iframe
                title="D Dental Care - Sanathnagar map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.445358351591!2d78.4206004871582!3d17.454384300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9174867182f5%3A0xa76a3564d67bab4e!2sD%20Dental%20Care%20-%20Sanathnagar!5e0!3m2!1sen!2sin!4v1778945890721!5m2!1sen!2sin"
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
            <p className="text-2xl font-semibold">D Dental Care - Sanathnagar</p>
            <p className="mt-2 text-slate-400">Fear-free dental care with a personal touch.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="#doctor" className="transition hover:text-white">
              Dr. Deepa
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
            <Facebook className="size-5" aria-label="Facebook" />
            <Instagram className="size-5" aria-label="Instagram" />
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={phoneHref}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 font-semibold text-white shadow-2xl shadow-slate-950/20"
        >
          <Phone className="size-5" />
          Call
        </a>
        <a
          href={whatsappHref}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 font-semibold text-white shadow-2xl shadow-blue-600/20"
        >
          <CalendarCheck className="size-5" />
          Book
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "D Dental Care - Sanathnagar",
            medicalSpecialty: "Dentistry",
            telephone: "+916281648941",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Road, Street No. 5, Above Sowmya Driving School, Czech Colony, Shivaji Nagar, Sanath Nagar",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500018",
              addressCountry: "IN"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "34"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "17:00",
                closes: "21:00"
              }
            ]
          })
        }}
      />
    </main>
  );
}
