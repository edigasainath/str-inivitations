import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invitation Media | Premium Digital Invitations & RSVP Tracker',
  description:
    'Create beautiful, premium, animated digital invitations for Weddings, Birthdays, Anniversaries, Corporate Events, and more. Track RSVPs instantly in real-time.',
  keywords: [
    'digital invitations',
    'online RSVPs',
    'wedding invitations online',
    'birthday invitations',
    'event planner',
    'custom invites',
    'premium cards',
    'invitation media',
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Invitation Media | Premium Digital Invitations',
    description: 'Create beautiful animated invitations for any event and manage guest lists instantly.',
    siteName: 'Invitation Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitation Media | Premium Digital Invitations',
    description: 'Create beautiful animated invitations for any event and manage guest lists instantly.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="font-sans antialiased bg-zinc-50">{children}</body>
    </html>
  )
}
