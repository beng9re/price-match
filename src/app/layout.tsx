import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

const noto = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '가격 매칭',
  description: '온라인 스토어 가격 비교',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
