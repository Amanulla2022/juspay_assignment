import Header from './components/Header'
import RightPanel from './components/RightPanel'
import Sidebar from './components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'JUSPAY',
  description: 'DASHBOARD BY AMANULLA!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 lg:p-10 overflow-auto">{children}</main>
        </div>
        <RightPanel />
      </body>
    </html>
  )
}
