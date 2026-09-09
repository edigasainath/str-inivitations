'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  ArrowLeft,
  Share2,
  Check,
  Smartphone,
  Maximize2,
  ExternalLink,
  Star,
  Clock,
  Palette,
  QrCode,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'
import { Invitation } from '../../data/invitations'

interface Props {
  invitation: Invitation
  similarDesigns: Invitation[]
}

export default function InvitationDetailClient({ invitation, similarDesigns }: Props) {
  const [copied, setCopied] = useState(false)
  const [viewMode, setViewMode] = useState<'mobile' | 'fullscreen'>('mobile')
  const [showQrModal, setShowQrModal] = useState(false)

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const orderWhatsAppUrl = `https://wa.me/916362617878?text=${encodeURIComponent(
    `Hello Invitation Media! I am interested in ordering the "${invitation.title}" (${invitation.category} - ${invitation.price}). Here is the link I was viewing: https://www.invitationmedia.in/invitations/${invitation.slug}. Could you please share the next steps?`
  )}`

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    invitation.url
  )}`

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Top Header */}
      <header className="px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-border/70 bg-background/85 backdrop-blur-xl sticky top-0 z-50 transition-all">
        <div className="flex items-center gap-4">
          <Link
            href="/#catalogue"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-primary transition-colors py-1 px-2.5 rounded-full hover:bg-surface border border-transparent hover:border-border"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">All Designs</span>
          </Link>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Invitation Media"
              width={140}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold border border-border bg-surface hover:bg-background text-text-secondary hover:text-text-primary transition-all shadow-xs"
            title="Share this invitation"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span className="text-emerald-600 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={14} />
                <span className="hidden sm:inline">Share Link</span>
              </>
            )}
          </button>

          <a
            href={orderWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2 rounded-full hover:opacity-95 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            <MessageCircle size={15} />
            <span>Order</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb & Title Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-text-secondary font-medium mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#catalogue" className="hover:text-primary transition-colors">
              Invitations
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{invitation.title}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8b6928] text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={12} />
                  {invitation.tag}
                </span>
                <span className="text-xs text-text-secondary font-medium">
                  {invitation.category}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-text-primary tracking-tight">
                {invitation.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-text-secondary line-through">₹5,999/-</div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-serif">
                  {invitation.price}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workspace Grid: Left Interactive Device Showcase, Right Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Phone Mockup / Fullscreen Live Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* View Mode Controls Bar */}
            <div className="w-full max-w-[440px] flex items-center justify-between mb-4 bg-surface/90 backdrop-blur-md p-1.5 rounded-full border border-border shadow-xs text-xs">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all ${
                    viewMode === 'mobile'
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Smartphone size={14} />
                  <span>Mobile Device</span>
                </button>
                <button
                  onClick={() => setViewMode('fullscreen')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all ${
                    viewMode === 'fullscreen'
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Maximize2 size={14} />
                  <span>Expanded View</span>
                </button>
              </div>

              <a
                href={invitation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-text-secondary hover:text-primary font-medium px-3 py-1.5 rounded-full transition-colors"
                title="Open in new window"
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Frame Container */}
            {viewMode === 'mobile' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-[360px] aspect-[9/18.5] bg-surface rounded-[2.8rem] p-3 shadow-2xl border border-border/90"
              >
                {/* Dynamic iPhone Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-text-primary/10 rounded-full z-30 pointer-events-none backdrop-blur-xs" />

                {/* Inner Screen with Live Iframe */}
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-background border border-border/40 shadow-inner">
                  <iframe
                    src={invitation.url}
                    className="absolute top-0 left-0 w-full h-full border-none bg-background"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    loading="lazy"
                    title={invitation.title}
                  />
                </div>

                {/* Home Indicator Bar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-text-primary/20 rounded-full pointer-events-none z-30" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[640px] sm:h-[720px] bg-surface rounded-2xl shadow-xl border border-border overflow-hidden"
              >
                <iframe
                  src={invitation.url}
                  className="w-full h-full border-none bg-background"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  loading="lazy"
                  title={invitation.title}
                />
              </motion.div>
            )}

            {/* Subtext actions */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live interactive demo
              </span>
              <span>•</span>
              <button
                onClick={() => setShowQrModal(true)}
                className="inline-flex items-center gap-1 hover:text-primary font-semibold underline underline-offset-4"
              >
                <QrCode size={13} />
                Scan to test on your phone
              </button>
            </div>
          </div>

          {/* RIGHT: Invitation Specs & Actions Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Description Card */}
            <div className="bg-surface/90 backdrop-blur-md rounded-2xl p-6 border border-border shadow-xs space-y-4">
              <p className="text-base text-text-secondary leading-relaxed font-light">
                {invitation.desc}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-background border border-border/80 text-xs">
                  <Palette size={16} className="text-[#C5A059] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-secondary/70">Theme</p>
                    <p className="font-semibold text-text-primary">{invitation.colorTheme}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-background border border-border/80 text-xs">
                  <Clock size={16} className="text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-secondary/70">
                      Delivery
                    </p>
                    <p className="font-semibold text-text-primary">{invitation.deliveryTime}</p>
                  </div>
                </div>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs text-text-secondary">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star size={14} fill="currentColor" />
                  <span className="text-text-primary">{invitation.rating} / 5.0</span>
                </div>
                <span>{invitation.reviewsCount} verified celebrations</span>
              </div>
            </div>

            {/* Primary Order Action Button */}
            <div className="space-y-3">
              <a
                href={orderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 px-8 rounded-full bg-[#25D366] text-white font-bold text-sm uppercase tracking-[0.14em] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
                <span>Order via WhatsApp ({invitation.price})</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full border border-border bg-surface text-text-primary font-semibold text-xs uppercase tracking-wider hover:bg-background transition-all shadow-xs"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={16} />
                    <span>Copy Shareable Link for Partner</span>
                  </>
                )}
              </button>
            </div>

            {/* What is Included Checklist */}
            <div className="bg-surface/90 backdrop-blur-md rounded-2xl p-6 border border-border shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-medium text-text-primary flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#C5A059]" />
                <span>Everything Included in this Package</span>
              </h3>

              <ul className="space-y-2.5 text-xs text-text-secondary font-medium">
                {invitation.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick How it works */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-text-secondary space-y-2">
              <p className="font-bold text-text-primary uppercase tracking-wider text-[11px]">
                How Customization Works:
              </p>
              <p className="leading-relaxed font-light">
                Click &quot;Order via WhatsApp&quot; to send us your couple names, wedding date,
                program timings, venue address, photos, and music preference. We deliver your ready
                live link within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Similar / Related Designs Section */}
        {similarDesigns.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">
                  More Inspiration
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-text-primary font-medium mt-1">
                  Similar {invitation.category} Designs
                </h2>
              </div>
              <Link
                href="/#catalogue"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#8b6928] hover:text-primary transition-colors"
              >
                <span>View All 22 Designs</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarDesigns.map((item) => (
                <div
                  key={item.slug}
                  className="group bg-surface rounded-2xl p-4 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
                >
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-background border border-border/40 shadow-inner mb-4">
                    <iframe
                      src={item.url}
                      className="w-full h-full border-none pointer-events-none"
                      loading="lazy"
                      title={item.title}
                    />
                    <Link
                      href={`/invitations/${item.slug}`}
                      className="absolute inset-0 z-20"
                      aria-label={`View ${item.title}`}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-text-secondary mb-1">
                        <span>{item.category}</span>
                        <span className="text-emerald-600">{item.price}</span>
                      </div>
                      <h3 className="font-serif text-xl font-medium text-text-primary group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="pt-4 flex items-center gap-2">
                      <Link
                        href={`/invitations/${item.slug}`}
                        className="flex-1 text-center py-2.5 px-4 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* QR Code Modal for Phone Preview */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQrModal(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface rounded-3xl p-8 max-w-sm w-full text-center border border-border shadow-2xl space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <QrCode size={24} />
              </div>
              <h3 className="font-serif text-2xl text-text-primary font-medium">
                Test on Your Mobile
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Scan this QR code with your phone camera to experience{' '}
                <strong className="text-text-primary">{invitation.title}</strong> directly on your
                mobile screen.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-border shadow-inner inline-block">
                {/* QR code image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrCodeUrl}
                  alt={`QR Code for ${invitation.title}`}
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowQrModal(false)}
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#111315] text-white py-16 px-6 border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Invitation Media"
              width={140}
              height={42}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-[11px] text-white/40 font-medium tracking-widest uppercase">
            © 2026 Invitation Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
