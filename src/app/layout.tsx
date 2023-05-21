import Link from 'next/link'
import press_start_p2 from './fonts'
import './globals.css'
import { Suspense } from 'react'
import Analytics from './components/Analytics'

export const metadata = {
  title: 'Roberto Reale Josef Antonio homepage',
  description:
    'My personal homepage, built to showcase my previous work and my technical skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={press_start_p2.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        <main className="flex h-full flex-col items-center justify-between p-24">
          {children}
          <Link className="mt-16" href="/">
            Home
          </Link>
        </main>
      </body>
    </html>
  )
}
