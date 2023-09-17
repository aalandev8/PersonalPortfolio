"use client"

import './globals.css'
import Header from '@/components/Ui/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='html' lang="en">
      <body className='body'>
      <Header />
        {children}
      </body>
    </html>
  )
}
