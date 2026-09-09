import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INVITATIONS, getInvitationBySlug, getAllSlugs } from '../../data/invitations'
import InvitationDetailClient from './InvitationDetailClient'

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const invitation = getInvitationBySlug(params.slug)

  if (!invitation) {
    return {
      title: 'Invitation Not Found | Invitation Media',
    }
  }

  return {
    title: `${invitation.title} | ${invitation.category} - Invitation Media`,
    description: `${invitation.desc} Custom animated invitation with music, RSVP, countdown and location directions.`,
    openGraph: {
      title: `${invitation.title} | Premium Digital Invitation`,
      description: invitation.desc,
      url: `https://www.invitationmedia.in/invitations/${invitation.slug}`,
      siteName: 'Invitation Media',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${invitation.title} | Premium Digital Invitation`,
      description: invitation.desc,
    },
  }
}

export default function InvitationDetailPage({ params }: PageProps) {
  const invitation = getInvitationBySlug(params.slug)

  if (!invitation) {
    notFound()
  }

  // Similar designs in same or related category
  const similarDesigns = INVITATIONS.filter(
    (item) => item.slug !== invitation.slug && item.category === invitation.category
  ).slice(0, 3)

  const fallbackSimilar =
    similarDesigns.length > 0
      ? similarDesigns
      : INVITATIONS.filter((item) => item.slug !== invitation.slug).slice(0, 3)

  return (
    <InvitationDetailClient invitation={invitation} similarDesigns={fallbackSimilar} />
  )
}
