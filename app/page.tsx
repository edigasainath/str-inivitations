'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  MessageCircle,
  Menu,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  SlidersVertical,
  Grid3X3,
  Smartphone,
  Tag,
  Check,
  Send,
  Eye,
  Clock,
  ArrowRight,
  Mail,
  Sparkles,
  Users,
  MousePointer,
  Zap,
  Shield,
  Share2,
  Maximize2,
  ExternalLink,
  QrCode,
  LucideIcon,
} from 'lucide-react'
import { INVITATIONS, CATEGORIES, Invitation } from './data/invitations'

const WHATSAPP_GENERAL_URL =
  'https://wa.me/916362617878?text=Hello%20Invitation%20Media!%20I%20saw%20your%20website%20and%20I%20would%20love%20to%20get%20a%20custom%20digital%20invitation%20created%20for%20my%20event.%20Could%20you%20please%20share%20the%20details%3F'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="px-6 py-4 md:px-12 flex items-center justify-between border-b border-border/70 bg-background/80 backdrop-blur-xl sticky top-0 z-50 transition-all">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="SAI SHISHIR TOURS"
            width={180}
            height={52}
            className="h-10 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
          <Link href="#catalogue" className="hover:text-primary transition-colors">
            Invitations
          </Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">
            Stories
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={WHATSAPP_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.14em] px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" />
            </span>
            <MessageCircle size={15} />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-primary rounded-lg hover:bg-surface"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-3 flex flex-col text-sm font-bold uppercase tracking-wider text-text-secondary z-40 relative shadow-xl"
          >
            {[
              ['#catalogue', 'All Invitations'],
              ['#how-it-works', 'How It Works'],
              ['#features', 'Features'],
              ['#testimonials', 'Stories'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-border/50 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#25D366] text-white text-center py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle size={17} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Showcase Section */}
      <Showcase />

      {/* Stats Section */}
      <StatsSection />

      {/* Process / How It Works */}
      <ProcessSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stories / Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Magic Banner */}
      <CtaSection />

      {/* Footer */}
      <footer className="bg-[#111315] text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="SAI SHISHIR TOURS"
                width={180}
                height={52}
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <nav className="flex flex-wrap justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
              <Link href="#catalogue" className="hover:text-white transition-colors">
                Invitations
              </Link>
              <Link href="#how-it-works" className="hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#features" className="hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="hover:text-white transition-colors">
                Stories
              </Link>
            </nav>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-[11px] text-white/40 font-medium tracking-widest uppercase">
              © 2026 Invitation Media. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* =========================================================================
   Showcase Component (Hero + Filters + Carousel / Grid View + Fullscreen Modal)
   ========================================================================= */
function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [fullscreenModal, setFullscreenModal] = useState<Invitation | null>(null)

  const filteredDesigns =
    selectedCategory === 'All'
      ? INVITATIONS
      : INVITATIONS.filter((item) => item.category === selectedCategory)

  const activeDesign = filteredDesigns[currentIndex] || filteredDesigns[0]

  const handleOrderWhatsApp = (
    url: string,
    title: string,
    category: string,
    price: string,
    slug: string
  ) => {
    const text = `Hello Invitation Media! I saw the "${title}" (${category} - ${price}) on your website (Link: https://www.invitationmedia.in/invitations/${slug}) and I would love to get more details and order it for my event.`
    window.open(`https://wa.me/916362617878?text=${encodeURIComponent(text)}`, '_blank')
  }

  const copyInvitationLink = (slug: string) => {
    if (typeof window !== 'undefined') {
      const fullUrl = `${window.location.origin}/invitations/${slug}`
      navigator.clipboard.writeText(fullUrl)
      setCopiedSlug(slug)
      setTimeout(() => setCopiedSlug(null), 2500)
    }
  }

  return (
    <>
      <section
        id="catalogue"
        className="relative pt-20 pb-12 px-6 text-center max-w-5xl mx-auto flex flex-col items-center bg-background overflow-hidden"
      >
        {/* Glow ambient lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface border border-border shadow-xs text-text-secondary text-[11px] font-medium mb-6 hover:shadow-sm transition-shadow"
        >
          <div className="flex gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <span className="text-text-primary font-bold">4.9 / 5.0</span>
          <span className="text-border">|</span>
          <span className="text-text-secondary">Custom Digital Invitations</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.1] font-medium tracking-tight mb-6 max-w-4xl"
        >
          Breathtaking invitations <br className="hidden sm:inline" />
          <span className="italic font-light text-text-secondary bg-clip-text text-transparent bg-gradient-to-r from-primary via-text-primary to-text-secondary">
            crafted for your moment.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed opacity-90 mb-8"
        >
          Explore live, interactive previews of our 20+ premium digital invitation websites. Filter by
          category, test live demos, scan QR codes & share dedicated links with your partner.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 w-full py-3 px-2 max-w-4xl mx-auto"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentIndex(0)
                }}
                className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#C5A059] text-white shadow-md font-bold scale-105'
                    : 'bg-white/90 text-text-secondary border border-[#C5A059]/30 hover:text-text-primary hover:border-[#C5A059] hover:bg-white shadow-2xs'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* View Switcher Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          <div className="flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-[#C5A059]/30 shadow-xs">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                viewMode === 'carousel'
                  ? 'bg-[#C5A059] text-white shadow-xs'
                  : 'text-[#5A554E] hover:text-[#1A1A1A]'
              }`}
              title="Interactive Carousel View"
            >
              <SlidersVertical size={14} />
              <span>Carousel</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#C5A059] text-white shadow-xs'
                  : 'text-[#5A554E] hover:text-[#1A1A1A]'
              }`}
              title="All Designs Grid View"
            >
              <Grid3X3 size={14} />
              <span>Grid View</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Designs Display */}
      <section className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto bg-background">
        {viewMode === 'carousel' ? (
          <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-4">
            {/* Carousel Mockup Column */}
            <div className="relative w-full max-w-[360px] mx-auto shrink-0">
              {/* Previous Button */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) => (prev - 1 + filteredDesigns.length) % filteredDesigns.length
                  )
                }
                className="absolute -left-5 sm:-left-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Previous Design"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % filteredDesigns.length)
                }
                className="absolute -right-5 sm:-right-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Next Design"
              >
                <ChevronRight size={22} />
              </button>

              {/* Phone Device Mockup Frame */}
              <motion.div
                key={activeDesign.url}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-[9/18] bg-surface rounded-[2.8rem] p-3 shadow-2xl border border-border/80 transition-all group"
              >
                {/* Fullscreen Expand Action on Hover */}
                <button
                  onClick={() => setFullscreenModal(activeDesign)}
                  className="absolute top-4 right-4 z-40 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-text-secondary hover:text-primary shadow-sm backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Expand Fullscreen Preview"
                >
                  <Maximize2 size={14} />
                </button>

                {/* iPhone Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-text-primary/10 rounded-full z-30 pointer-events-none backdrop-blur-xs" />

                {/* Inner Screen with Live Iframe */}
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-background border border-border/40 shadow-inner">
                  <iframe
                    src={activeDesign.url}
                    className="absolute top-0 left-0 w-full h-full border-none bg-background"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    loading="lazy"
                    title={activeDesign.title}
                  />
                </div>

                {/* Home Indicator Bar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-text-primary/20 rounded-full pointer-events-none z-30" />
              </motion.div>

              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-1.5 max-w-[280px] overflow-x-auto mx-auto mt-6 py-1 no-scrollbar">
                {filteredDesigns.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 shrink-0 ${
                      currentIndex === idx
                        ? 'w-6 bg-primary'
                        : 'w-2 bg-border hover:bg-text-secondary'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Design Details Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-md">
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 flex items-center gap-1.5">
                  <Smartphone size={14} />
                  <span>{activeDesign.category}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-bold text-xs flex items-center gap-1">
                  <Tag size={12} />
                  <span>Price: {activeDesign.price}</span>
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-text-primary leading-tight">
                {activeDesign.title}
              </h2>

              <p className="text-base text-text-secondary leading-relaxed font-light">
                {activeDesign.desc}
              </p>

              <div className="space-y-2.5 w-full text-xs text-text-secondary font-medium pt-2">
                {[
                  'Interactive Mobile RSVP Form',
                  'Google Maps Location Pins',
                  'Custom Couple Music Track',
                  'Live Countdown & Photo Gallery',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center lg:justify-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Check size={11} />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Order via WhatsApp & View Dedicated Page */}
              <div className="pt-4 w-full space-y-2.5">
                <button
                  onClick={() =>
                    handleOrderWhatsApp(
                      activeDesign.url,
                      activeDesign.title,
                      activeDesign.category,
                      activeDesign.price,
                      activeDesign.slug
                    )
                  }
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 w-full py-4 px-8 rounded-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#25D366] hover:text-white transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
                  <span>Order ({activeDesign.price}) via WhatsApp</span>
                </button>

                {/* Dedicated Page Link & Share Link */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/invitations/${activeDesign.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border border-border bg-surface hover:bg-background text-text-primary text-[11px] font-bold uppercase tracking-wider transition-colors shadow-2xs text-center"
                  >
                    <span>Full Page & QR</span>
                    <ArrowRight size={13} />
                  </Link>

                  <button
                    onClick={() => copyInvitationLink(activeDesign.slug)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border border-border bg-surface hover:bg-background text-text-secondary hover:text-text-primary text-[11px] font-bold uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    {copiedSlug === activeDesign.slug ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={13} />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Jump to Design Buttons */}
              <div className="pt-6 w-full border-t border-border/60">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">
                  Jump to design:
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-h-32 overflow-y-auto pr-1 no-scrollbar">
                  {filteredDesigns.map((item, idx) => (
                    <button
                      key={item.url}
                      onClick={() => setCurrentIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-all ${
                        currentIndex === idx
                          ? 'border-primary bg-primary/10 text-primary font-bold'
                          : 'border-border bg-surface text-text-secondary hover:border-primary/40'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence>
              {filteredDesigns.map((item, idx) => (
                <motion.div
                  key={item.url}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.05 * idx }}
                  className="group flex flex-col items-center"
                >
                  {/* Phone Mockup Frame */}
                  <div className="relative w-full aspect-[9/18] bg-surface rounded-[2.5rem] p-3 shadow-md border border-border/80 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-primary/30">
                    <button
                      onClick={() => setFullscreenModal(item)}
                      className="absolute top-4 right-4 z-40 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-text-secondary hover:text-primary shadow-sm backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Expand Fullscreen Preview"
                    >
                      <Maximize2 size={13} />
                    </button>

                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-text-primary/10 rounded-full z-30 pointer-events-none backdrop-blur-xs" />
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-background border border-border/40 shadow-inner">
                      <iframe
                        src={item.url}
                        className="absolute top-0 left-0 w-full h-full border-none bg-background"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                        loading="lazy"
                        title={item.title}
                      />
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-text-primary/20 rounded-full pointer-events-none z-30" />
                  </div>

                  {/* Card Details */}
                  <div className="mt-7 text-center space-y-4 w-full max-w-[320px]">
                    <div>
                      <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-1">
                        <span>{item.category}</span>
                        <span className="text-border">•</span>
                        <span className="text-emerald-600 font-bold">{item.price}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-medium text-text-primary group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() =>
                          handleOrderWhatsApp(
                            item.url,
                            item.title,
                            item.category,
                            item.price,
                            item.slug
                          )
                        }
                        className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2.5 w-full py-3 px-6 rounded-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-[0.12em] transition-all duration-300 shadow-sm hover:shadow-lg hover:bg-[#25D366] hover:text-white active:scale-95 transform hover:-translate-y-0.5"
                      >
                        <MessageCircle
                          size={16}
                          className="transition-transform group-hover/btn:scale-110"
                        />
                        <span>Get ({item.price})</span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/invitations/${item.slug}`}
                          className="py-2 px-3 rounded-full border border-border bg-surface hover:bg-background text-text-primary text-[11px] font-semibold uppercase tracking-wider transition-colors"
                        >
                          View Details
                        </Link>
                        <button
                          onClick={() => copyInvitationLink(item.slug)}
                          className="flex items-center justify-center gap-1 py-2 px-3 rounded-full border border-border bg-surface hover:bg-background text-text-secondary hover:text-text-primary text-[11px] font-semibold uppercase tracking-wider transition-colors"
                        >
                          {copiedSlug === item.slug ? (
                            <span className="text-emerald-600 font-bold">Copied!</span>
                          ) : (
                            <>
                              <Share2 size={12} />
                              <span>Share</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Fullscreen Interactive Modal Preview */}
      <AnimatePresence>
        {fullscreenModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-4 sm:p-6"
          >
            <div className="flex items-center justify-between text-white pb-4 border-b border-white/15">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-widest">
                  {fullscreenModal.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                  {fullscreenModal.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/invitations/${fullscreenModal.slug}`}
                  className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                >
                  <span>Dedicated Page</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href={fullscreenModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Open URL</span>
                </a>

                <button
                  onClick={() => setFullscreenModal(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-5xl mx-auto mt-4 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl relative">
              <iframe
                src={fullscreenModal.url}
                className="w-full h-full border-none bg-background"
                sandbox="allow-scripts allow-same-origin allow-forms"
                title={fullscreenModal.title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* =========================================================================
   Stats Section Component
   ========================================================================= */
function StatsSection() {
  const stats = [
    { icon: Send, value: '500+', label: 'Invitations Delivered' },
    { icon: Star, value: '4.9 / 5', label: 'Client Satisfaction' },
    { icon: Eye, value: '98%', label: 'Guest View Rate' },
    { icon: Clock, value: '< 24h', label: 'Quick Turnaround' },
  ]

  return (
    <section className="py-10 bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-surface/80 backdrop-blur-md border border-border/80 rounded-3xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <IconComp size={18} />
                  </div>
                  <span className="font-serif text-2xl md:text-3xl text-text-primary font-medium tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-text-secondary font-bold mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   Process Section ("How It Works")
   ========================================================================= */
function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Pick Your Theme',
      desc: 'Browse our catalogue and pick the design that matches your wedding style, mood, and personality.',
      delay: 0,
    },
    {
      number: '2',
      title: 'Customize & Edit',
      desc: 'Use the live editor to add your names, date, venue, timeline, RSVP form, and personal gallery photos.',
      delay: 0.15,
    },
    {
      number: '3',
      title: 'Share the Link',
      desc: 'Share one beautiful link with all your guests. Track RSVPs, dietary notes, and attendance in real-time.',
      delay: 0.3,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Process"
          title="Beautiful invitations in three steps"
          subtitle="From signup to sharing your invitation link — the whole process takes less than 30 minutes."
        />

        <div className="relative grid md:grid-cols-3 gap-16 md:gap-6 mt-16">
          <div className="hidden md:block absolute top-8 left-[calc(16.66%)] right-[calc(16.66%)] h-px border-t border-border z-0" />
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={WHATSAPP_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:shadow-hover transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Create Your Invitation <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessStep({
  number,
  title,
  desc,
  delay,
}: {
  number: string
  title: string
  desc: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center space-y-6 relative z-10"
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-16 h-16 rounded-full bg-surface border border-border text-primary font-serif text-2xl flex items-center justify-center shadow-soft">
        {number}
      </div>
      <div className="space-y-3">
        <h3 className="font-serif text-2xl text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary font-light leading-relaxed max-w-[280px]">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

/* =========================================================================
   Features Section
   ========================================================================= */
function FeaturesSection() {
  const features = [
    {
      icon: Mail,
      title: 'Animated Envelope',
      desc: 'Guests experience the joy of opening a beautifully crafted virtual envelope, complete with smooth physics and customizable animations.',
      delay: 0,
    },
    {
      icon: Sparkles,
      title: 'Premium Themes',
      desc: 'Select from exclusive layouts, rich typography, and harmonious color palettes carefully curated by our design team.',
      delay: 0.1,
    },
    {
      icon: Users,
      title: 'Smart RSVP',
      desc: 'Seamlessly manage attendance, dietary restrictions, and personal notes within a unified, real-time dashboard.',
      delay: 0.2,
    },
    {
      icon: MousePointer,
      title: 'Live Editor',
      desc: 'Design your invitation directly in the browser. Every adjustment is instantly reflected with no page reloads.',
      delay: 0.3,
    },
    {
      icon: Zap,
      title: 'Instant Access',
      desc: 'Share a clean, bespoke URL with your guests. Accessible instantly on any device without required app downloads.',
      delay: 0.4,
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      desc: "Your celebration's details remain confidential. Only invited guests with your link can view the event information.",
      delay: 0.5,
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need for the perfect invitation"
          subtitle="Thoughtfully built features designed to delight both you and your guests with elegance and ease."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: IconComp,
  title,
  desc,
  delay,
}: {
  icon: LucideIcon
  title: string
  desc: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="group flex flex-col items-start p-8 rounded-2xl transition-all duration-300 hover:bg-surface hover:shadow-soft"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-6 text-primary transition-transform duration-300 group-hover:scale-110">
        <IconComp size={24} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl text-text-primary mb-3">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed font-light">{desc}</p>
    </motion.div>
  )
}

/* =========================================================================
   Stories / Testimonials Section
   ========================================================================= */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah & Arjun',
      event: 'Wedding — Mumbai',
      delay: 0,
      quote:
        "We got so many messages from guests saying the invitation was the most beautiful they'd ever received. The envelope animation literally made people gasp!",
    },
    {
      name: 'Priya & James',
      event: 'Anniversary — Delhi',
      delay: 0.15,
      quote:
        'The live editor made everything so easy. We customized the theme in 20 minutes and our guests were blown away. The RSVP tracking saved us so much work.',
    },
    {
      name: 'Meera & Kabir',
      event: 'Engagement — Bengaluru',
      delay: 0.3,
      quote:
        'I loved that we could upload our own custom elements. It felt so personal and unique. Our guests kept replaying it just for the animation!',
    },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Real Couples"
          title="Stories that made us smile"
          subtitle="Real experiences from couples who chose Invitation Media for their special day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-16">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  event,
  quote,
  delay,
}: {
  name: string
  event: string
  quote: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col border-l border-border pl-8 py-2 relative"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-border" />
      <div className="flex gap-1 text-accent mb-6 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="text-base text-text-primary font-serif italic leading-relaxed mb-8 flex-1">
        &quot;{quote}&quot;
      </p>
      <div>
        <p className="text-sm font-semibold text-text-primary mb-1">{name}</p>
        <p className="text-[10px] uppercase tracking-widest text-text-secondary/70 font-semibold">
          {event}
        </p>
      </div>
    </motion.div>
  )
}

/* =========================================================================
   Call to Action (CTA) Banner Section
   ========================================================================= */
function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6 border border-accent/30 px-5 py-2 rounded-full backdrop-blur-md">
            <Sparkles size={12} />
            <span>Let&apos;s Create Magic</span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-foreground leading-tight">
            Your guests deserve <br />
            <span className="italic font-light text-accent">something unforgettable.</span>
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 font-light mt-6 leading-relaxed max-w-xl mx-auto">
            Get a custom animated digital invitation website built for your wedding or special
            celebration. Chat with us on WhatsApp to get started today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href={WHATSAPP_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#111315] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
            <span>Order via WhatsApp</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 pt-6"
        >
          {[
            'Custom Themes & Music',
            'Fast 24-Hour Delivery',
            'Unlimited RSVP Management',
          ].map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-primary-foreground/70"
            >
              <Check size={14} className="text-accent" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================================
   Section Header Utility Component
   ========================================================================= */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="text-center space-y-4 mb-20">
      <motion.span
        className="inline-block text-[10px] uppercase tracking-[0.35em] font-bold text-primary"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-sm md:text-base text-text-secondary max-w-lg mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
