import Link from "next/link"
import './globals.css'

export const metadata = {
  title: 'Boats and Holes',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className="flex flex-row w-full h-12 bg-yellow-400 justify-between items-center text-white px-12">
            <Link href="/">Home</Link>
            <Link href="/notes">APITest</Link>
          </nav>
        </main>
        <div className="mx-12 pt-12">
          {children}
        </div>
      </body>
    </html>
  )
}
