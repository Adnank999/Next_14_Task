'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { store } from './store/store'
import { taskApi } from './features/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Provider store={store}>
          {children}
        </Provider>
       
        
        
        
        </body>
    </html>
  )
}
